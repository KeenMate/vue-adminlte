<template>
	<li :class="liClasses">
		<router-link
			:to="to"
			:id="dropdownLinkId"
			:class="linkClasses"
			:data-toggle="isDropdown && 'dropdown' || null"
			:aria-haspopup="isDropdown && 'true' || 'false'" aria-expanded="false"
		>
			<slot></slot>
		</router-link>
		<div v-if="isDropdown" class="dropdown-menu" :aria-labelledby="dropdownLinkId">
			<slot name="dropdown"></slot>
		</div>
	</li>
</template>

<script>

/**
 * @description Uses VueRouter's &lt;router-link&gt; to render top navigation's link.
 * In case of dropdown option submenu items need to be `DropdownLinkItem`
 */
export default {
	name: "TopNavLink",
	props: {
		/**
		 * @type {String | {name: String, path: String}}
		 * @description Passed to &lt;router-link&gt; tag
		 */
		to: null,

		/**
		 * Determines whether this link will be adjusted for dropdown
		 * @type {bool}
		 */
		isDropdown: Boolean,

		/**
		 * Sets id of link that toggles dropdown (used for aria as well)
		 * @type {string}
		 */
		dropdownLinkId: String
	},
	computed: {
		linkClasses() {
			const classes = ["nav-link"]

			this.isDropdown && classes.push("dropdown-toggle")

			return classes
		},
		liClasses() {
			const classes = ["nav-item d-inline-block"]

			this.isDropdown && classes.push("dropdown")

			return classes
		}
	}
}
</script>

<style scoped>

</style>
