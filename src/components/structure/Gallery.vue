<template>
	<Card v-bind="$attrs">
		<template #header>
			<slot name="card-header"></slot>
		</template>
		<template #default>
			<vue-draggable
				v-if="isDraggable"
				v-model="imagesGrid"
				@input="onDraggableRowsInput"
			>
				<div
					v-for="imageRow in imagesGrid"
					:key="imageRow.index"
				>
					<vue-draggable
						:list="imageRow.items"
						tag="div"
						class="row"
						@input="onDraggableColumnsInput"
					>
						<div
							v-for="image in imageRow.items"
							:key="image[imageKey]"
							:class="columnClass"
						>
							<slot :image="image">
								<a :href="image.src"
									data-toggle="lightbox"
									:data-title="image.title">
									<img :src="image.msrc" class="img-fluid mb-2" :alt="image.title">
								</a>
							</slot>
						</div>
					</vue-draggable>
				</div>
			</vue-draggable>
			<div
				v-else
				v-for="imageRow in imagesGrid"
				:key="imageRow.index"
				class="row"
			>
				<div
					v-for="image in imageRow.items"
					:key="image[imageKey]"
					:class="columnClass"
				>
					<slot :image="image">
						<a :href="image.src"
							data-toggle="lightbox"
							:data-title="image.title">
							<img :src="image.msrc" class="img-fluid mb-2" :alt="image.title">
						</a>
					</slot>
				</div>
			</div>
		</template>
		<template #footer>
			<slot name="card-footer"></slot>
		</template>
	</Card>
</template>

<script>
import VueDraggable from "vuedraggable"

import Card from "./Card.vue"
import WithRoot from "../helper-components/WithRoot"

const BS_MaxColumnSize = 12

export default {
	name: "Gallery",
	inheritAttrs: false,
	components: {
		VueDraggable,
		Card,
		WithRoot
	},
	props: {
		images: {
			type: Array,
			default: () => []
		},
		imageKey: String,

		/**
		 * Number of columns the gallery component should render
		 * @type {number | string}
		 * @default 4
		 */
		cols: {
			type: [Number, String],
			default: 4
		},

		isDraggable: Boolean
	},
	computed: {
		columnClass() {
			return "col-md-" + (BS_MaxColumnSize / Number(this.cols))
		},
		// imagesGrid() {
		// 	const result = []
		// 	const colsNumber = Number(this.cols)
		//
		// 	for (let rowIndex = 0; rowIndex < this.images.length / colsNumber; rowIndex++)
		// 		result.push({
		// 			index: rowIndex,
		// 			items: this.images.slice(rowIndex * colsNumber, (rowIndex + 1) * colsNumber)
		// 		})
		//
		// 	return result
		// }
	},
	watch: {
		images: {
			immediate: true,
			handler(val) {
				const result = []
				const colsNumber = Number(this.cols)

				for (let rowIndex = 0; rowIndex < val.length / colsNumber; rowIndex++)
					result.push({
						index: rowIndex,
						items: val.slice(rowIndex * colsNumber, (rowIndex + 1) * colsNumber)
					})

				this.imagesGrid = result
			}
		}
	},
	methods: {
		onDraggableRowsInput(val) {
			console.log("draggable rows input", val)
		},
		onDraggableColumnsInput(val) {
			console.log("draggable columns input", val)
		}
	},
	data() {
		return {
			imagesGrid: []
		}
	}
}
</script>

<style lang="scss">
	.row {
		margin-bottom: .5rem;
	}

	img {
		&:hover {
			cursor: pointer;
		}
	}
</style>
