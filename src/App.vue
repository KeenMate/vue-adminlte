<template>
	<div id="app">
		<FormInput />
	</div>
</template>

<script>
import FormInput from "./components/forms/FormInput"

export default {
	components: {FormInput}
}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
