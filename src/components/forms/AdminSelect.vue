<template>
	<div class="form-group">
		<FormLabel :fas-icon="fasIcon" :far-icon="farIcon" :input-id="inputId">
			{{label}}
		</FormLabel>
		<select :id="inputId" class="form-control" :multiple="isMultiple" :disabled="isDisabled">
			<slot></slot>
		</select>
	</div>
</template>

<script>
import FormLabel from "./FormLabel"
export default {
	name: "AdminSelect",
	components: {FormLabel},
	props: {
		label: String,
		inputId: String,
		value: String,
		isMultiple: Boolean,
		isDisabled: Boolean,
		fasIcon: String,
		farIcon: String
	}
}
</script>

<style scoped>

</style>
