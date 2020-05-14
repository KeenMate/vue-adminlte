<template>
	<section class="content-header">
		<!--<div class="container-fluid">
			<div class="row mb-2">
				<div class="col-sm-6">
					<h1>
						{{title}}
					</h1>
				</div>
				<div class="col-sm-6">
					<PageBreadcrumbs :breadcrumbs="breadcrumbsWithDefault" />
				</div>
			</div>
		</div>-->
		<h1>
			{{title}}
		</h1>
		<PageBreadcrumbs :breadcrumbs="breadcrumbsWithDefault" />
	</section>
</template>

<script>
import PageBreadcrumbs from "../navigation/PageBreadcrumbs"

export default {
	name: "PageHeader",
	components: {PageBreadcrumbs},
	props: {
		title: String,
		/**
		 * @description Array of objects containing visible text, unique key and VueRouter's "to" for routing for building breadcrumbs.
		 * When not specified value will be taken from $route.matched routes to build breadcrumbs from routes' metadata
		 * (expecting 'breadcrumb' field to exist in meta object of route)
		 * @type {[{key: String, text: String, to: String | Object}]}
		 */
		breadcrumbs: Array
	},
	computed: {
		breadcrumbsWithDefault() {
			if (this.breadcrumbs)
				return this.breadcrumbs

			return this.$route.matched
				.map(x => ({
					to: {name: x.name},
					text: x.meta && x.meta.breadbrumb || ""
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
</style>
