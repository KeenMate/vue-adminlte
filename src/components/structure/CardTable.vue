<template>
	<Card v-bind="$attrs" paddingless>
		<template v-if="$scopedSlots.header" #header>
			<slot name="header"></slot>
		</template>
		<table :class="tableStyles">
			<thead>
			<tr>
				<slot name="head-tr"></slot>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(item, i) in items" :key="item[itemKey]">
				<slot :item="item" :index="i"></slot>
			</tr>
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
