<template>
	<card v-bind="filteredPropsForCard">
		<template #card-title>
			<h2 class="mb-0">
				<button
					ref="cardToggler"
					class="btn btn-link"
					type="button"
					data-toggle="collapse"
					:data-target="appendHash(childId)"
				>
					{{ title }}
				</button>
			</h2>
		</template>
		<template v-slot:header>
			<slot name="header"></slot>
		</template>
		<template v-slot:alternative-body>
			<div
				ref="cardBodyWrapper"
				class="collapse"
				:id="childId"
				:data-parent="appendHash(parent)"
			>
				<div class="card-body">
					<slot></slot>
				</div>
			</div>
		</template>
		<template v-slot:footer>
			<slot name="footer"></slot>
		</template>
	</card>
</template>

<script>
import Card from "./Card.vue"

export default {
	name: "AccordionChild",
	components: {Card},
	props: {
		...Card.props,
		title: String,

		/**
		 * Html id of parent (the .accordion node).
		 */
		parent: String,

		/**
		 * Html id of this accordion.
		 */
		childId: String,
	},
	computed: {
		filteredPropsForCard() {
			return Object.keys(this.$props)
				.filter((key) => !(key in ["title"]) && key in Object.keys(Card.props))
				.reduce((acc, key) => {
					acc[key] = this.$props[key]
					return acc
				}, {})
		},
	},
	mounted() {
		this.cardBodyWrapperObserver = new MutationObserver((mutations) => {
			const classList = mutations
				.map((x) => x.target.getAttribute(x.attributeName).split(" "))
				.reduce((acc, classes) => [...acc, ...classes], [])

			classList.includes("show") &&
				this.accordionChildrenSelected(this.currentIndex)
			console.log("Mutation processed")
		})

		this.cardBodyWrapperObserver.observe(this.$refs.cardBodyWrapper, {
			attributes: true,
			attributeOldValue: true,
			attributeFilter: ["class"],
		})
	},
	beforeDestroy() {
		this.cardBodyWrapperObserver.disconnect()
	},
	methods: {
		/**
		 * interface method. (mostly called by outside world)
		 */
		expandCard() {
			console.log("clicking on button")
			this.$refs.cardToggler.click()
		},
		appendHash(str) {
			const hashIndex = str.indexOf("#")
			if (hashIndex === -1 || hashIndex !== 0) return "#" + str
			else return str
		},
	},
	data() {
		return {
			// isVisible: false,
			cardBodyWrapperObserver: null,

			/**
			 * Configured by parent accordion vue instance
			 */
			currentIndex: -1,
		}
	},
	inject: ["accordionChildrenSelected"],
}
</script>

<style>
</style>
