<template>
	<nav :class="navbarClasses">
		<!-- Left navbar links -->
		<ul class="navbar-nav">
			<li v-if="!noBars" class="nav-item" @click="$emit('toggle-sidenav')">
				<a ref="bars" class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
			</li>
			<slot></slot>
		</ul>

		<!-- SEARCH FORM -->
		<slot name="navbar-append"></slot>

		<!-- Right navbar links -->
		<ul v-if="$scopedSlots['navbar-right']" class="navbar-nav ml-auto">
			<slot name="navbar-right"></slot>
		</ul>
	</nav>
</template>

<script>
// import {PushMenu} from "../../vendors/adminlte/js/adminlte.esm"

export default {
	name: "TopNavigation",
	props: {
		noBars: Boolean,
		backgroundColor: String
	},
	computed: {
		navbarClasses() {
			const classes = ["main-header navbar navbar-expand"]

			if (this.backgroundColor) {
				if (["primary", "secondary", "info", "success", "danger", "indigo", "purple", "pink", "navy", "lightblue", "teal", "cyan", "dark", "gray-dark", "gray"]
					.includes(this.backgroundColor))
					classes.push("navbar-dark")

				if (["light", "warning", "white", "orange"].includes(this.backgroundColor))
					classes.push("navbar-light")

				classes.push("navbar-" + this.backgroundColor)
			} else
				classes.push("navbar-light")

			return classes
		}
	},
	mounted() {
		// this.pushMenu = import("AdminLTE/build/js/PushMenu.js")
		// this.pushMenu = import("../../vendors/adminlte/build/js/PushMenu.js")
		// if (!this.noBars) {
		// 	this.pushMenu = new PushMenu(this.$refs.bars, {
		// 		"autoCollapseSize": 992,
		// 		"enableRemember": false,
		// 		"noTransitionAfterReload": true,
		// 		"widget": "pushmenu"
		// 	})
		// }
	},
	data() {
		return {
			pushMenu: null
		}
	}
}
</script>

<style scoped>

</style>
