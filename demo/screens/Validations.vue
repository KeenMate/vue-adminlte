<template>
	<Page>
		<template #header>
			<PageHeader title="Validations" fas icon="search" />
		</template>
		<ImmediateValidations />
		<OnSubmitValidations />
		<!--<Card title="Immediate validation" is-warning>
		</Card>-->
	</Page>
</template>

<script>
import ImmediateValidations from "../components/ImmediateValidations"
import OnSubmitValidations from "../components/OnSubmitValidations"

export default {
	name: "Validations",
	components: {OnSubmitValidations, ImmediateValidations}
}
</script>

<style scoped>

</style>
