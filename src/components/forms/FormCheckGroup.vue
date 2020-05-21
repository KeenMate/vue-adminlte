<template>
	<div :class="formGroupStyles">
		<component
			:is="checkComponent"
			v-for="option in options"
			:key="getValue(option)"
			:input-id="getValue(option)"
			:value="value.includes(getValue(option))"
			:name="name"
			:is-disabled="getDisabled && getDisabled(option)"
			@input="$emit('input', option, $event)"
		>
			{{getText(option)}}
		</component>
		<div v-if="computedInvalidity" class="is-invalid"></div>
		<FormInputFeedback :visible="computedInvalidity || computedValidity" :styles="feedbackStyles">
			{{computedFeedback}}
		</FormInputFeedback>
	</div>
</template>

<script>
import FormInputFeedback from "./FormInputFeedback"
import validatedInputProps from "./validatedInputProps"

export default {
	name: "FormCheckGroup",
	components: {FormInputFeedback},
	props: {
		checkComponent: null,
		value: {
			type: Array,
			default: () => []
		},
		options: {
			type: Array,
			default: () => []
		},
		getText: {
			type: Function,
			default: () => x => x
		},
		getValue: {
			type: Function,
			default: () => x => x
		},
		getDisabled: Function,
		name: String,
		isHorizontal: Boolean,

		...validatedInputProps
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
		formGroupStyles() {
			return [
				"form-group",
				this.isHorizontal && "horizontal",
				(this.computedInvalidity || this.computedValidity) && "space-for-feedback"
			].filter(x => x)
				.join(" ")
		}
	}
}
</script>

<style lang="scss" scoped>
	.form-group.horizontal {
		display: flex;

		& > .is-invalid {
			display: none;
		}

		&.space-for-feedback {
			padding-bottom: 1.2em;
			position: relative;

			span[class*=feedback] {
				position: absolute;
				bottom: 0;
			}
		}

		& > .form-check:not(:first-child) {
			margin-left: .5rem;
		}
	}
</style>
