<template>
	<div :class="bodyStyles">
		<div class="wrapper">
			<top-navigation v-if="$scopedSlots['top-nav']" :no-bars="noBars" :class="navbarClasses">
				<slot name="top-nav"></slot>
				<template v-if="$scopedSlots['navbar-append']" #navbar-append>
					<slot name="navbar-append"></slot>
				</template>
				<template v-if="$scopedSlots['navbar-right']" #navbar-right>
					<slot name="navbar-right"></slot>
				</template>
			</top-navigation>
			<slot v-if="$scopedSlots['side-nav']" name="side-nav"></slot>
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
		 * @description Sets .3rem margin for app container
		 */
		horizontalSpaced: Boolean,

		/**
		 * @type {Boolean}
		 * @description Passes this prop to `top-navigation` sub component
		 */
		noBars: Boolean,

		topNavColor: {
			type: String
		}
	},
	computed: {
		navbarClasses() {
			const classes = []

			if (this.topNavColor)
				switch (this.topNavColor) {
					case "primary":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "secondary":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "info":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "success":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "danger":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "indigo":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "purple":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "pink":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "navy":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "lightblue":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "teal":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "cyan":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "dark":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "gray-dark":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "gray":
						classes.push("navbar-dark")
						classes.push("navbar-" + this.topNavColor)
						break
					case "light":
						classes.push("navbar-light")
						classes.push("navbar-" + this.topNavColor)
						break
					case "warning":
						classes.push("navbar-light")
						classes.push("navbar-" + this.topNavColor)
						break
					case "white":
						classes.push("navbar-light")
						classes.push("navbar-" + this.topNavColor)
						break
					case "orange":
						classes.push("navbar-light")
						classes.push("navbar-" + this.topNavColor)
						break
				}

			return classes.join(" ")
		},
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
