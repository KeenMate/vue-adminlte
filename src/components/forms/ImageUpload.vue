<template>
	<vue-file-pond
		:files="files"
		:accepted-file-types="accept"
		:server="server"
		:allow-revert="allowRevert"
		:allow-multiple="allowMultiple"
	/>
</template>

<script>
import vueFilePond from "vue-filepond"

import FilePondExifOrientation from "filepond-plugin-image-exif-orientation"
import FilePondPreview from "filepond-plugin-image-preview"

const VueFilePond = vueFilePond(FilePondExifOrientation, FilePondPreview)

export default {
	name: "ImageUpload",
	props: {
		files: Array,

		/**
		 * @description Same as `accept` for input type file
		 * @example "image/jpeg, image/png"
		 * @type {string}
		 */
		accept: String,

		/**
		 * @description URL that FilePond will send images to
		 * qwe
		 * @type {string | object}
		 */
		server: [String, Object],

		/**
		 * @type {Boolean}
		 */
		allowRevert: Boolean,

		/**
		 * @type {Boolean}
		 */
		allowMultiple: Boolean
	},
	components: {
		VueFilePond
	}
}
</script>

<style>
	@import "~filepond/dist/filepond.min.css";
	@import "~filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
</style>
