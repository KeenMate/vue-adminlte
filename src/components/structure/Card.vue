<template>
	<div :class="cardStyles">
		<div class="card-header">
			<h3 class="card-title">
				<i v-if="icon" :class="'fas ' + icon"></i>
				{{title}}
				<slot v-if="!title" name="card-title"></slot>
			</h3>
			<slot name="header"></slot>
		</div>
		<div :class="'card-body' + (isPaddingless && ' p-0' || '')">
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
		isOutlined: Boolean,

		/**
		 * Whether card header will contain tabs component
		 */
		isTabbed: Boolean,
		isPaddingless: Boolean,
		isPrimary: Boolean,
		isInfo: Boolean,
		isSuccess: Boolean,
		isDanger: Boolean,
		isWarning: Boolean
	},
	computed: {
		cardStyles() {
			const styles = ["card"]

			this.isOutlined && styles.push("card-outline")
			this.isTabbed && styles.push(`card-${this.isOutlined && "outline-" || ""}tabs`)

			this.isPrimary && styles.push("card-primary")
			this.isInfo && styles.push("card-info")
			this.isSuccess && styles.push("card-success")
			this.isDanger && styles.push("card-danger")
			this.isWarning && styles.push("card-warning")

			return styles
		}
	}
}
</script>

<style scoped>

</style>
