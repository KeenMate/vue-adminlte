<template>
	<div :class="cardStyles">
		<div class="card-header">
			<h3 v-if="title" class="card-title">
				<i v-if="icon" :class="'fas ' + icon"></i>
				{{title}}
			</h3>
			<slot name="header"></slot>
		</div>
		<div :class="'card-body' + (paddingless && ' p-0' || '')">
			<slot></slot>
		</div>
		<div v-if="$scopedSlots.footer" class="card-footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "Card",
	props: {
		title: String,
		icon: String,
		outlined: Boolean,
		paddingless: Boolean,
		isInfo: Boolean,
		isSuccess: Boolean,
		isDanger: Boolean,
		isWarning: Boolean
	},
	computed: {
		cardStyles() {
			const styles = ["card"]

			if (this.outlined)
				styles.push("card-outline")

			if (this.isInfo)
				styles.push("card-info")
			if (this.isSuccess)
				styles.push("card-success")
			if (this.isDanger)
				styles.push("card-danger")
			if (this.isWarning)
				styles.push("card-warning")

			return styles
		}
	}
}
</script>

<style scoped>

</style>
