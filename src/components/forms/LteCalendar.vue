<template>
	<div class="container mw-100 w-100">
		<div class="row">
			<div class="col-sm-6 w-100 mw-100 d-flex" style="flex-basis: 100%;">
				<div class="form-group w-100">
					<div
						ref="dtpicker"
						:id="id"
						class="input-group date"
						data-target-input="nearest"
					>
						<input
							v-bind="$attrs"
							:data-target="`#${id}`"
							type="text"
							class="form-control datetimepicker-input"
							@change="onChange"
						/>
						<div
							:data-target="`#${id}`"
							class="input-group-append"
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
import Vue from "vue"
import $ from "jquery"
import Cleave from "vue-cleave-component"
import m from "moment"

Vue.use(Cleave)

export default {
	name: "LteCalendar",
	props: {
		/**
		 * @type {"L" | "LT"}
		 */
		format: String,

		/**
		 *@type {string[]}
		 *@description array of disbled dates (string)
		 */
		disabledDates: Array,

		/**
		 * @type {string | Date | Moment}
		 * @description Used to restrict what value can be entered using calendar popup
		 */
		startDate: [String, Date, m],

		/**
		 * @type {string | Date | Moment}
		 * @description Used to restrict what value can be entered using calendar popup
		 */
		endDate: [String, Date, m],

		/**
		 * @type {number[]}
		 * @description array 0-6
		 */
		disabledDaysOfWeek: Array,

		/**
		 * @description See momentjs for valid locales.
		 */
		locale: String,

		/**
		 * @description id of LteCalendar
		 */
		id: String,

		value: [Date, String, m, Object],

		/**
		 * @description Whether or not the clock should be displayed
		 */
		withTime: Boolean,

		/**
		 * @type {object}
		 * @description Used to alter icons of LteCalendar
		 */
		icons: Object,
	
		inputIsUtc: Boolean,
		keepLocalTime: Boolean
	},
	watch: {
		value(val) {
			console.log("value changed", val)
			const momentDate = (val && val._isAMomentObject) && val || this.stringToMoment(val)
			this.setMomentDate(momentDate)
		},
		format(val) {
			this.getDatePicker().datetimepicker("format", val)
		}
	},
	mounted() {
		this.datetimepicker()
	},
	methods: {
		setMomentDate(momentDate) {
			console.log("setting moment date", momentDate)
			this.getDatePicker().datetimepicker("date", this.inputIsUtc && momentDate.utc(this.keepLocalTime) || momentDate)
		},
		getMomentValue() {
			if (this.value && this.value._isAMomentObject)
				return this.value
			return this.stringToMoment(this.value)
		},
		onChange(ev) {
			const value = ev.target.value
			console.log("on change event", value)

			if (!value)
				return

			const parsedMomentDate = this.stringToMoment(value)
			if (!parsedMomentDate._isValid)
				return

			this.$emit("input", parsedMomentDate)
		},
		async datetimepicker() {
			const $datepicker = this.getDatePicker()
			$datepicker.datetimepicker({
				timepicker: this.withTime,
				locale: this.locale,
				format: this.format,
				startDate: this.startDate && m(this.startDate) || null,
				endDate: this.endDate && m(this.endDate) || null,
				disabledDates: this.disabledDates,
				daysOfWeekDisabled: this.disabledDaysOfWeek,
				useCurrent: false,
				icons: this.icons || {}
			})
			
			// const vm = this
			$(this.$refs.dtpicker).on("change.datetimepicker", ev => {
				const {oldDate, date} = ev

				if (ev.target.nodeName === "INPUT")
					return

				console.log("datepicker on change date", ev, date, this.getMomentValue(), oldDate)

				if (!date || date.isSame(this.getMomentValue(), "second"))
					return
				this.$emit("input", date)
			})

			await this.$nextTick()
			this.setMomentDate(this.getMomentValue())
		},
		stringToMoment(value) {
			if (!value)
				return

			const momentDate = m(value, this.format)

			if (!this.inputIsUtc)
				return momentDate

			return momentDate.utc(this.keepLocalTime)
		},
		getDatePicker() {
			return $(this.$refs.dtpicker)
		}
	},
	data() {
		return {
		}
	}
}
</script>
