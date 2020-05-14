<template>
	<li class="nav-item d-none d-sm-inline-block">
		<router-link :to="to" class="nav-link">
			<slot></slot>
		</router-link>
	</li>
</template>

<script>

/**
 * @description Uses VueRouter's &lt;router-link&gt; to render top navigation's link
 */
export default {
	name: "TopNavLink",
	props: {
		/**
		 * @type {String | {name: String, path: String}}
		 * @description Passed to &lt;router-link&gt; tag
		 */
		to: null
	}
}
</script>

<style scoped>

</style>
