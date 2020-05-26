<template>
	<BaseExtractor v-bind="{...$attrs, ...$props}" class="spanWrapper">
		<template slot-scope="{errorMessage}">
			<slot :message="errorMessage">
				<span class="badge bg-warning">{{errorMessage}}</span>
			</slot>
		</template>
	</BaseExtractor>
</template>

<script>
import {templates} from "vuelidate-error-extractor"

export default {
	name: "MultiError",
	components: {
		BaseExtractor: templates.multiErrorExtractor.baseMultiErrorExtractor
	},
	props: [
		"validator",
		"attributes",
		"messages",
		"isBlock"
	]
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
