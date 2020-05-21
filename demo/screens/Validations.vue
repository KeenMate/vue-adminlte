<template>
	<Page>
		<template #header>
			<PageHeader title="Validations" fas icon="search" />
		</template>
		<div class="row">
			<div class="col-md-6">
				<ImmediateValidations />
				<OnSubmitValidations />
			</div>
			<div class="col-md-6">
				<PerFieldMessagesValidations />
			</div>
		</div>
	</Page>
</template>

<script>
import ImmediateValidations from "../components/ImmediateValidations"
import OnSubmitValidations from "../components/OnSubmitValidations"
import PerFieldMessagesValidations from "../components/PerFieldMessagesValidations"

export default {
	name: "Validations",
	components: {PerFieldMessagesValidations, OnSubmitValidations, ImmediateValidations}
}
</script>

<style scoped>

</style>
