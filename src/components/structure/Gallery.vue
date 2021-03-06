<template>
	<Card v-bind="$attrs">
		<template #header>
			<slot name="card-header"></slot>
		</template>
		<template #default>
			<vue-draggable
				v-if="isDraggable"
				:list="images"
				class="my-flex-row"
				@change="onDraggableChange"
			>
				<div
					v-for="image in images"
					:key="image[imageKey]"
					class="image-wrapper"
				>
					<slot :image="image">
						<a :href="image.src"
							data-toggle="lightbox"
							:data-title="image.title">
							<img :src="image.msrc" class="img-fluid" :alt="image.title">
						</a>
					</slot>
				</div>
			</vue-draggable>
			<div v-else class="my-flex-row">
				<div
					v-for="image in images"
					:key="image[imageKey]"
					class="image-wrapper"
				>
					<slot :image="image">
						<a :href="image.src"
							data-toggle="lightbox"
							:data-title="image.title">
							<img :src="image.msrc" class="img-fluid" :alt="image.title">
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

		isDraggable: Boolean
	},
	methods: {
		onDraggableChange(event) {
			console.log("draggable columns input", arguments)

			const interestingObject = event.added || event.moved
			if (!interestingObject)
				return

			const image = interestingObject.element
			const newImageAbsoluteIndex = this.images.indexOf(image)
			let position
			let targetImage

			position = newImageAbsoluteIndex === this.images.length - 1
				&& "after"
				|| "before"
			targetImage = this.images[newImageAbsoluteIndex + (position === "before" && 1 || -1)]

			this.$emit("dragged", image, position, targetImage)
		}
	}
}
</script>

<style lang="scss">
	.my-flex-row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-gap: .5rem;
	}

	img {
		&:hover {
			cursor: pointer;
		}
	}
</style>
