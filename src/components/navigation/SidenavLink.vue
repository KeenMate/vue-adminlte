<template>
	<li :class="liStyles">
		<router-link :to="to" :class="linkStyles" active-class="active" :exact="exactMatch">
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
		fasIcon: String,

		/**
		 * @type {String | {name: String, path: String}}
		 * @description Passed to &lt;router-link&gt; tag
		 */
		to: null,
		/**
		 * @type {Boolean}
		 * @description Passed to &lt;router-link&gt; tag
		 */
		isActive: Boolean,
		/**
		 * @type {Boolean}
		 * @description Passed to &lt;router-link&gt; tag's `exact`
		 */
		exactMatch: Boolean,

		/**
		 * @type {Boolean}
		 * @description Controls whether sublinks are displayed or not
		 */
		isOpen: Boolean
	},
	computed: {
		liStyles() {
			const styles = ["nav-item"]

			if (this.$scopedSlots.sublinks)
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
