<template>
	<label :for="inputId">
		<i v-if="faIcon" :class="'fas fa-' + faIcon"></i>
		<slot></slot>
	</label>
</template>

<script>
export default {
	name: "FormLabel",
	props: {
		faIcon: String,
		inputId: String
	}
}
</script>

<style scoped>

</style>
