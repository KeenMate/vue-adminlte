<template>
	<div class="input-group input-group-sm">
		<div class="custom-file">
			<input
				type="file"
				class="custom-file-input"
				:id="id"
				:multiple="isMultiple"
				@input="onInput">
			<label class="custom-file-label" :for="id">{{label}}</label>
		</div>
	</div>
</template>

<script>
// todo: Check if it is possible to add valid/invalid state to this form input

export default {
	name: "FileUpload",
	props: {
		/**
		 * @type {string}
		 * @description ID used for input and label
		 */
		id: String,

		/**
		 * @type {boolean},
		 * @description Sets multiple to file input
		 */
		isMultiple: Boolean,

		/**
		 * @type {string}
		 * @description Label for file input
		 */
		label: {
			type: String,
			default: "Choose file"
		}
	},
	methods: {
		onInput(ev) {
			const files = ev.target.files
			if (!files || !files.length)
				return

			this.$emit("input", this.isMultiple && files || files[0])
		}
	}
}
</script>

<style scoped>

</style>
