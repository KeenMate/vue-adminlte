<template>
	<app-container top-nav-color="indigo" :is-loading="isLoading">
		<template #top-nav>
			<top-nav-link :to="{name: 'forms-general'}">Forms</top-nav-link>
			<top-nav-link :to="{name: 'forms-validations'}">Validations</top-nav-link>
			<top-nav-link :to="{name: 'ui-general'}">UI Elements</top-nav-link>
			<top-nav-link :to="{name: 'summernote-editor'}">Summernote editor</top-nav-link>
			<top-nav-link :to="{name: 'components'}">Components</top-nav-link>
			<top-nav-link to="/" is-dropdown>
				Dropdown menu item #1
				<template #dropdown>
					<dropdown-link-item to="/">Submenu #1</dropdown-link-item>
				</template>
			</top-nav-link>
		</template>
		<template #side-nav>
			<demo-sidenav />
		</template>
		<router-view></router-view>
	</app-container>
</template>

<script>
import DemoSidenav from "./DemoSidenav"

export default {
	name: "Demo",
	components: {DemoSidenav},
	mounted() {
		setTimeout(() => {
			this.isLoading = true
			setTimeout(() => {
				this.isLoading = false
			}, 2000)
		}, 5000)
	},
	data() {
		return {
			isLoading: false
		}
	}
}
</script>

<style lang="scss">
	/*@import "../../src/vendors/adminlte/build/scss/AdminLTE.scss";*/
	/*@import "../../src/vendors/adminlte/build/scss/AdminLTE-condensed.scss";*/

	@import "../../src/vendors/adminlte/css/adminlte.min.css";
	/*@import "../../src/vendors/adminlte/css/adminlte-condensed.css";*/
	@import "../../src/vendors/adminlte/plugins/fontawesome-free/css/all.min.css";
</style>
