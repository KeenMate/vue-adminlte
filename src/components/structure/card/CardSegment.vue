<template>
	<div class="card-segment">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "CardSegment"
}
</script>

<style lang="scss">
.card-segment {
	border-top: 1px solid #dee2e6;
	border-bottom: 1px solid #dee2e6;
}
</style>