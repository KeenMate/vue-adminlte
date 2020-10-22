<template>
	<div class="container mw-100 m-100">
		<div class="input-group w-100 mb-3">
			<div class="input-group-prepend">
				<div class="input-group-text">
					<i v-if="withTime" class="fa fa-clock-o"></i>
					<i v-if="!withTime" class="fa fa-calendar"></i>
				</div>
			</div>
			<input
				type="text"
				:id="id"
				class="form-control"
				ref="input"
				:value="value"
				v-on:change="onDateRangeChanged"
				v-on:input="onDateRangeChanged"
			/>
		</div>
	</div>
</template>

<script>
import $ from "jquery"
import moment from "moment"

export default {
	name: "LteDateRangePicker",
	component: {},
	props: {
		id: String,
		withTime: Boolean,

		// /**
		//  * @type String
		//  * @description daterange
		//  */
		// value: String,

		/**
		 * @description Its supplied to daterangepicker component as the beggining of range
		 */
		startDate: [moment, Date, String],
		/**
		 * @description Its supplied to daterangepicker component as the end of range
		 */
		endDate: [moment, Date, String],

		format: String
	},
	mounted() {
		this.daterangepicker()
	},
	updated() {
		this.daterangepicker()
	},
	watch: {
		startDate(val) {
			this.daterangepickerInstance
				&& this.daterangepickerInstance.setStartDate(moment(val))
		},
		endDate(val) {
			this.daterangepickerInstance
				&& this.daterangepickerInstance.setEndDate(moment(val))
		},
		format() {
			// watch it
			this.daterangepicker()
		},
	},
	methods: {
		daterangepicker() {
			this.daterangepickerInstance = $(this.$refs.input).daterangepicker({
				timePicker: this.withTime,
				startDate: moment(this.startDate),
				endDate: moment(this.endDate),
				locale: this.locale,
			}, this.onDateRangeChanged)
			// $(this.$refs.input).on("apply.daterangepicker", this.onDateRangeChanged)
		},
		onDateRangeChanged(startDate, endDate) {
			// emit dates only if they differ from original values (precision is decided by `this.locale.format`)
			this.datesAreDifferent("startDate", startDate)
				&& this.$emit("update:start-date", startDate.toDate())
			this.datesAreDifferent("endDate", endDate)
				&& this.$emit("update:end-date", endDate.toDate())
		},
		datesAreDifferent(originalFieldName, newDate) {
			const theDate = this[originalFieldName]
			const theDateMoment = moment(theDate)

			return theDateMoment.format(this.locale.format) === newDate.format(this.locale.format)
		}
	},
	computed: {
		value() {
			return `${moment(this.startDate).format(this.locale.format)} - ${moment(this.endDate).format(this.locale.format)}`
		},
		locale() {
			return {
				format: this.format || "YYYY MM. DD. h:mm A"
			}
		}
	},
	data() {
		return {
			daterangepickerInstance: null
		}
	}
}
</script>
