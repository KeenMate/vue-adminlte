<template>
	<BaseExtractor v-bind="{...$attrs, ...$props}" class="spanWrapper">
		<template slot-scope="{errorMessage}">
			<!--<span class="tag is-danger">{{errorMessage}}</span>-->
			<span class="badge bg-warning">{{errorMessage}}</span>
		</template>
	</BaseExtractor>
</template>

<script>
import {templates} from "vuelidate-error-extractor"

export default {
	name: "MultiError",
	props: [
		"validator",
		"attributes",
		"messages"
	],
	components: {
		BaseExtractor: templates.multiErrorExtractor.baseMultiErrorExtractor
	}
}
</script>

<style lang="scss">
	.spanWrapper {
		margin-bottom: .5rem;

		& > div {
			display: inline;

			&:not(:last-child) {
				margin-right: .2rem;
			}
		}
	}
</style>
