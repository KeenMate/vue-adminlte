<template>
	<div>
		<TopNavigation>
			<TopNavLink>Home</TopNavLink>
			<TopNavLink>Contact</TopNavLink>
		</TopNavigation>
		<DemoSidenav />
		<FormsPage />
	</div>
</template>

<script>
import DemoSidenav from "./DemoSidenav"
import FormsPage from "./FormsPage"
import TopNavigation from "../src/components/navigation/TopNavigation"
import TopNavLink from "../src/components/navigation/TopNavLink"

export default {
	name: "demo",
	components: {TopNavLink, TopNavigation, FormsPage, DemoSidenav},
	data: () => ({a: 1, b: 1})
}
</script>

<style lang="scss">
	@import "~AdminLTE/plugins/fontawesome-free/css/all.min.css";
</style>
