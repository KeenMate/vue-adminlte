<template>
	<div :class="wrapperStyles">
		<FormLabel
			v-if="!isInputGroup && (label || fasIcon)"
			:class="computedLabelStyles"
			:input-id="inputId"
			:fas-icon="fasIcon"
			:far-icon="farIcon"
		>
			{{ label }}
		</FormLabel>
		<div v-if="$scopedSlots.prepend" class="input-group-prepend">
			<slot name="prepend"></slot>
		</div>
		<WithRoot :if="isHorizontal">
			<div :class="horizontalStyles">
				<textarea
					v-if="isTextarea"
					ref="input"
					:class="[...innerInputStyles, ...inputStyles]"
					:id="inputId"
					:placeholder="placeholder"
					:value="value"
					:disabled="isDisabled"
					:rows="rows"
					:cols="cols"
					v-on="{...$listeners, input: (ev) => $emit('input', ev.target.value)}"
				></textarea>
				<input
					v-else
					ref="input"
					:class="[...innerInputStyles, ...inputStyles]"
					:type="type"
					:id="inputId"
					:placeholder="placeholder"
					:value="value"
					:disabled="isDisabled"
					:pattern="pattern"
					v-on="{...$listeners, input: (ev) => $emit('input', ev.target.value)}"
				/>
				<FormInputFeedback
					:visible="computedInvalidity || computedValidity"
					:styles="feedbackStyles"
				>
					{{ computedFeedback }}
				</FormInputFeedback>
			</div>
		</WithRoot>
		<span
			v-if="$scopedSlots['invalid-msg'] && isInvalid"
			class="error invalid-feedback"
		>
			<slot name="invalid-msg"></slot>
		</span>
		<div v-if="$scopedSlots.append" class="input-group-append">
			<slot name="append"></slot>
		</div>
	</div>
</template>

<script>
import FormLabel from "./FormLabel.vue"
import WithRoot from "../helper-components/WithRoot"
import FormInputFeedback from "./FormInputFeedback.vue"
import validatedInputProps from "./validatedInputProps"
import FormInputStylesProps from "../../common/formInputStyleProps"

export default {
	name: "FormInput",
	components: {FormInputFeedback, WithRoot, FormLabel},
	props: {
		/**
		 * @type {any}
		 * @description This is value
		 */
		value: null,

		/**
		 * @type {String}
		 * @description This is THE label
		 */
		label: String,
		isWarning: Boolean,
		inputId: String,
		placeholder: String,
		isHorizontal: Boolean,

		/**
		 * @type {String}
		 * @description Mask used for input
		 * @deprecated
		 */
		pattern: String,

		/**
		 * @type {String}
		 * @description icon combined with 'fas' class
		 */
		fasIcon: String,

		/**
		 * @type {String}
		 * @description icon combined with 'far' class
		 */
		farIcon: String,
		isSmall: Boolean,
		isLarge: Boolean,

		...FormInputStylesProps,
		isDisabled: Boolean,
		isTextarea: Boolean,

		/**
		 * @type {String | Number}
		 * @description Passed down to textarea if configured like so
		 */
		rows: [String, Number],

		/**
		 * @type {String | Number}
		 * @description Passed down to textarea if configured like so
		 */
		cols: [String, Number],

		/**
		 * @type {"button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week"}
		 * @description type of the input
		 */
		type: {
			type: String,
			default: "text",
			validator(x) {
				return (
					[
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
						"week",
					].indexOf(x) !== -1
				)
			},
		},
		...validatedInputProps,
	},
	computed: {
		computedFeedback() {
			const invalid = this.computedInvalidity
			const valid = this.computedValidity

			if (invalid !== undefined && invalid) return this.invalidMsg

			if (valid !== undefined && valid) return this.validMsg

			return undefined
		},
		computedInvalidity() {
			if (this.isInvalid !== undefined) return this.isInvalid

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
			if (!this.validator || !this.validator.$dirty) return null

			return this.validator.$anyError
		},
		feedbackStyles() {
			return [
				this.computedInvalidity && "error invalid-feedback",
				this.computedValidity && "success valid-feedback",
			]
		},
		computedLabelStyles() {
			const styles = []

			if (typeof this.labelStyles === "string" || this.labelStyles instanceof Object)
				styles.push(this.labelStyles)
			else if (this.labelStyles instanceof Array)
				styles.splice(0, 0, ...this.labelStyles)

			this.isHorizontal && styles.push("col-form-label")

			return styles
		},
		innerInputStyles() {
			const styles = ["form-control"]

			if (this.computedInvalidity) styles.push("is-invalid")
			else if (this.computedValidity) styles.push("is-valid")
			else if (this.isWarning) styles.push("is-warning")

			return styles
		},
		isInputGroup() {
			return this.$scopedSlots.prepend || this.$scopedSlots.append
		},
		wrapperStyles() {
			const styles = []

			if (this.isInputGroup) styles.push("input-group")
			else styles.push("form-group")

			if (this.isSmall) styles.push("input-group-sm")
			else if (this.isLarge) styles.push("input-group-lg")

			return styles
		},
	},
	methods: {
		focus() {
			this.$refs.input.focus()
		},
		select() {
			this.$refs.input.select()
		},
	},
}
</script>

<style scoped>
</style>
