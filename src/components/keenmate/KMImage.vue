<template>
	<div :class="imageContainerClasses">
		<img
			:alt="alt"
			:src="src"
			style="width: 100%; display: block;">
		<span v-if="title" class="title">
			{{title}}
    </span>
	</div>
</template>

<script>
export default {
	name: "KMImage",
	props: {
		/**
		 * Src of the Image
		 * @type {string}
		 */
		src: String,

		alt: String,

		/**
		 * Title for image to be shown below
		 * @type {string}
		 */
		title: String,

		isSelected: Boolean,
		isThumbnailed: Boolean,
		isRounded: Boolean,
		hasShadow: Boolean
	},
	computed: {
		imageContainerClasses() {
			const classes = ["img-container"]

			this.isSelected && classes.push("selected")
			this.isThumbnailed && classes.push("thumbnail")
			this.isRounded && classes.push("rounded")
			this.hasShadow && classes.push("drop-shadow")

			return classes.join(" ")
		}
	}
}
</script>

<style>
	@import "../../assets/keenmate/image.css";
</style>
