<template>
	<Card v-bind="$attrs">
		<template #header>
			<CardTools />
		</template>
		<template #default>
			<div class="filter-container p-0 row">
				<div
					v-for="image in images"
					:key="image[imageKey]"
					class="filter-item col-sm-2"
					data-category="1"
					:data-sort="image.title"
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

export default {
	name: "Gallery",
	inheritAttrs: false,
	components: {CardTools, Card},
	props: {
		images: {
			type: Array,
			default: () => []
		},
		imageKey: String
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
