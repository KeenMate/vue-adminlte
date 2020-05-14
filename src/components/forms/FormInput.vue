<template>
	<div :class="wrapperStyles">
		<FormLabel
			v-if="!isInputGroup && (label || fasIcon)"
			:class="labelStyles"
			:input-id="inputId"
			:fas-icon="fasIcon"
			:far-icon="farIcon"
		>
			{{label}}
		</FormLabel>
		<div v-if="$scopedSlots.prepend" class="input-group-prepend">
			<slot name="prepend"></slot>
		</div>
		<!--<div v-if="isHorizontal" :class="horizontalStyles"></div>-->
		<WithRoot :if="isHorizontal">
			<div :class="horizontalStyles">
				<textarea
					v-if="isTextarea"
					:class="[...innerInputStyles, ...inputStyles]"
					:id="inputId"
					:placeholder="placeholder"
					:value="value"
					:disabled="isDisabled"
					:rows="rows"
					:cols="cols"
					@input="$emit('input', $event.target.value)"
				></textarea>
				<input
					v-else
					:class="[...innerInputStyles, ...inputStyles]"
					:type="type"
					:id="inputId"
					:placeholder="placeholder"
					:value="value"
					:disabled="isDisabled"
					@input="$emit('input', $event.target.value)"
				>
			</div>
		</WithRoot>
		<span v-if="$scopedSlots['invalid-msg'] && isInvalid" class="error invalid-feedback">
			<slot name="invalid-msg"></slot>
		</span>
		<div v-if="$scopedSlots.append" class="input-group-append">
			<slot name="append"></slot>
		</div>
	</div>
</template>

<script>
import FormLabel from "./FormLabel"
import WithRoot from "../helper-components/WithRoot"

export default {
	name: "FormInput",
	components: {WithRoot, FormLabel},
	props: {
		/**
		 * @type {String}
		 * @description This is value
		 */
		value: null,
		label: String,
		isInvalid: Boolean,
		isValid: Boolean,
		isWarning: Boolean,
		inputId: String,
		placeholder: String,
		isHorizontal: Boolean,
		fasIcon: String,
		farIcon: String,
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
		horizontalStyles: {
			type: Array,
			default:
				() => []
		},
		isDisabled: Boolean,
		isTextarea: Boolean,
		rows: [String, Number],
		cols: [String, Number],
		type: {
			type: String,
			default:
				"text",
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

			if (this.isInvalid) {
				styles.push("is-invalid")
			} else if (this.isValid) {
				styles.push("is-valid")
			} else if (this.isWarning) {
				styles.push("is-warning")
			}

			return styles
		},
		isInputGroup() {
			return this.$scopedSlots.prepend || this.$scopedSlots.append
		},
		wrapperStyles() {
			const styles = []

			if (this.isInputGroup) {
				styles.push("input-group")
			} else {
				styles.push("form-group")
			}

			if (this.isSmall) {
				styles.push("input-group-sm")
			} else if (this.isLarge) {
				styles.push("input-group-lg")
			}

			return styles
		}
	}
}
</script>

<style scoped>

</style>
