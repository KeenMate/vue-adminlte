<template>
	<div class="form-check">
		<input
			v-bind="$attrs"
			:type="type"
			:class="['form-check-input', ...inputStyles]"
			:id="inputId"
			:checked="value"
			:disabled="isDisabled"
			:readonly="isReadonly"
			v-on="filteredListeners"
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
	computed: {
		filteredListeners() {
			return Object.keys(this.$listeners)
				.filter(x => !["click", "input"].includes(x))
				.reduce((acc, key) => Object.assign(acc, {[key]: this.$listeners[key]}), {})
		}
	}
}
</script>

<style scoped>
</style>
