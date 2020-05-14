<template>
	<li :class="liStyles">
		<a :href="link" :class="linkStyles">
			<i v-if="fasIcon" :class="'nav-icon fas fa-' + fasIcon"></i>
			<p>
				<slot></slot>
			</p>
		</a>
		<ul v-if="nested && $scopedSlots.sublinks" class="nav nav-treeview">
			<slot name="sublinks"></slot>
		</ul>
	</li>
</template>

<script>
export default {
	name: "SidenavLink",
	props: {
		link: String,
		fasIcon: String,
		nested: Boolean,
		isActive: Boolean,
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
