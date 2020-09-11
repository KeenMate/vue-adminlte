<template>
	<button :type="buttonType" :class="buttonStyles" v-on="$listeners">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "LteButton",
	props: {
		isPrimary: Boolean,
		isSecondary: Boolean,
		isInfo: Boolean,
		isSuccess: Boolean,
		isDanger: Boolean,
		isWarning: Boolean,
		isSubmit: Boolean
	},
	computed: {
		buttonType() {
			return this.isSubmit
				? "submit"
				: "button"
		},
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
			else if (this.isSuccess)
				styles.push("btn-success")
			else if (this.isWarning)
				styles.push("btn-warning")

			return styles
		}
	}
}
</script>

<style scoped>

</style>
