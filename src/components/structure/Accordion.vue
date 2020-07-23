<template>
	<div class="accordion" :id="accId">
		<slot></slot>
	</div>
</template>

<script>
import AccordionChild from "./AccordionChild.vue"

export default {
	name: "Accordion",
	props: {
		/**
		 * Html id of (this) accordion parent
		 */
		accId: String,

		/**
		 * Index of child. If provided, opens just one child via its method
		 * @type {number}
		 */
		value: null
	},
	computed: {
		accordionChildren() {
			return this.$children
				.filter(x => x._isVue && x.$options.name === AccordionChild.name)
				.map((child, index) => {
					child.currentIndex = index
					return child
				})
		}
	},
	watch: {
		value: {
			immediate: true,
			handler(val, old) {
				// noinspection EqualityComparisonWithCoercionJS
				if (val == old)
					return

				const activeChildIndex = Number(val)

				if (!activeChildIndex && activeChildIndex !== 0)
					return

				const indexWithFallback = activeChildIndex || 0

				if (this.tmpSelectedIndex === val)
					return

				window.requestAnimationFrame(() => {
					this.accordionChildren[indexWithFallback] && this.accordionChildren[indexWithFallback].expandCard()
					this.$emit("input", indexWithFallback)
				})
			}
		}
	},
	methods: {
		childSelected(index) {
			this.tmpSelectedIndex = index
			this.$emit("input", index)
		}
	},
	provide() {
		return {
			accordionChildrenSelected: this.childSelected,
			tmpSelectedIndex: -1
		}
	}
}
</script>
