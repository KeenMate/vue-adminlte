<template>
	<div>
		<hello-world name="Jofrey" />
	</div>
</template>

<script>
import {HelloWorld} from "./components"

export default {
	name: "App",
	components: {"hello-world": HelloWorld}
}
</script>

<style>

</style>
