<template>
	<div class="form-group">
		<Checkbox v-for="option in options" :key="getValue(option)">
			{{getText(option)}}
		</Checkbox>
	</div>
</template>

<script>
import Checkbox from "./Checkbox"
export default {
	name: "CheckboxGroup",
	components: {Checkbox},
	props: {
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
		}
	}
}
</script>

<style scoped>

</style>
