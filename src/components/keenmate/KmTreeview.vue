<template>

</template>

<script>
export default {
	name: "KmTreeview",
	props: {
		/**
		 * single-level nested array of tree data to display
		 * @type {object[]}
		 */
		tree: Array,

		/**
		 * @type {function(object): string}
		 */
		getKey: () => String,

		/**
		 * @type {function(object): string}
		 */
		getParentKey: () => String
	},
}
</script>

<style scoped>

</style>
