<template>
	<VuePopper :trigger="trigger" :options="options">
		<template #reference>
			<slot style="display: none"></slot>
		</template>
		<slot name="popover"></slot>
	</VuePopper>
</template>

<script>
import VuePopper from "vue-popperjs"

export default {
	name: "Popper",
	components: {VuePopper},
	props: {
		placement: String,
		triggerHover: Boolean,
		triggerClickOpen: Boolean,
		triggerClickToggle: Boolean,
		triggerFocus: Boolean,
		isBottom: Boolean,
		isTop: Boolean,
		isLeft: Boolean,
		isRight: Boolean
	},
	computed: {
		options() {
			return {
				placement:
					(this.isTop && "top") ||
					(this.isBottom && "bottom") ||
					(this.isLeft && "left") ||
					(this.isRight && "right")
			}
		},
		trigger() {
			if (this.triggerHover)
				return "hover"
			else if (this.triggerClickOpen)
				return "clickToOpen"
			else if (this.triggerClickToggle)
				return "clickToToggle"
			else if (this.triggerFocus)
				return "focus"
			else
				return "hover"
		}
	}
}
</script>

<style>
	@import "~vue-popperjs/dist/vue-popper.css";
</style>
