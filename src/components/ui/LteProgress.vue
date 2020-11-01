<template>
	<div class="progress">
		<div class="progress-bar" :style="progressBarStyles"></div>
	</div>
</template>

<script>
export default {
	name: "LteProgress",
	props: {
		percentage: [String, Number]
	},
	computed: {
		progressBarStyles() {
			return {
				width: `${this.normalizedPercentage}%`
			}
		},
		normalizedPercentage() {
			if (typeof this.percentage === "number")
				return this.percentage

			return Number(this.percentage)
		}
	}
}
</script>

<style>

</style>