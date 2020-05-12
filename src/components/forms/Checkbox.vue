<template>
	<div class="form-check">
		<input
			type="checkbox"
			:class="['form-check-input', ...inputStyles]"
			:id="inputId"
			:value="value"
			@input="$emit('input', $event.target.checked)"
		>
		<label :class="['form-check-label', ...labelStyles]" :for="inputId">
			<slot></slot>
		</label>
	</div>
</template>

<script>
export default {
	name: "Checkbox",
	props: {
		inputId: String,
		value: Boolean,
		labelStyles: {
			type: Array,
			default: () => []
		},
		inputStyles: {
			type: Array,
			default: () => []
		},
	}
}
</script>

<style scoped>

</style>
