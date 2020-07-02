<template>
	<Card v-bind="$attrs" is-paddingless>
		<template v-if="$scopedSlots['card-header']" #header>
			<slot name="card-header"></slot>
		</template>
		<table :class="tableStyles">
			<thead>
			<tr>
				<slot name="head"></slot>
			</tr>
			</thead>
			<tbody>
			<tr v-if="!items.length">
				<slot name="no-entries"></slot>
			</tr>
			<slot v-else v-for="(item, i) in items" :item="item" :index="i"></slot>
			</tbody>
		</table>
	</Card>
</template>

<script>
import Card from "./Card.vue"

export default {
	name: "CardTable",
	inheritAttrs: false,
	components: {Card},
	props: {
		...Card.props,
		items: {
			type: Array,
			default: () => []
		},
		itemKey: String
		// title: String
	},
	computed: {
		tableStyles() {
			return ["table table-sm"]
		}
	}
}
</script>

<style scoped>
	.table-row {
		display: table-row;
	}
</style>
