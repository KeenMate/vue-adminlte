<template>
	<div class="content-wrapper">
		<slot name="header"></slot>
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
