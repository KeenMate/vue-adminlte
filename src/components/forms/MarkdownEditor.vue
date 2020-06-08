<template>
	<vue-easymde ref="vueEasyMde" v-bind="$attrs" v-on="$listeners" @input="onInput" />
</template>

<script>
import VueEasymde from "vue-easymde"

export default {
	name: "MarkdownEditor",
	components: {
		VueEasymde
	},
	watch: {
		"$attrs.value"(val) {
			console.log("Initializing editor")

			this.$refs.vueEasyMde.isValueUpdateFromInner = val === this.valueFromNested
		}
	},
	methods: {
		onInput(val) {
			this.valueFromNested = val
		}
	},
	data() {
		return {
			valueFromNested: this.$attrs.value
		}
	}
}
</script>

<style lang="scss">
	@import "../../../node_modules/easymde/dist/easymde.min";

	.editor-toolbar {
		border-radius: 0 !important;
		padding: 0 !important;

		&:before, &:after {
			margin: 0 !important;
		}
	}
</style>
