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
			</div>
		</WithRoot>
	</div>
</template>

<script>
import FormLabel from "./FormLabel"
import WithRoot from "../helper-components/WithRoot"

export default {
	name: "LteSelect",
	components: {WithRoot, FormLabel},
	props: {
		label: String,
		inputId: String,
		value: String,
		fasIcon: String,
		farIcon: String,
		isMultiple: Boolean,
		isDisabled: Boolean,
		isHorizontal: Boolean,

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
		innerInputStyles() {
			return [
				"form-control"
			].filter(x => x).join(" ")
		}
	}
}
</script>

<style scoped>

</style>
