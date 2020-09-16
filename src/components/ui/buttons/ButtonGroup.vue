<template>
	<div :class="styles">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: "ButtonGroup",
	props: {
  	isFlat: Boolean
	},
	computed: {
  	styles() {
  		return [
  			"button-grp",
			  this.isFlat && "btn-flat"
		  ]
	  }
	}
}
</script>

<style scoped>

</style>
