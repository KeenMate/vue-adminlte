<template>
	<card title="Immediate validation" is-info>
		<form-input
			v-model="firstName"
			class="row"
			input-id="immediate-first-name-input"
			label="First name"
			placeholder="First name"
			label-styles="col-sm-2""
			horizontal-styles="col-sm-10""
			is-horizontal
			:is-valid="$v.firstName.$dirty ? !$v.firstName.$anyError : undefined"
			:is-invalid="$v.firstName.$dirty ? $v.firstName.$anyError : undefined"
			@blur="$v.firstName.$touch()"
		/>
		<form-input
			v-model="$v.lastName.$model"
			class="row"
			input-id="immediate-last-name-input"
			label="Last name"
			placeholder="Last name"
			label-styles="col-sm-2""
			horizontal-styles="col-sm-10""
			is-horizontal
			:is-valid="$v.lastName.$dirty ? !$v.lastName.$anyError : undefined"
			:is-invalid="$v.lastName.$dirty ? $v.lastName.$anyError : undefined"
			@blur="$v.lastName.$touch()"
		/>
		<form-input
			v-model="$v.password.$model"
			class="row"
			input-id="immediate-password-input"
			type="password"
			label="Password"
			placeholder="Password"
			label-styles="col-sm-2""
			horizontal-styles="col-sm-10""
			is-horizontal
			:is-valid="$v.password.$dirty ? !$v.password.$anyError : undefined"
			:is-invalid="$v.password.$dirty ? $v.password.$anyError : undefined"
			@blur="$v.password.$touch()"
		/>
		<form-input
			v-model="$v.age.$model"
			type="number"
			class="row"
			input-id="immediate-age-input"
			label="Age"
			placeholder="Age"
			label-styles="col-sm-2""
			horizontal-styles="col-sm-10""
			is-horizontal
			:is-valid="$v.age.$dirty ? !$v.age.$anyError : undefined"
			:is-invalid="$v.age.$dirty ? $v.age.$anyError : undefined"
			@blur="$v.age.$touch()"
		/>
		<hr>
		<lte-select
			v-model="$v.region.$model"
			label="Region"
			class="row"
			input-id="immediate-region-select"
			label-styles="col-sm-2""
			horizontal-styles="col-sm-10""
			is-horizontal
			:is-valid="$v.region.$dirty ? !$v.region.$anyError : undefined"
			:is-invalid="$v.region.$dirty ? $v.region.$anyError : undefined"
			@blur="$v.region.$touch()"
		>
			<option value="" selected>Choose region</option>
			<option value="eu">EU</option>
			<option value="usa">USA</option>
		</lte-select>
		<template v-if="region === 'eu'">
			<form-input
				v-model="eid"
				class="row"
				input-id="immediate-eid-input"
				label="EU Identification"
				placeholder="EU Identification"
				label-styles="col-sm-2""
				horizontal-styles="col-sm-10""
				is-horizontal
				:is-valid="$v.eid.$dirty ? !$v.eid.$anyError : undefined"
				:is-invalid="$v.eid.$dirty ? $v.eid.$anyError : undefined"
				@blur="$v.eid.$touch()"
			/>
		</template>
		<template v-else-if="region === 'usa'">
			<div class="row form-group">
				<div class="offset-sm-2 col-sm-10">
					<checkbox-group
						v-model="$v.agreedUpon.$model"
						:options="agreements"
						:get-text="x => x.text"
						:get-value="x => x.value"
						:get-disabled="x => x.disabled"
						is-horizontal
					/>
				</div>
			</div>
		</template>

		<hr v-if="$v.$invalid">
		<multi-error
			:validator="$v"
			:messages="validationMessages"
			:attributes="validationAttributes"
		/>

		<template #footer>
			<!--<button type="submit" class="btn btn-info">Sign in</button>-->
			<!--<button type="submit" class="btn btn-default float-right">Cancel</button>-->
			<lte-button is-primary is-submit @click="onSubmit">Register</lte-button>
		</template>
	</card>
</template>

<script>
import {required, requiredIf, between} from "vuelidate/lib/validators"
import {charMinCount, contains, masked, specialCharRegexp, validateIf} from "../../src/helpers/validators"

export default {
	name: "ImmediateValidations",
	computed: {
		isEURegion() {
			return this.region === "eu"
		},
		isUSARegion() {
			return this.region === "usa"
		}
	},
	methods: {
		async onSubmit() {
			this.$v.$touch()

			await this.$nextTick()
		}
	},
	validations() {
		return {
			firstName: {required},
			lastName: {required},
			password: {
				required,
				spaces_min2: charMinCount(" ", 2),
				specials_min1: charMinCount(new RegExp(specialCharRegexp, "g"), 1)
			},
			age: {
				required,
				age25_38: between(25, 38)
			},
			region: {
				required
			},

			// EU
			eid: {
				required: requiredIf("isEURegion"),
				eid_pattern: validateIf(this.isEURegion, masked(/[a-zA-Z]{2}-\d{4}/))
			},
			// USA
			agreedUpon: {
				// required: requiredIf("isUSARegion"),
				requiredAgreements: validateIf(this.isUSARegion, contains(this.requiredAgreements))
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
					text: "*No Disclosure Agreement"
				},
				{
					value: "citizen",
					text: "*Citizen-ship"
				},
				{
					value: "insurance",
					text: "Insurance"
				}
			],
			requiredAgreements: ["nda", "citizen"],

			// Validations
			validationAttributes: {
				firstName: "'First Name'",
				lastName: "'Last Name'",
				password: "'Password'",
				region: "'Region'",
				age: "'Age'",
				eid: "'European ID'",
				agreedUpon: "'Agreed upon'"
			},
			validationMessages: {
				required: "Field {attribute} is required",
				spaces_min2: "Field {attribute} must have at least 2 spaces",
				specials_min1: "Field {attribute} must have at least 1 special character",
				age25_38: "{attribute} must be between 25 and 38",
				eid_pattern: "Field {attribute} is in incorrect format. The format is: '[2-letter country]-[4-digit number]'. E.g 'CZ-1234'",
				requiredAgreements: "You must check NDA and Citizen-ship checkboxes!"
			}
		}
	}
}
</script>

<style scoped>

</style>
