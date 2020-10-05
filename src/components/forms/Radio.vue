<template>
	<FormCheck type="radio" v-bind="{...$attrs, ...$props}" v-on="$listeners">
		<slot></slot>
	</FormCheck>
</template>

<script>
import FormCheck from "./FormCheck.vue"

import FormInputStylesProps from "../../common/formInputStyleProps"

export default {
	name: "Radio",
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
