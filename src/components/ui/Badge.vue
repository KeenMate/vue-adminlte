<template>
	<div class="badge-group">
		<span v-if="$scopedSlots.default" :class="spanStyles">
			<slot></slot>
		</span>
		<template v-else>
			<span :class="leftBadgeStyles">
				<slot name="left"></slot>
			</span>
			<span :class="rightBadgeStyles">
				<slot name="right"></slot>
			</span>
		</template>
	</div>
</template>

<script>
export default {
	name: "Badge",
	props: {
		leftBadgeClass: String,
		rightBadgeClass: String,

		isDanger: Boolean,
		isWarning: Boolean,
		isSuccess: Boolean,
		isInfo: Boolean,
		isPrimary: Boolean,
		isRight: Boolean
	},
	computed: {
		spanStyles() {
			return [
				"badge",
				this.isDanger && "badge-danger",
				this.isWarning && "badge-warning",
				this.isSuccess && "badge-success",
				this.isInfo && "badge-info",
				this.isPrimary && "badge-primary",
				this.isRight && "right"
				// !this.$scopedSlots.default && "has-flex"
			]
		},
		leftBadgeStyles() {
			return [
				"badge",
				this.leftBadgeClass
			]
		},
		rightBadgeStyles() {
			return [
				"badge",
				this.rightBadgeClass
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.badge-group {
	display: inline-flex;

	& > .badge {
		&:first-child:not(:only-child) {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		&:last-child:not(:only-child) {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}
}
</style>
