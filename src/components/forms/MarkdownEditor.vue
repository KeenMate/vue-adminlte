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
	@import "~easymde/dist/easymde.min.css";

	.editor-toolbar {
		border-radius: 0 !important;
		padding: 0 !important;

	&:before, &:after {
		           margin: 0 !important;
	           }
	}
</style>
