<template>
	<div class="form-group">
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
	</div>
</template>

<script>
export default {
	name: "FormCheckGroup",
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
		name: String
	}
}
</script>

<style scoped>

</style>
