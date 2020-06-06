<template>
	<page>
		<template #header>
			<page-header title="Summernote editor test" />
		</template>
		<div class="row">
			<div class="col-md-6">
				<card title="Summernote editor test" is-paddingless>
					<summernote-editor v-model="editorText" />

					<h2>EasyMDE</h2>
					<markdown-editor v-model="editorText" />
				</card>
			</div>
			<div class="col-md-6">
				<card title="Editor text" is-paddingless>
					<p v-html="editorText"></p>
				</card>
			</div>
		</div>
	</page>
</template>

<script>
import "../../src/vendors/adminlte/plugins/summernote/summernote-bs4"

export default {
	name: "SummernoteEditorPage",
	mounted() {
		setTimeout(() => {
			this.editorText = "```Loaded afterwards```"
		}, 1500)
	},
	data() {
		return {
			editorText: "# Hello world"
		}
	}
}
</script>

<style>
	@import "../../src/vendors/adminlte/plugins/summernote/summernote-bs4.min.css";
</style>
