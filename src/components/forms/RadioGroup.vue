<template>
	<FormCheckGroup
		:check-component="component"
		v-bind="{...$attrs, ...$props}"
		:value="[value]"
		v-on="filteredListeners"
		@input="onInput"
	/>
</template>

<script>
import FormCheckGroup from "./FormCheckGroup.vue"
import Radio from "./Radio.vue"
import validatedInputProps from "./validatedInputProps"

export default {
	name: "RadioGroup",
	components: {FormCheckGroup},
	props: {
		value: null,
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

			for (const key in this.$listeners) {
				if (key !== "input") {
					listeners[key] = this.$listeners[key]
				}
			}

			return listeners
		}
	},
	methods: {
		onInput(option, checked) {
			this.$emit("input", this.getValue(option))
		}
	},
	data() {
		return {
			component: Radio
		}
	}
}
</script>

<style scoped>

</style>
