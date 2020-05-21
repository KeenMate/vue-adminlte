<template>
	<FormCheckGroup
		:check-component="component"
		v-bind="{...$attrs, ...$props}"
		v-on="filteredListeners"
		@input="onInput"
	/>
</template>

<script>
import Checkbox from "./Checkbox"
import FormCheckGroup from "./FormCheckGroup"
import validatedInputProps from "./validatedInputProps"

export default {
	name: "CheckboxGroup",
	components: {FormCheckGroup},
	props: {
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
		...validatedInputProps
	},
	computed: {
		filteredListeners() {
			const listeners = {}

			for (const key in this.$listeners)
				if (key !== "input")
					listeners[key] = this.$listeners[key]

			return listeners
		}
	},
	methods: {
		onInput(option, checked) {
			this.$emit("input", checked
				? [...this.value, this.getValue(option)]
				: this.value.filter(x => x !== this.getValue(option))
			)
		}
	},
	data() {
		return {
			component: Checkbox
		}
	}
}
</script>

<style scoped>

</style>
