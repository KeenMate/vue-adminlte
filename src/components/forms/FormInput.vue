<template>
	<div :class="wrapperStyles">
		<FormLabel :class="labelStyles" v-if="!isInputGroup && (label || faIcon)" :fa-icon="faIcon" :input-id="inputId">
			{{label}}
		</FormLabel>
		<div v-if="$scopedSlots.prepend" class="input-group-prepend">
			<slot name="prepend"></slot>
		</div>
		<input
			:class="[...innerInputStyles, ...inputStyles]"
			:type="type"
			:id="inputId"
			:placeholder="placeholder"
			:value="value"
			@input="$emit('input', $event.target.value)"
		>
		<span v-if="$scopedSlots['invalid-msg'] && isInvalid" class="error invalid-feedback">
			<slot name="invalid-msg"></slot>
		</span>
		<div v-if="$scopedSlots.append" class="input-group-append">
			<slot name="append"></slot>
		</div>
	</div>
	<!--
	<div class="input-group mb-3">
		<div class="input-group-prepend">
			<span class="input-group-text">@</span>
		</div>
		<input type="text" class="form-control" placeholder="Username">
	</div>-->
</template>

<script>
import FormLabel from "./FormLabel"

export default {
	name: "FormInput",
	components: {FormLabel},
	props: {
		value: null,
		label: String,
		isInvalid: Boolean,
		inputId: String,
		placeholder: String,
		faIcon: String,
		isSmall: Boolean,
		isLarge: Boolean,
		labelStyles: {
			type: Array,
			default: () => []
		},
		inputStyles: {
			type: Array,
			default: () => []
		},
		type: {
			type: String,
			default: "text",
			validator(x) {
				return [
					"button",
					"checkbox",
					"color",
					"date",
					"datetime-local",
					"email",
					"file",
					"hidden",
					"image",
					"month",
					"number",
					"password",
					"radio",
					"range",
					"reset",
					"search",
					"submit",
					"tel",
					"text",
					"time",
					"url",
					"week"
				].indexOf(x) !== -1
			}
		}
	},
	computed: {
		innerInputStyles() {
			const styles = ["form-control"]

			if (this.isInvalid)
				styles.push("is-invalid")

			return styles
		},
		isInputGroup() {
			return this.$scopedSlots.prepend || this.$scopedSlots.append
		},
		wrapperStyles() {
			const styles = []

			if (this.isInputGroup)
				styles.push("input-group")
			else
				styles.push("form-group")

			if (this.isSmall)
				styles.push("input-group-sm")
			else if (this.isLarge)
				styles.push("input-group-lg")

			return styles
		}
	}
}
</script>

<style scoped>

</style>
