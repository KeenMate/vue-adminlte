<template>
	<FormCheck type="radio" v-bind="{...$attrs, ...$props}" v-on="$listeners">
		<slot></slot>
	</FormCheck>
</template>

<script>
import FormCheck from "./FormCheck"

export default {
	name: "Radio",
	components: {FormCheck},
	props: {
		inputId: String,
		value: Boolean,
		labelStyles: {
			type: Array,
			default: () => []
		},
		inputStyles: {
			type: Array,
			default: () => []
		},
		isDisabled: Boolean
	}
}
</script>

<style scoped>

</style>
