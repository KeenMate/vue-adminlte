<template>
	<page :is-loading="!loaded">
		<template #header>
			<page-header title="Components">
				<lte-button is-primary>This is page header button</lte-button>
			</page-header>
		</template>
		<div class="row accordion-test">
			<div class="col-md-6">
				<accordion acc-id="accordion-test1" v-model="selectedAccordion">
					<accordion-child title="Accordion child 1" parent="accordion-test1" child-id="child-1" @selected="magick">
						Accordion child content 1
					</accordion-child>
					<accordion-child title="Accordion child 2" parent="accordion-test1" child-id="child-2">
						<template v-slot:header>
							<lte-button is-danger>Delete me</lte-button>
						</template>
						Accordion child content 2
					</accordion-child>
					<accordion-child title="Accordion child 3" parent="accordion-test1" child-id="child-3">
						Accordion child content 3
					</accordion-child>
				</accordion>
			</div>
			<div class="col-md-6">
				<div class="row">
					<div class="col-md-3">
						<lte-select v-model="selectedAccordion" label="Accordion selection">
							<option :value="0">1. Accordion</option>
							<option :value="1">2. Accordion</option>
							<option :value="2">3. Accordion</option>
						</lte-select>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-8">
				<gallery :images="galleryImages" image-key="id" cols="6" :is-draggable="true" @dragged="onGalleryImageDragged">
				</gallery>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<lte-button is-info @click="toggleModal">Open modal</lte-button>
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
						<card-tabs :tabs="demoTabs" #default="{item}">{{item}}</card-tabs>
					</template>
				</card>
			</div>
		</div>
		<div class="row">
			<div class="col-md-3">
				<card-table no-tbody is-paddingless>
					<template #card-title>
						Simple Card Table (with draggable)
						<lte-button is-danger>Simple button</lte-button>
					</template>
					<template #head>
						<th>#</th>
						<th>The Title</th>
					</template>
					<vue-draggable
						v-if="myTableItems.length"
						tag="tbody"
						handle=".handle"
					>
						<tr v-for="(item, index) in myTableItems" :key="item.id">
							<td><span class="handle">ASD</span> {{index + 1}}</td>
							<td>{{item.title}}</td>
						</tr>
					</vue-draggable>
					<td v-else colspan="2">
						<p style="text-align: center">(No entries to display)</p>
					</td>
				</card-table>
				<hr />
				<card-table title="Simple Card Table" is-paddingless>
					<template #head>
						<th>#</th>
						<th>The Title</th>
					</template>
					<template>
						<tr v-for="(item, index) in myTableItems" :key="item.id">
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
		<modal ref="modal" :on-hide="onModalHide" @shown="onModalShown" @hidden="onModalHidden">
			<template #header>Some modal header title</template>
			<form-input v-model="modalInput" />
			<template #footer>
				<lte-button @click="toggleModal">Close</lte-button>
			</template>
		</modal>
	</page>
</template>

<script>
import VueDraggable from "vuedraggable"
import * as Toast from "../../src/helpers/toasts"

export default {
	name: "ComponentsPage",
	components: {
		VueDraggable
	},
	mounted() {
		setTimeout(() => {
			this.loaded = true
			// Toast.successToast("Title", "body", {position: "bottomRight"})
		}, 3000)
		// Toast.successToast("Title", null, {position: "bottomRight"})
	},
	methods: {
		onGalleryImageDragged(image, position, target) {
			console.log("Dragged ", image.id, position, target.id)
		},
		magick() {
			console.log("DEMO")
		},
		toggleModal() {
			this.$refs.modal.toggle()
		},
		onModalShown() {
			console.log("Modal has been shown")
		},
		onModalHide(ev) {
			console.log("Modal is trying to hide. Answer is NEIN!")
			ev.preventDefault()
			ev.stopImmediatePropagation()
			return false
		},
		onModalHidden() {
			console.log("Modal has been hidden")
		}
	},
	data() {
		return {
			loaded: false,
			selectedAccordion: 0,
			modalInput: "",
			someFiles: [],
			demoTabs: ["Tab 1", "Tab 2", "Tab 3"],
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
			uploadedFile: null,
			galleryImages: [
				{id: "1", msrc: "https://via.placeholder.com/400x400.png?text=Image+1"},
				{id: "2", msrc: "https://via.placeholder.com/400x400.png?text=Image+2"},
				{id: "3", msrc: "https://via.placeholder.com/400x400.png?text=Image+3"},
				{id: "4", msrc: "https://via.placeholder.com/400x400.png?text=Image+4"},
				{id: "5", msrc: "https://via.placeholder.com/400x400.png?text=Image+5"},
				{id: "6", msrc: "https://via.placeholder.com/400x400.png?text=Image+6"},
				{id: "7", msrc: "https://via.placeholder.com/400x400.png?text=Image+7"},
				{id: "8", msrc: "https://via.placeholder.com/400x400.png?text=Image+8"}
			]
		}
	}
}
</script>

<style scoped>
</style>
