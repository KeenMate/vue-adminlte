<template>
	<Card v-bind="$attrs" paddingless>
		<template v-if="$scopedSlots.header" #header>
			<slot name="header"></slot>
		</template>
		<table :class="tableStyles">
			<thead>
				<slot name="head-tr"></slot>
			</thead>
			<tbody>
			<template v-for="(item, i) in items" :key="itemKey && item[itemKey] || item">
				<slot :item="item" :index="i"></slot>
			</template>
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

</style>
