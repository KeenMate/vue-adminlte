<template>
	<div class="form-group">
		<FormLabel :fa-icon="faIcon" :input-id="inputId">
			{{label}}
		</FormLabel>
		<select :id="inputId" class="form-control" :multiple="multiple">
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
		multiple: Boolean,
		faIcon: String
	}
}
</script>

<style scoped>

</style>
