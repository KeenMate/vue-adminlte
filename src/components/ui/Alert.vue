<template>
	<div :class="alertStyles">
		<button v-if="closable" type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
		<slot v-if="$scopedSlots.header" name="header"></slot>
		<h5 v-else>{{title}}</h5>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "Alert",
	props: {
		/**
		 * Title of alert component
		 * @type {string}
		 */
		title: String,

		/**
		 * Determines the color of displayed alert
		 */
		status: String,

		/**
		 * Controls whether to display 'close' button
		 * @type {boolean}
		 */
		closable: Boolean
	},
	computed: {
		alertStyles() {
			return [
				"alert",
				this.status && `alert-${this.status}`,
				this.closable && "alert-dismissible"
			]
		}
	}
}
</script>

<style scoped>

</style>
