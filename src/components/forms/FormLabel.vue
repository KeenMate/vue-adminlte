<template>
	<label :for="inputId">
		<i v-if="fasIcon || farIcon" :class="'fa' + (fasIcon && 's' || 'r') + ' fa-' + (fasIcon || farIcon)"></i>
		<slot></slot>
	</label>
</template>

<script>
export default {
	name: "FormLabel",
	props: {
		inputId: String,
		fasIcon: String,
		farIcon: String
	}
}
</script>

<style scoped>

</style>
