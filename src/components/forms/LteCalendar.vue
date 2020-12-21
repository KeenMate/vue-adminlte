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
							@input="onInput"
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

		value: [Date, String],

		/**
		 * @description Whether or not the clock should be displayed
		 */
		withTime: Boolean
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
		onInput(ev) {
			const parsedDate = m(ev.target.value)
			if (!parsedDate._isValid)
				return

			this.$emit("input", parsedDate.toDate())
		},
		async datetimepicker() {
			this.getDatePicker().datetimepicker({
				timepicker: this.withTime,
				locale: this.locale,
				format: this.format,
				disabledDates: this.disabledDates,
				daysOfWeekDisabled: this.disabledDaysOfWeek,
				useCurrent: false
			})
			
			// const vm = this
			$(this.$refs.dtpicker).on("change.datetimepicker", ({oldDate, date}) => {
				if (!date || date.isSame(this.value, "second"))
					return
				this.$emit("input", date.toDate())
			})

			await this.$nextTick()
			this.getDatePicker().datetimepicker("date", m(this.value))
		},
		getDatePicker() {
			return $(this.$refs.dtpicker)
		}
	},
	computed: {
		stringValue() {
			if (typeof this.value === "string")
				return this.value
			
			if (this.value instanceof Date)
				return this.value.toISOString()
		}
	}
}
</script>
