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
import TopNavigation from "../navigation/TopNavigation.vue"
import Sidenav from "../navigation/Sidenav.vue"

export default {
	name: "AppContainer",
	components: {Sidenav, TopNavigation},
	props: {
		/**
		 * @type {Boolean}
		 * @description Sets .3rem margin for app container
		 */
		horizontalSpaced: Boolean
	},
	computed: {
		bodyStyles() {
			return [
				this.$scopedSlots["side-nav"] && "sidebar-mini" || "no-sidebar",
				this.horizontalSpaced && "mh"
			].filter(x => x).join(" ")
		}
	}
}
</script>

<style lang="scss">
	.no-sidebar {
		.main-header,
		.content-wrapper {
			margin-left: 0 !important;
		}
	}

	.mh {
		margin-left: .3rem;
		margin-right: .3rem;
	}
</style>
