<template>
	<textarea ref="textarea"></textarea>
</template>

<script>
import "../../vendors/admin-lte/plugins/summernote/summernote-bs4.min"

export default {
	name: "SummernoteEditor",
	mounted() {
		$(this.$refs.textarea).summernote()
	}
}
</script>

<style>
	@import "../../vendors/admin-lte/plugins/summernote/summernote-bs4.min.css";
</style>
