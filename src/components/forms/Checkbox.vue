<template>
	<FormCheck type="checkbox" v-bind="{...$attrs, ...$props}" v-on="$listeners">
		<slot></slot>
	</FormCheck>
</template>

<script>
import FormCheck from "./FormCheck.vue"

import FormInputStylesProps from "../../common/formInputStyleProps"

export default {
	name: "Checkbox",
	components: {FormCheck},
	props: {
		inputId: String,
		value: Boolean,
		...FormInputStylesProps,
		isDisabled: Boolean
	}
}
</script>

<style scoped>

</style>
