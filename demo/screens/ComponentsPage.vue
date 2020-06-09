<template>
	<page>
		<template #header>
			<page-header title="Components" />
		</template>
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
			<div class="col-md-3">
				<card-table :items="myTableItems" item-key="id" is-paddingless>
					<template #card-header>Simple Card Table</template>
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
	</page>
</template>

<script>
export default {
	name: "ComponentsPage",
	data() {
		return {
			someFiles: [],
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
