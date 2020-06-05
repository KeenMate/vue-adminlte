<template>
	<vue-easymde />
</template>

<script>
import VueEasymde from "vue-easymde"

export default {
	name: "MarkdownEditor",
	components: {
		VueEasymde
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
