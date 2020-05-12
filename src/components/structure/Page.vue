<template>
	<div class="content-wrapper">
		<section class="content-header">
			<slot name="header"></slot>
		</section>
		<section class="content">
			<div class="container-fluid">
				<slot></slot>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "Page"
}
</script>

<style scoped>

</style>
