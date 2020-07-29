<template>
	<ul class="nav nav-tabs" role="tablist">
		<li v-for="tab in tabs" class="nav-item" :key="getKey(tab)">
			<a
				:class="hrefClasses(tab)"
				data-toggle="pill"
				role="tab"
				@click="$emit('click', tab)"
			>
				<slot :item="tab"></slot>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	name: "CardTabs",
	props: {
		/**
		 * @type {any[]}
		 */
		tabs: Array,

		/**
		 * Function that will be called for every tab to get its key that will be used with v-for directive
		 * @type {function(any): string | number}
		 */
		getKey: {
			type: Function,
			default: (x) => x,
		},

		/**
		 * @type {function(any): boolean}
		 */
		isSelectedTab: {
			type: Function,
			default: () => false,
		},
	},
	methods: {
		hrefClasses(tab) {
			const classes = ["nav-link"]

			this.isSelectedTab(tab) && classes.push("active")

			return classes.join(" ")
		},
	},
}
</script>

<style scoped>
</style>
