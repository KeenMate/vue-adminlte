<template>
	<page :is-loading="!loaded">
		<template #header>
			<page-header title="Components" />
		</template>
		<div class="row">
			<div class="col-md-6">
				<lte-button is-info @click.native="toggleModal">
					Open modal
				</lte-button>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<card title="File upload test">
					<file-upload v-model="uploadedFile" />
				</card>
			</div>
			<div class="col-md-6">
				<image-upload server="/" :files="someFiles" accept="image/jpeg" />
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<card is-tabbed is-outlined is-primary>
					<template #header>
						<card-tabs :tabs="demoTabs" #default="{item}" :key="item">
							{{item}}
						</card-tabs>
					</template>
				</card>
			</div>
		</div>
		<div class="row">
			<div class="col-md-3">
				<card-table :items="myTableItems" item-key="id" title="Simple Card Table" is-paddingless>
					<template #head>
						<th>#</th>
						<th>The Title</th>
					</template>
					<template #default="{item, index}">
						<tr :key="item.id">
							<td>{{index + 1}}</td>
							<td>{{item.title}}</td>
						</tr>
					</template>
					<template #no-entries>
						<td colspan="2">
							<p style="text-align: center">(No entries to display)</p>
						</td>
					</template>
				</card-table>
			</div>
			<div class="col-md-9">
				<card title="Summernote editor demo" is-paddingless>
					<summernote-editor v-model="sampleContent" />
				</card>

				<card title="EasyMDE editor demo" is-paddingless>
					<markdown-editor v-model="sampleContent" />
				</card>

				<h3>Sample output:</h3>
				<p v-html="sampleContent"></p>
			</div>
		</div>
		<modal ref="modal">
			<template #header>Some modal header title</template>
			<form-input v-model="modalInput" />
			<template #footer>
				<lte-button @click.native="toggleModal">
					Close
				</lte-button>
			</template>
		</modal>
	</page>
</template>

<script>
export default {
	name: "ComponentsPage",
	mounted() {
		setTimeout(() => {
			this.loaded = true
		}, 3000)
	},
	methods: {
		toggleModal() {
			this.$refs.modal.toggle()
		}
	},
	data() {
		return {
			loaded: false,
			modalInput: "",
			someFiles: [],
			demoTabs: [
				"Tab 1",
				"Tab 2",
				"Tab 3"
			],
			activeTab: null,
			myTableItems: [
				{
					id: 1,
					title: "Title"
				},
				{
					id: 2,
					title: "Title"
				},
				{
					id: 3,
					title: "Title"
				},
				{
					id: 4,
					title: "Title"
				}
			],
			sampleContent: "<h1>Hello world</h1>",
			uploadedFile: null
		}
	}
}
</script>

<style scoped>

</style>
