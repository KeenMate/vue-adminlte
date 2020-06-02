<template>
	<textarea ref="textarea"></textarea>
</template>

<script>
// import "AdminLTE/plugins/summernote/summernote-bs4.min"
// import "AdminLTE/plugins/summernote/summernote-bs4.min.css"
import "../../vendors/adminlte/plugins/summernote/summernote-bs4.min"

import $ from "jquery"

/**
 * @description Wrapper for summernote editor. Works with `v-model`
 */
export default {
	name: "SummernoteEditor",
	props: {
		/**
		 * @type {string}
		 * @description Value to be passed to editor
		 */
		value: String
	},
	mounted() {
		this.initSummernoteEditor()
	},
	beforeDestroy() {
		this.$editor = $(this.$refs.textarea).summernote("destroy")
	},
	watch: {
		value: {
			immediate: true,
			handler(val) {
				const setter = () => this.$editor.summernote("code", val)

				if (this.$editor) {
					const currentVal = this.$editor.summernote("code")
					if (currentVal !== val)
						setter()
				} else {
					this.initSummernoteEditor()
					this.$nextTick().then(() => setter())
				}
			}
		}
	},
	methods: {
		initSummernoteEditor() {
			this.$editor = $(this.$refs.textarea).summernote({
				callbacks: {
					onChange: this.onSummernoteChange
				}
			})
		},
		onSummernoteChange(content) {
			this.$emit("input", content)
		}
	},
	data() {
		return {
			$editor: null
		}
	}
}
</script>

<style lang="scss">
	@import "../../vendors/adminlte/plugins/summernote/summernote-bs4.min.css";
</style>
