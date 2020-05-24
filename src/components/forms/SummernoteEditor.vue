<template>
	<textarea ref="textarea"></textarea>
</template>

<script>
// import "AdminLTE/plugins/summernote/summernote-bs4.min"
// import "AdminLTE/plugins/summernote/summernote-bs4.min.css"
import "../../vendors/adminlte/plugins/summernote/summernote-bs4.min"

import $ from "jquery"

export default {
	name: "SummernoteEditor",
	mounted() {
		$(this.$refs.textarea).summernote()
	}
}
</script>

<style lang="scss">
	@import "../../vendors/adminlte/plugins/summernote/summernote-bs4.min.css";
</style>
