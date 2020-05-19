<template>
	<div>
		<TopNavigation>
			<TopNavLink :to="{name: 'forms-general'}">Forms</TopNavLink>
			<TopNavLink :to="{name: 'ui-general'}">UI Elements</TopNavLink>
		</TopNavigation>
		<DemoSidenav />
		<router-view></router-view>
	</div>
</template>

<script>
import DemoSidenav from "./DemoSidenav"

export default {
	name: "Demo",
	components: {DemoSidenav},
	data: () => ({a: 1, b: 1})
}
</script>

<style lang="scss">
	@import "~AdminLTE/plugins/fontawesome-free/css/all.min.css";
</style>
