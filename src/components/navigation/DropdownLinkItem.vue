<template>
	<router-link :to="$attrs.to" class="dropdown-item"><slot></slot></router-link>
</template>

<script>
export default {
  name: "DropdownLinkItem"
}
</script>

<style scoped>

</style>
