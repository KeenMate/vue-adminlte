<template>
	<li :class="liStyles">
		<router-link :to="to" :class="linkStyles" active-class="active">
			<i v-if="fasIcon" :class="'nav-icon fas fa-' + fasIcon"></i>
			<p>
				<slot></slot>
			</p>
		</router-link>
		<ul v-if="$scopedSlots.sublinks" class="nav nav-treeview">
			<slot name="sublinks"></slot>
		</ul>
	</li>
</template>

<script>
export default {
	name: "SidenavLink",
	props: {
		/**
		 * @type {String | {name: String, path: String}}
		 * @description Passed to &lt;router-link&gt; tag
		 */
		to: null,
		fasIcon: String,
		isActive: Boolean,

		/**
		 * @type {Boolean}
		 * @description Controls whether sublinks are displayed or not
		 */
		isOpen: Boolean
	},
	computed: {
		liStyles() {
			const styles = ["nav-item"]

			if (this.nested && this.$scopedSlots.sublinks)
				styles.push("has-treeview")

			if (this.isOpen)
				styles.push("menu-open")

			return styles
		},
		linkStyles() {
			const styles = ["nav-link"]

			if (this.isActive)
				styles.push("active")

			return styles
		}
	}
}
</script>

<style scoped>

</style>
