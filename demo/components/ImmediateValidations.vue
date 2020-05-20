<template>
	<Card title="Immediate validation" is-info>
		<FormInput
			v-model="firstName"
			class="row"
			input-id="first-name-input"
			label="First name"
			placeholder="First name"
			:label-styles="['col-sm-2']"
			:horizontal-styles="['col-sm-10']"
			is-horizontal
		/>
		<FormInput
			v-model="lastName"
			class="row"
			input-id="last-name-input"
			label="Last name"
			placeholder="Last name"
			:label-styles="['col-sm-2']"
			:horizontal-styles="['col-sm-10']"
			is-horizontal
		/>
		<FormInput
			v-model="password"
			class="row"
			input-id="password-input"
			type="password"
			label="Password"
			placeholder="Password"
			:label-styles="['col-sm-2']"
			:horizontal-styles="['col-sm-10']"
			is-horizontal
		/>
		<FormInput
			v-model="age"
			type="number"
			class="row"
			input-id="age-input"
			label="Age"
			placeholder="Age"
			:label-styles="['col-sm-2']"
			:horizontal-styles="['col-sm-10']"
			is-horizontal
		/>
		<hr>
		<LteSelect
			v-model="region"
			label="Region"
			class="row"
			:label-styles="['col-sm-2']"
			:horizontal-styles="['col-sm-10']"
			is-horizontal
		>
			<option value="" selected>Choose region</option>
			<option value="eu">EU</option>
			<option value="usa">USA</option>
		</LteSelect>
		<template v-if="region === 'eu'">
			<FormInput
				v-model="eid"
				pattern="[A-Z]{2}-\d{4}"
				class="row"
				input-id="eid-input"
				label="EU Identification"
				placeholder="EU Identification"
				:label-styles="['col-sm-2']"
				:horizontal-styles="['col-sm-10']"
				is-horizontal
			/>
		</template>
		<template v-else-if="region === 'usa'">
			<div class="row form-group">
				<div class="offset-sm-2 col-sm-10">
					<CheckboxGroup
						v-model="agreedUpon"
						:options="agreements"
						:get-text="x => x.text"
						:get-value="x => x.value"
						:get-disabled="x => x.disabled"
						is-horizontal
					/>
				</div>
			</div>
		</template>

		<template #footer>
			<!--<button type="submit" class="btn btn-info">Sign in</button>-->
			<!--<button type="submit" class="btn btn-default float-right">Cancel</button>-->
			<LteButton is-primary is-submit>Register</LteButton>
		</template>
	</Card>
</template>

<script>
import {required} from "vuelidate/lib/validators"
import {charCount, specialCharRegexp} from "../../src/helpers/validators"

export default {
	name: "ImmediateValidations",
	validations() {
		return {
			firstName: {required},
			lastName: {required},
			password: {
				required,
				spaces: charCount(" ", 2),
				specials: charCount(specialCharRegexp, 1)
			}
		}
	},
	data() {
		return {
			firstName: "",
			lastName: "",
			password: "",
			region: "",
			age: null,

			// conditional
			// for EU region
			eid: "",

			// for USA
			agreedUpon: [],
			agreements: [
				{
					value: "nda",
					text: "No Disclosure Agreement"
				},
				{
					value: "citizen",
					text: "Citizen-ship"
				},
				{
					value: "insurance",
					text: "Insurance"
				}
			]
		}
	}
}
</script>

<style scoped>

</style>
