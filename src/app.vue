<template>
	<app-container>
		<lte-button is-warning>The Warning button</lte-button>
	</app-container>
</template>

<script>
import AppContainer from "./components/application/AppContainer"
import {LteButton} from "./components"

export default {
	name: "App",
	components: {LteButton, AppContainer}
}
</script>

<style>

</style>
