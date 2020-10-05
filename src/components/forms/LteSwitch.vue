<template>
	<div class="form-group">
		<div :class="innerWrapperStyles">
			<input
				type="checkbox"
				class="custom-control-input"
				:id="inputId"
				:disabled="isDisabled"
				:checked="value"
				@input="$emit('input', $event.target.checked)"
			>
			<label class="custom-control-label" :for="inputId">
				<slot></slot>
			</label>
		</div>
	</div>
</template>

<script>
import FormInputStylesProps from "../../common/formInputStyleProps"

export default {
	name: "LteSwitch",
	props: {
		inputId: String,
		value: Boolean,
		...FormInputStylesProps,
		isDisabled: Boolean,
		isTextLeft: Boolean,
		switchOffColor: String,
		switchOnColor: String
	},
	computed: {
		innerWrapperStyles() {
			const styles = ["custom-control custom-switch"]

			if (this.switchOffColor) {
				styles.push("custom-switch-off-" + this.switchOffColor)
			}
			if (this.switchOnColor) {
				styles.push("custom-switch-on-" + this.switchOnColor)
			}

			return styles
		}
	}
}
</script>

<style scoped>

</style>
