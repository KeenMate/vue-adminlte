<template>
	<button :class="buttonStyles">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "AdminButton",
	props: {
		isPrimary: Boolean,
		isSecondary: Boolean,
		isInfo: Boolean,
		isDanger: Boolean,
		isWarning: Boolean
	},
	computed: {
		buttonStyles() {
			const styles = ["btn"]

			if (this.isPrimary)
				styles.push("btn-primary")
			else if (this.isSecondary)
				styles.push("btn-secondary")
			else if (this.isInfo)
				styles.push("btn-info")
			else if (this.isDanger)
				styles.push("btn-danger")
			else if (this.isWarning)
				styles.push("btn-warning")

			return styles.join(" ")
		}
	}
}
</script>

<style scoped>

</style>
