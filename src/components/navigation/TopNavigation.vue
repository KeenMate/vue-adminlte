<template>
	<nav class="main-header navbar navbar-expand navbar-white navbar-light">
		<!-- Left navbar links -->
		<ul class="navbar-nav">
			<li v-if="!noBars" class="nav-item" @click="$emit('toggle-sidenav')">
				<a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
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
export default {
	name: "TopNavigation",
	props: {
		noBars: Boolean
	},
	mounted() {
		// this.pushMenu = import("AdminLTE/build/js/PushMenu.js")
		this.pushMenu = import("../../vendors/adminlte/build/js/PushMenu.js")
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
