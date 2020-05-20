<template>
	<BaseExtractor v-bind="{...$attrs, ...$props}" class="spanWrapper">
		<template slot-scope="{errorMessage}">
			<span class="tag is-danger">{{errorMessage}}</span>
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
		"messaages"
	],
	components: {
		BaseExtractor: templates.multiErrorExtractor.baseMultiErrorExtractor
	}
}
</script>

<style>
	.spanWrapper {
		margin-bottom: 14px
	}

	.spanWrapper > div {
		margin-bottom: 5px;
	}
</style>
