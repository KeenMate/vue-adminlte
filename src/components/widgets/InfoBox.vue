<template>
	<div :class="rootClasses">
		<div v-if="isLoading" class="overlay dark"></div>
		<span :class="iconWrapperClasses">
			<i v-if="fasIcon" :class="iconClasses"></i>
		</span>
		<div class="info-box-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "InfoBox",
	props: {
		fasIcon: String,
		/**
		 * @type {string}
		 * @description Color of the whole infobox (without the `bg-` prefix)
		 */
		bgColor: String,
		iconBackground: String,
		isLoading: Boolean,
		isSmallbox: Boolean
	},
	computed: {
		iconClasses() {
			return [
				"fas",
				this.fasIcon && `fa-${fasIcon}`
			]
		},
		rootClasses() {
			return [
				this.isSmallbox && "small-box" || "info-box",
				this.bgColor && `bg-${this.bgColor}`
			]
		},
		iconWrapperClasses() {
			return [
				"info-box-icon",
				this.iconBackground
			]
		}
	}
}
</script>

<style></style>
