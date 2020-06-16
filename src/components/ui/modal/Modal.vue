<template>
	<div ref="modal" class="modal fade">
		<div class="modal-dialog">
			<div :class="contentStyles">
				<modal-header>
					<slot name="header"></slot>
				</modal-header>
				<div class="modal-body">
					<slot></slot>
				</div>
				<div :class="footerStyles">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from "jquery"
// import BsModal from "bootstrap/js/dist/modal"

import ModalHeader from "./ModalHeader.vue"

export default {
	name: "Modal",
	components: {ModalHeader},
	props: {
		isPrimary: Boolean,
		isSecondary: Boolean,
		isInfo: Boolean,
		isDanger: Boolean,
		isWarning: Boolean,
		isSuccess: Boolean,

		footerItemsAlignedRight: Boolean
	},
	computed: {
		contentStyles() {
			const styles = ["modal-content"]

			this.isPrimary && styles.push("bg-primary")
			this.isSecondary && styles.push("bg-secondary")
			this.isInfo && styles.push("bg-info")
			this.isDanger && styles.push("bg-danger")
			this.isWarning && styles.push("bg-warning")
			this.isSuccess && styles.push("bg-success")

			return styles.join(" ")
		},
		footerStyles() {
			const styles = ["modal-footer"]

			styles.push(this.footerItemsAlignedRight && "right-aligned-items" || "justify-content-between")

			return styles.join(" ")
		}
	},
	mounted() {
		// BsModal(this.$refs.modal, {
		// 	show: false
		// })

		$(this.$refs.modal).modal({
			show: false
		})
	},
	methods: {
		toggle() {
			$(this.$refs.modal).modal("toggle")
		}
	}
}
</script>

<style lang="scss" scoped>
	.modal-footer {
		display: flex;
		align-items: center;

		&.right-aligned-items {
			justify-content: flex-end;
		}
	}
</style>
