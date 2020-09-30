<template>
	<div :class="bodyStyles">
		<div class="wrapper">
			<top-navigation v-if="$scopedSlots['top-nav']" v-bind="topNavAttrs">
				<slot name="top-nav"></slot>
				<template v-if="$scopedSlots['navbar-append']" #navbar-append>
					<slot name="navbar-append"></slot>
				</template>
				<template v-if="$scopedSlots['navbar-right']" #navbar-right>
					<slot name="navbar-right"></slot>
				</template>
			</top-navigation>
			<!-- <sidenav v-if="$scopedSlots['side-nav']"> -->
			<slot name="side-nav"></slot>
			<!-- </sidenav> -->
			<km-loader v-if="isLoading" />
			<slot></slot>
		</div>
	</div>
</template>

<script>
import TopNavigation from "../navigation/TopNavigation.vue"
import Sidenav from "../navigation/Sidenav.vue"
import KmLoader from "../keenmate/KmLoader.vue"

export default {
	name: "AppContainer",
	components: {KmLoader, Sidenav, TopNavigation},
	props: {
		/**
		 * determines whether to display indeterminate loader or not
		 * Alternatively can be set on page (and not here)
		 */
		isLoading: Boolean,

		/**
		 * @type {Boolean}
		 * @description Sets small margin for app container
		 */
		horizontalSpaced: Boolean,

		/**
		 * @type {object}
		 * @description Properties passed to top navigation component
		 */
		topNavAttrs: Object
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
