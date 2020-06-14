<template>
	<section class="content-header">
		<h1>
			<i v-if="iconStyles" :class="iconStyles"></i>
			{{title}}
		</h1>
		<PageBreadcrumbs :breadcrumbs="breadcrumbsWithDefault" />
	</section>
</template>

<script>
import PageBreadcrumbs from "../navigation/PageBreadcrumbs.vue"

/**
 * @typedef RouteItem
 * @type {object | string}
 * @param key {string}
 * @param text {string} Visible part
 * @param to {string | object} To be passed to &lt;router-link&gt;
 */

export default {
	name: "PageHeader",
	components: {PageBreadcrumbs},
	props: {
		title: String,
		/**
		 * @description Array of objects containing visible text, unique key and VueRouter's "to" for routing for building breadcrumbs.
		 * When not specified value will be taken from $route.matched routes to build breadcrumbs from routes' metadata
		 * (expecting 'breadcrumb' field to exist in meta object of route)
		 * @type {RouteItem[]}
		 */
		breadcrumbs: Array,
		icon: String,
		fas: Boolean,
		far: Boolean
	},
	computed: {
		iconStyles() {
			const styles = []

			if (!this.icon)
				return null

			if (this.fas)
				styles.push("fas")
			else if (this.far)
				styles.push("far")
			else
				styles.push("fas")

			if (this.icon)
				styles.push("fa-" + this.icon)

			return styles.join(" ")
		},
		breadcrumbsWithDefault() {
			if (this.breadcrumbs)
				return this.breadcrumbs

			return this.$route.matched
				.filter(x => x.meta && x.meta.breadcrumb)
				.map(x => ({
					to: {name: x.name},
					text: x.meta && x.meta.breadcrumb || ""
				}))
		}
	}
}
</script>

<style lang="scss" scoped>
	.content-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1rem;
	}

	h1 {
		line-height: 1.5;
	}
</style>
