<template>
	<app-container>
		<template #top-nav>
			<top-navigation>
				<top-nav-link :to="{name: 'forms-general'}">Forms</top-nav-link>
				<top-nav-link :to="{name: 'forms-validations'}">Validations</top-nav-link>
				<top-nav-link :to="{name: 'ui-general'}">UI Elements</top-nav-link>
			</top-navigation>
		</template>
		<DemoSidenav #side-nav />
		<router-view></router-view>
	</app-container>
</template>

<script>
import DemoSidenav from "./DemoSidenav"
import {TopNavLink, TopNavigation, AppContainer} from "../../src"

export default {
	name: "Demo",
	components: {AppContainer, TopNavigation, TopNavLink, DemoSidenav}
}
</script>

<style lang="scss">
	/*@import "../../src/vendors/adminlte/build/scss/AdminLTE.scss";*/
	/*@import "../../src/vendors/adminlte/build/scss/AdminLTE-condensed.scss";*/

	@import "../../src/vendors/adminlte/css/adminlte.min.css";
	@import "../../src/vendors/adminlte/css/adminlte-condensed.css";
	@import "../../src/vendors/adminlte/plugins/fontawesome-free/css/all.min.css";
</style>
