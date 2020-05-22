<template>
	<AppContainer>
		<template #top-nav>
			<TopNavigation>
				<TopNavLink :to="{name: 'forms-general'}">Forms</TopNavLink>
				<TopNavLink :to="{name: 'forms-validations'}">Validations</TopNavLink>
				<TopNavLink :to="{name: 'ui-general'}">UI Elements</TopNavLink>
			</TopNavigation>
		</template>
		<DemoSidenav #side-nav />
		<router-view></router-view>
	</AppContainer>
</template>

<script>
import DemoSidenav from "./DemoSidenav"

export default {
	name: "Demo",
	components: {DemoSidenav}
}
</script>

<style lang="scss">
	/*@import "~AdminLTE/plugins/fontawesome-free/css/all.min.css";*/
	@import "../../src/vendors/adminlte/build/scss/AdminLTE.scss";
	@import "../../src/vendors/adminlte/build/scss/AdminLTE-condensed.scss";
	@import "../../src/vendors/adminlte/plugins/fontawesome-free/css/all.min.css";
</style>
