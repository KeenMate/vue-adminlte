<template>
	<page>
		<template #header>
			<page-header title="Summernote editor test" />
		</template>
		<div class="row">
			<div class="col-md-6">
				<card title="Summernote editor test" is-paddingless>
					<!--<summernote-editor v-model="editorText" />-->
				</card>
				<card title="EasyMDE">
					<template #header>
						<lte-button @click.native="onLoadData">Load data</lte-button>
						<lte-button @click.native="onLoadDataLocal">Load local data</lte-button>
					</template>
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
	beforeRouteUpdate(to, from, next) {
		this.editorText = "__New text__"
		next()
	},
	mounted() {
		setTimeout(() => {
			this.editorText = "```Loaded afterwards```"
		}, 1500)
	},
	methods: {
		onLoadDataLocal() {
			this.editorText = "**Even newer text**"
		},
		onLoadData() {
			this.$router.push({query: {hello: "world"}})
		}
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
