<template>
	<div class="form-check">
		<input
			:type="type"
			:class="['form-check-input', ...inputStyles]"
			:id="inputId"
			:checked="value"
			:disabled="isDisabled"
			:readonly="isReadonly"
			@click="onClick"
			@input="onInput"
		/>
		<!-- @input="$emit('input', $event.target.checked)" -->
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
		type: String,
		...FormInputStylesProps,
		isDisabled: Boolean,
		isReadonly: Boolean,
	},
	methods: {
		onClick(ev) {
			if (!this.isReadonly)
				return

			ev.preventDefault()
			ev.stopPropagation()
			return false
		},
		onInput(ev) {
		  if (!this.isReadonly) {
		    this.$emit("input", ev.target.checked)
		    return
			}
			return false
		}
	},
}
</script>

<style scoped>
</style>
