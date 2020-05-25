<template>
	<div :class="bodyStyles">
		<div class="wrapper">
			<top-navigation v-if="$scopedSlots['top-nav']">
				<slot name="top-nav"></slot>
			</top-navigation>
			<sidenav v-if="$scopedSlots['side-nav']">
				<slot name="side-nav"></slot>
			</sidenav>
			<slot></slot>
		</div>
	</div>
</template>

<script>
import TopNavigation from "../navigation/TopNavigation"
import Sidenav from "../navigation/Sidenav"

export default {
	name: "AppContainer",
	components: {Sidenav, TopNavigation},
	props: {},
	computed: {
		bodyStyles() {
			return [
				this.$scopedSlots["side-nav"] && "sidebar-mini"
			].filter(x => x).join(" ")
		}
	}
}
</script>

<style scoped>

</style>
