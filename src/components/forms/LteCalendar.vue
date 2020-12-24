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

		value: [Date, String, m],

		/**
		 * @description Whether or not the clock should be displayed
		 */
		withTime: Boolean,

		/**
		 * @type {object}
		 * @description Used to alter icons of LteCalendar
		 */
		icons: Object,
	
		inputIsUtc: Boolean
	},
	watch: {
		value(val) {
			this.getDatePicker().datetimepicker("date", m(val))
		},
		format(val) {
			this.getDatePicker().datetimepicker("format", val)
		}
	},
	mounted() {
		this.datetimepicker()
	},
	methods: {
		onChange(ev) {
			if (!ev.target.value)
				return ev.target.value

			const parsedDate = m(ev.target.value)
			if (!parsedDate._isValid)
				return

			this.$emit("input", this.momentDateToNativeDate(parsedDate))
		},
		async datetimepicker() {
			this.getDatePicker().datetimepicker({
				timepicker: this.withTime,
				locale: this.locale,
				format: this.format,
				startDate: this.startDate && m(this.startDate) || null,
				endDate: this.endDate && m(this.endDate) || null,
				disabledDates: this.disabledDates,
				daysOfWeekDisabled: this.disabledDaysOfWeek,
				useCurrent: false,
				icons: this.icons || null
			})
			
			// const vm = this
			$(this.$refs.dtpicker).on("change.datetimepicker", ({oldDate, date}) => {
				if (!date || date.isSame(this.value, "second"))
					return
				this.$emit("input", this.momentDateToNativeDate(date))
			})

			await this.$nextTick()
			this.getDatePicker().datetimepicker("date", m(this.value))
		},
		momentDateToNativeDate(momentDate) {
			return momentDate
				.utc(this.inputIsUtc)
				.format()
		},
		getDatePicker() {
			return $(this.$refs.dtpicker)
		}
	},
	computed: {
		stringValue() {
			if (typeof this.value === "string")
				return this.value
			if (this.value instanceof m)
				return this.value.format()
			if (this.value instanceof Date)
				return this.value.toISOString()
		}
	}
}
</script>
