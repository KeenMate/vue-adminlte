<template>
	<div class="">
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
	name: "AppContainer"
}
</script>

<style scoped>

</style>
