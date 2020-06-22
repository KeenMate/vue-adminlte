<template>
	<fragment>
		<km-loader v-if="isLoading" />
		<div class="content-wrapper">
			<slot name="header"></slot>
			<section class="content">
				<div class="container-fluid">
					<slot></slot>
				</div>
			</section>
		</div>
	</fragment>
</template>

<script>
import KmLoader from "../keenmate/KmLoader.vue"

export default {
	name: "Page",
	components: {KmLoader},
	props: {
		/**
		 * determines whether to display indeterminate loader or not
		 * Alternatively can be set on app-container (and not here)
		 */
		isLoading: Boolean
	}
}
</script>

<style scoped>

</style>
