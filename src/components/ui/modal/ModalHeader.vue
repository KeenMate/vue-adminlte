<template>
	<div class="modal-header">
		<h4 class="modal-title">
			<slot></slot>
		</h4>
		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span></button>
	</div>
</template>

<script>
export default {
	name: "ModalHeader"
}
</script>

<style scoped>

</style>
