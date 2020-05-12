<template>
	<div class="form-check">
		<input
			:type="type"
			:class="['form-check-input', ...inputStyles]"
			:id="inputId"
			:checked="value"
			:disabled="isDisabled"
			@input="$emit('input', $event.target.checked)"
		>
		<label :class="['form-check-label', ...labelStyles]" :for="inputId">
			<slot></slot>
		</label>
	</div>
</template>

<script>
export default {
	name: "FormCheck",
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
		isDisabled: Boolean,
		type: String
	}
}
</script>

<style scoped>

</style>
