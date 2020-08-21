<template>
	<vue-easymde
		ref="vueEasyMde"
		v-bind="attrsWithoutValue"
		:value=""
		v-on="listenersWithoutInput"
		@input="onInput"
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
		listenersWithoutInput() {
			const res = {}
			Object.keys(this.$listeners)
				.forEach(key => {
					if (key === "input")
						return
					
					res[key] = this.$listeners[key]
				})

			return res
		},
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

			if (val !== this.valueFromNested) {
				this.$refs.vueEasyMde.easymde.value(val)
				this.valueFromNested = val
			} else
				this.$refs.vueEasyMde.isValueUpdateFromInner =
					val === this.valueFromNested
			
			// not working because it sets cursor position to beginning
			// this.$refs.vueEasyMde.easymde.value(val)
		},
	},
	methods: {
		onInput(val) {
			this.valueFromNested = val
			this.$emit("input", val)
		}
	},
	data() {
		return {
			valueFromNested: this.$attrs.value,
		}
	},
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
