<template>
	<Card v-bind="Object.assign({}, $attrs, $props)" is-paddingless>
		<template v-if="$scopedSlots['card-title']" #card-title>
			<slot name="card-title"></slot>
		</template>
		<template v-if="$scopedSlots['card-header']" #header>
			<slot name="card-header"></slot>
		</template>
		<slot name="before-table"></slot>
		<table :class="tableStyles">
			<thead>
				<tr>
					<slot name="head"></slot>
				</tr>
			</thead>
			<with-root :if="!noTbody">
				<tbody>
					<slot></slot>
				</tbody>
			</with-root>
		</table>
		<slot name="after-table"></slot>
		<template v-if="$scopedSlots['card-footer']" #footer>
			<slot name="card-footer"></slot>
		</template>
	</Card>
</template>

<script>
import Card from "./Card.vue"
import WithRoot from "../helper-components/WithRoot"

export default {
	name: "CardTable",
	inheritAttrs: false,
	components: {Card, WithRoot},
	props: {
		...Card.props,

		/**
		 * Whether or not to render default slot inside tbody element (useful for external libraries that need to render wrapper by themself)
		 * @type {boolean}
		 */
		noTbody: Boolean,
	},
	computed: {
		tableStyles() {
			return ["table table-sm"]
		},
	},
}
</script>

<style scoped>
.table-row {
	display: table-row;
}
</style>
