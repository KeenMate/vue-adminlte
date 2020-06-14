<template>
	<Card v-bind="$attrs">
		<template #header>
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

<style scoped>
	.filter-container {
		padding: 3px;
		position: relative;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		/*height: 582px;*/
	}

	.filter-item {
		opacity: 1;
		transform: scale(1) translate3d(0px, 0px, 0px);
		backface-visibility: hidden;
		perspective: 1000px;
		transform-style: preserve-3d;
		width: 196.4px;
		transition: all 0.5s ease-out 0ms, width 1ms ease 0s;
	}
</style>
