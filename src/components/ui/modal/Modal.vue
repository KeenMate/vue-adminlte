<template>
	<div ref="modal" class="modal fade">
		<div :class="modalDialogClasses">
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
		
		isSmall: Boolean,
		isLarge: Boolean,
		isXlarge: Boolean,

		/**
		 * Called when modal is to be opened
		 * Can cancel opening by stopping provided event and returning false
		 * @type {function(Event): boolean}
		 */
		onShow: Function,

		/**
		 * Called when modal is to be closed
		 * Can cancel closing by stopping provided event and returning false
		 * @type {function(Event): boolean}
		 */
		onHide: Function,

		footerItemsAlignedRight: Boolean
	},
	computed: {
		modalDialogClasses() {
			return [
				"modal-dialog",
				this.isSmall && "modal-sm",
				this.isLarge && "modal-lg",
				this.isXlarge && "modal-xl",
			]
		},
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
		$(this.$refs.modal).modal({
			show: false
		})
		
		$(this.$refs.modal).on("show.bs.modal", this.localOnShow)
		$(this.$refs.modal).on("shown.bs.modal", this.onShown)
		$(this.$refs.modal).on("hide.bs.modal", this.localOnHide)
		$(this.$refs.modal).on("hidden.bs.modal", this.onHidden)
	},
	beforeDestroy() {
		$(this.$refs.modal).off("show.bs.modal", this.localOnShow)
		$(this.$refs.modal).off("shown.bs.modal", this.onShown)
		$(this.$refs.modal).off("hide.bs.modal", this.localOnHide)
		$(this.$refs.modal).off("hidden.bs.modal", this.onHidden)
	},
	methods: {
		toggle() {
			$(this.$refs.modal).modal("toggle")
		},
		localOnShow() {
			if (this.onShow)
				return this.onShow(...arguments)
			// this.$emit("show", ...arguments)
		},
		onShown() {
			this.$emit("shown", ...arguments)
		},
		localOnHide() {
			if (this.onHide)
				return this.onHide(...arguments)
			// this.$emit("hide", ...arguments)
		},
		onHidden() {
			this.$emit("hidden", ...arguments)
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
