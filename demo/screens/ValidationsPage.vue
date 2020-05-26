<template>
	<page>
		<template #header>
			<page-header title="Validations" fas icon="search" />
		</template>
		<div class="row">
			<div class="col-md-6">
				<immediate-validations />
				<on-submit-validations />
			</div>
			<div class="col-md-6">
				<per-field-messages-validations />
			</div>
		</div>
	</page>
</template>

<script>
import ImmediateValidations from "../components/ImmediateValidations.vue"
import OnSubmitValidations from "../components/OnSubmitValidations.vue"
import PerFieldMessagesValidations from "../components/PerFieldMessagesValidations.vue"

export default {
	name: "ValidationsPage",
	components: {PerFieldMessagesValidations, OnSubmitValidations, ImmediateValidations}
}
</script>

<style scoped>

</style>
