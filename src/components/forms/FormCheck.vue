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
		<label :class="['form-check-label', labelStyles]" :for="inputId">
			<slot></slot>
		</label>
	</div>
</template>

<script>
import FormInputStylesProps from "../../common/formInputStyleProps"

export default {
	name: "FormCheck",
	props: {
		inputId: String,
		value: Boolean,
		/**
		 * @type {string[] | string | object}
		 * @description Styles applied on `label` element
		 */
		FormInputStylesProps,
		isDisabled: Boolean,
		type: String
	}
}
</script>

<style scoped>

</style>
