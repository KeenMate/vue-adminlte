<template>
	<div :class="bodyStyles">
		<div class="wrapper">
			<slot name="top-nav"></slot>
			<slot name="side-nav"></slot>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "AppContainer",
	props: {},
	computed: {
		bodyStyles() {
			return [
				"sidebar-mini"
			].filter(x => x).join(" ")
		}
	}
}
</script>

<style scoped>

</style>
