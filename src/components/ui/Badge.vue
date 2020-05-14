<template>
	<span :class="spanStyles">
		<slot></slot>
	</span>
</template>

<script>
export default {
	name: "Badge",
	props: {
		isDanger: Boolean,
		isWarning: Boolean,
		isSuccess: Boolean,
		isInfo: Boolean,
		isPrimary: Boolean,
		isRight: Boolean
	},
	computed: {
		spanStyles() {
			const styles = ["badge"]

			if (this.isDanger)
				styles.push("badge-danger")
			else if (this.isWarning)
				styles.push("badge-warning")
			else if (this.isSuccess)
				styles.push("badge-success")
			else if (this.isInfo)
				styles.push("badge-info")
			else if (this.isPrimary)
				styles.push("badge-primary")

			if (this.isRight)
				styles.push("right")

			return styles
		}
	}
}
</script>

<style scoped>

</style>
