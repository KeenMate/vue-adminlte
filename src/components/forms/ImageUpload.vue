<template>
	<vue-file-pond
		:files="files"
		:accepted-file-types="accept"
		:server="server" />
</template>

<script>
import vueFilePond from "vue-filepond"

import FilePondPreview from "filepond-plugin-image-preview"
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css"

const VueFilePond = vueFilePond(FilePondPreview)

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
		server: [String, Object]
	},
	components: {
		VueFilePond
	}
}
</script>

<style>
	@import "~filepond/dist/filepond.min.css";
</style>
