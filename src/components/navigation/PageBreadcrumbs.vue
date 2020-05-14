<template>
	<ol class="breadcrumb float-sm-right">
		<!--<li class="breadcrumb-item"><a href="#">Home</a></li>-->
		<!--<li class="breadcrumb-item active">General Form</li>-->
		<li
			v-for="(breadcrumb, i) in breadcrumbs"
			:key="breadcrumb.key"
			:class="['breadcrumb-item', i === breadcrumbs.length - 1 && 'active' || '']"
		>
			<WithRoot :if="i !== breadcrumbs.length - 1">
				<router-link :to="breadcrumb.to">
					{{breadcrumb.text}}
				</router-link>
			</WithRoot>
		</li>
	</ol>
</template>

<script>
export default {
	name: "PageBreadcrumbs",
	props: {
		/**
		 * @description Array of objects containing visible text, unique key and VueRouter's "to" for routing for building breadcrumbs
		 * @type {[{key: String, text: String, to: String | Object}]}
		 */
		breadcrumbs: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style scoped>

</style>
