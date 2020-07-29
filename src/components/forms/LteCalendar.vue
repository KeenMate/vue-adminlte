<template>
	<div class="container mw-100 w-100">
		<div class="row">
			<div class="col-sm-6 w-100 mw-100 d-flex" style="flex-basis: 100%;">
				<div class="form-group w-100">
					<div
						class="input-group date"
						ref="dtpicker"
						:id="id"
						data-target-input="nearest"
					>
						<input
							type="text"
							class="form-control datetimepicker-input"
							:data-target="idWHastag"
							v-model="value"
							v-on:change="signalChange"
							v-on:input="signalChange"
							ref="input"
						/>
						<div
							class="input-group-append"
							:data-target="idWHastag"
							data-toggle="datetimepicker"
						>
							<div class="input-group-text">
								<i class="fa fa-calendar"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Cleave from "vue-cleave-component"
import $ from "jquery"
import Vue from "vue"
Vue.use(Cleave)
export default {
	name: "LteCalendar",
	component: {
		Cleave,
	},
	props: {
		/**
		 * @type {String}
		 * @description L = Dateonly |LT = TimeOnly
		 */
		format: String,
		/**
		 *@type {Array}
		 *@description array of disbled dates (string)
		 */
		disabledDates: Array,

		/**
		 * @type {Array}
		 * @description array 0-6
		 */
		disabledDaysOfWeek: Array,
		/**
		 * @type {String}
		 * @description See momentjs for valid locales.
		 */
		locale: {
			type: String,
			default: "cs",
		},
		/**
		 * @type {String}
		 * @description index of LteCalendar
		 */
		id: String,
		/**
		 * @type {String}
		 * @description selected date
		 */
		value: String,
	},
	watch: {
		format() {
			// watch it
			this.$forceUpdate()
		},
		value() {},
	},

	mounted() {
		this.datetimepicker()
	},
	updated() {
		this.datetimepicker()
		this.$emit("change", this.value)
	},
	methods: {
		datetimepicker() {
			$(this.$refs.dtpicker).datetimepicker({
				locale: this.locale,
				format: this.format,
				disabledDates: this.disabledDates,
				daysOfWeekDisabled: this.disabledDaysOfWeek,
			})
			$(this.$refs.dtpicker).on("change.datetimepicker", this.signalChange)
		},

		signalChange() {
			this.$emit("input", this.value)
		},
	},
	computed: {
		idWHastag() {
			return "#" + this.id
		},
	},
}
</script>
