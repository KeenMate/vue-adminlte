<template>
	<vue-easymde
		ref="vueEasyMde"
		v-bind="$attrs"
		v-on="$listeners"
	/>
</template>

<script>
import VueEasymde from "vue-easymde"

export default {
	name: "MarkdownEditor",
	components: {
		VueEasymde,
	},
	computed: {
		attrsWithoutValue() {
			const res = {}
			Object.keys(this.$attrs)
				.forEach(key => {
					if (key === "value")
						return
					
					res[key] = this.$attrs[key]
				})

			return res
		}
	},
	watch: {
		"$attrs.value"(val) {
			// console.log("Initializing editor")

			// this.$refs.vueEasyMde.isValueUpdateFromInner =
			// 	val === this.valueFromNested
			this.$refs.vueEasyMde.easymde.value(val)
		},
	}
	// methods: {
	// 	onInput(val) {
	// 		this.valueFromNested = val
	// 	}
	// }
	// data() {
	// 	return {
	// 		valueFromNested: this.$attrs.value,
	// 	}
	// },
}
</script>

<style lang="scss">
@import "../../../node_modules/easymde/dist/easymde.min";

.editor-toolbar {
	border-radius: 0 !important;
	padding: 0 !important;

	&:before,
	&:after {
		margin: 0 !important;
	}
}
</style>
