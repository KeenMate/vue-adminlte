<template>
	<aside class="main-sidebar sidebar-dark-primary elevation-4">
		<!-- Brand Logo -->
		<slot name="brand"></slot>
		<!-- Sidebar -->
		<div class="sidebar">
			<slot name="user"></slot>

			<!-- Sidebar Menu -->
			<nav class="mt-2">
				<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
					<slot></slot>
				</ul>
			</nav>
			<!-- /.sidebar-menu -->
		</div>
		<!-- /.sidebar -->
	</aside>
</template>

<script>
export default {
	name: "Sidenav",
	mounted() {
		// this.treeview = import("AdminLTE/build/js/Treeview.js")
		// this.treeview = import("../../vendors/adminlte/build/js/Treeview.js")
	},
	data() {
		return {
			treeview: null
		}
	}
}
</script>

<style scoped>

</style>
