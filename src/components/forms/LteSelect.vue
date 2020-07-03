<template>
	<div class="form-group">
		<FormLabel
			:class="labelStyles"
			:fas-icon="fasIcon"
			:far-icon="farIcon"
			input-id="inputId"
		>
			{{label}}
		</FormLabel>
		<WithRoot :if="isHorizontal">
			<div :class="horizontalStyles">
				<select
					:id="inputId"
					:class="[...innerInputStyles, ...inputStyles]"
					:multiple="isMultiple"
					:disabled="isDisabled"
					:value="value"
					@input="$emit('input', $event.target.value)"
				>
					<slot></slot>
				</select>
				<FormInputFeedback :visible="computedInvalidity || computedValidity" :styles="feedbackStyles">
					{{computedFeedback}}
				</FormInputFeedback>
			</div>
		</WithRoot>
	</div>
</template>

<script>
import FormLabel from "./FormLabel.vue"
import WithRoot from "../helper-components/WithRoot"
import FormInputFeedback from "./FormInputFeedback.vue"
import validatedInputProps from "./validatedInputProps"

export default {
	name: "LteSelect",
	components: {FormInputFeedback, WithRoot, FormLabel},
	props: {
		label: String,
		inputId: String,
		value: null,
		fasIcon: String,
		farIcon: String,
		isMultiple: Boolean,
		isDisabled: Boolean,
		isHorizontal: Boolean,

		...validatedInputProps,

		/**
		 * @type {String}
		 * @description Sets state of this form input to 'warning'
		 */
		isWarning: String,

		/**
		 * @type {Array}
		 * @description Styles for horizontally positioned form input
		 */
		horizontalStyles: {
			type: Array,
			default:
				() => []
		},

		/**
		 * @type {Array}
		 * @description classes applied to label
		 */
		labelStyles: {
			type: Array,
			default: () => []
		},

		/**
		 * @type {Array}
		 * @description classes applied to input
		 */
		inputStyles: {
			type: Array,
			default: () => []
		}
	},
	computed: {
		computedFeedback() {
			const invalid = this.computedInvalidity
			const valid = this.computedValidity

			if (invalid !== undefined && invalid)
				return this.invalidMsg

			if (valid !== undefined && valid)
				return this.validMsg

			return undefined
		},
		computedInvalidity() {
			if (this.isInvalid !== undefined)
				return this.isInvalid

			return this.validatorHasErrors
		},
		computedValidity() {
			return this.isValid

			// use this code to enable "success" state to be set by 'validator'
			// if (this.isValid !== undefined)
			// 	return this.isValid
			//
			// const anyErrors = this.validatorHasErrors
			//
			// return anyErrors === null
			// 	? null
			// 	: !anyErrors
		},
		validatorHasErrors() {
			if (!this.validator || !this.validator.$dirty)
				return null

			return this.validator.$anyError
		},
		feedbackStyles() {
			return [
				this.computedInvalidity && "error invalid-feedback",
				this.computedValidity && "success valid-feedback"
			].filter(x => x)
				.join(" ")
		},
		innerInputStyles() {
			return [
				"form-control",
				this.computedValidity && "is-valid",
				this.computedInvalidity && "is-invalid",
				this.isWarning && "is-warning"
			].filter(x => x).join(" ")
		}
	}
}
</script>

<style scoped>

</style>
