<template>
	<AppContainer>
		<TopNavigation #top-nav>
			<TopNavLink :to="{name: 'forms-general'}">Forms</TopNavLink>
			<TopNavLink :to="{name: 'forms-validations'}">Validations</TopNavLink>
			<TopNavLink :to="{name: 'ui-general'}">UI Elements</TopNavLink>
		</TopNavigation>
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
	@import "../../src/vendors/adminlte/plugins/fontawesome-free/css/all.min.css";
</style>
