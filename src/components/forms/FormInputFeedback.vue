<template>
	<span v-if="visible" :class="styles">
		<slot></slot>
	</span>
</template>

<script>
export default {
	name: "FormInputFeedback",
	props: {
		/**
		 * @type {Boolean}
		 * @description Controls whether feedback is displayed or not
		 */
		visible: Boolean,

		/**
		 * @type {Object | Array | String}
		 * @description Classes to be applied to feedback
		 */
		styles: [Object, Array, String]
	}
}
</script>

<style scoped>

</style>
