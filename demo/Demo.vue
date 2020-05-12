<template>
	<div>
		<DemoSidenav />
		<FormsPage />
	</div>
</template>

<script>
import DemoSidenav from "./DemoSidenav"
import FormsPage from "./FormsPage"

export default {
	name: "demo",
	components: {FormsPage, DemoSidenav},
	data: () => ({a: 1, b: 1})
}
</script>

<style lang="scss">
	@import "~AdminLTE/plugins/fontawesome-free/css/all.min.css";
</style>
