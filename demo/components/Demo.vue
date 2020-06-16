<template>
	<app-container top-nav-color="orange">
		<template #top-nav>
			<top-nav-link :to="{name: 'forms-general'}">Forms</top-nav-link>
			<top-nav-link :to="{name: 'forms-validations'}">Validations</top-nav-link>
			<top-nav-link :to="{name: 'ui-general'}">UI Elements</top-nav-link>
			<top-nav-link :to="{name: 'summernote-editor'}">Summernote editor</top-nav-link>
			<top-nav-link :to="{name: 'components'}">Components</top-nav-link>
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
	components: {DemoSidenav}
}
</script>

<style lang="scss">
	/*@import "../../src/vendors/adminlte/build/scss/AdminLTE.scss";*/
	/*@import "../../src/vendors/adminlte/build/scss/AdminLTE-condensed.scss";*/

	@import "../../src/vendors/adminlte/css/adminlte.min.css";
	/*@import "../../src/vendors/adminlte/css/adminlte-condensed.css";*/
	@import "../../src/vendors/adminlte/plugins/fontawesome-free/css/all.min.css";
</style>
