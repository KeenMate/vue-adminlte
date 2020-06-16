<template>
	<Card v-bind="$attrs">
		<template #header>
			<slot name="card-header"></slot>
			<CardTools />
		</template>
		<template #default>
			<div
				v-for="imageRow in imagesGrid"
				class="row"
			>
				<div
					v-for="image in imageRow"
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
import Card from "./Card.vue"
import CardTools from "./CardTools.vue"

const BS_MaxColumnSize = 12

export default {
	name: "Gallery",
	inheritAttrs: false,
	components: {CardTools, Card},
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
		}
	},
	computed: {
		columnClass() {
			return "col-md-" + (BS_MaxColumnSize / Number(this.cols))
		},
		imagesGrid() {
			const result = []
			const colsNumber = Number(this.cols)

			for (let rowIndex = 0; rowIndex < this.images.length / colsNumber; rowIndex++)
				result.push(this.images.slice(rowIndex * colsNumber, (rowIndex + 1) * colsNumber))

			return result
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
