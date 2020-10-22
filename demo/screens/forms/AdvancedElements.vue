<template>
	<page>
		<section class="content-header">
			<h1>Advanced Elements</h1>
		</section>
		<section class="content">
			<card title="Vue-Multiselect default">
				<!-- -->
				<div class="row">
					<!-- Single select with search -->
					<div class="col-md-6">
						<label>Single select with search</label>
						<multiselect
							v-model="singleselectvalue"
							:options="SelectOptions"
							:close-on-select="true"
							placeholder="Select one"
							label="name"
							track-by="name"
						>Single select with search
						</multiselect>
					</div>
					<!-- Multiselect with seatch-->
					<div class="col-md-6">
						<label>Multiselect with seatch</label>
						<multiselect
							v-model="multiselectValue"
							:options="SelectOptions"
							:multiple="true"
							:close-on-select="true"
							placeholder="Pick some"
							label="name"
							track-by="name"
						></multiselect>
					</div>
				</div>
				<!-- -->
				<div class="row">
					<!-- singleselect disabled -->
					<div class="col-md-6">
						<label>singleselect disabled</label>
						<multiselect
							v-model="singleselectvalue"
							:options="SelectOptions"
							:close-on-select="true"
							:clear-on-select="false"
							placeholder="Select one"
							label="name"
							track-by="name"
							disabled
						></multiselect>
					</div>
					<!-- Multu select with seatch and one of options disabled-->
					<div class="col-md-6">
						<label>Multi select with seatch and one of options disabled</label>
						<multiselect
							v-model="multiselectValue"
							:options="SelectOptionsWdisabled"
							:multiple="true"
							:close-on-select="true"
							placeholder="Pick some"
							label="name"
							track-by="name"
						></multiselect>
					</div>
				</div>
				<!-- -->
				<div class="row">
					<div class="col-md-6">
						<label
						>Single select with search and blue text and red background</label
						>
					</div>
					<div class="col-md-6">
						<label
						>Multi select with search and yelow text and red background</label
						>
					</div>
				</div>
				<div class="row">
					<!-- Single select with search and blue text-->
					<div class="col-md-6">
						<multiselect
							v-model="singleselectvalue"
							:options="SelectOptions"
							:close-on-select="true"
							placeholder="Select one"
							label="name"
							track-by="name"
							class="has-text-danger"
							style="color: blue"
						></multiselect>
					</div>
					<!-- Multu select with seatch-->
					<div class="col-md-6">
						<multiselect
							v-model="multiselectValue"
							:options="SelectOptions"
							:multiple="true"
							:close-on-select="true"
							placeholder="Pick some"
							label="name"
							track-by="name"
							class="has-text-success"
							style="color: yellow"
						></multiselect>
					</div>
				</div>
			</card>
			<card title="dual listbox">
				<div class="row">
					<div class="col-12">
						<dualListBox
							:leftList="ListBox1"
							:rightList="ListBox2"
							title="Dual list box"
							id="dualListBox"
						>DualListBox
						</dualListBox
						>
					</div>
				</div>
			</card>
			<div class="row">
				<div class="col-6">
					<card title="the-mask" is-danger>
						<div class="d-flex flex-column bd-highlight mb-2">
							<label class="mb-1">
								<b>Date masks:</b>
							</label>
							<input
								name="text"
								v-cleave="{date: true, datePattern: ['d', 'm', 'Y']}"
								placeholder="dd/mm/yyyy"
								class="d-flex flex-column bd-highlight mb-2 form-control"
							/>
							<the-mask
								mask="##/##/####"
								type="text"
								:masked="true"
								placeholder="mm/dd/yyy"
								class="d-flex mb-2 form-control"
							></the-mask>
						</div>
						<div class="d-flex flex-column bd-highlight mb-2">
							<label class="mb-1">
								<b>US phone mask:</b>
							</label>
							<the-mask
								mask="(###) ###-####"
								type="text"
								:masked="true"
								placeholder="(___) ___-____"
								class="d-flex mb-2 form-control"
							></the-mask>
						</div>
						<div class="d-flex flex-column bd-highlight mb-2">
							<label class="mb-1">
								<b>Intl US phone mask:</b>
							</label>
							<the-mask
								mask="###-###-####"
								type="text"
								:masked="true"
								placeholder="___-___-____ "
								class="d-flex mb-2 form-control"
							></the-mask>
						</div>
						<div class="d-flex flex-column bd-highlight mb-2">
							<label class="mb-1">
								<b>IP mask:</b>
							</label>
							<the-mask
								mask="###.###.###.###"
								type="text"
								:masked="true"
								placeholder="_._._._"
								class="d-flex mb-2 form-control"
							></the-mask>
						</div>
					</card>
				</div>
				<div class="col-6">
					<card title="Date picker" is-info>
						<div class="d-flex flex-column bd-highlight mb-1">
							<label class="mb-0">Date:</label>
							<lte-calendar format="L" id="adminLteVCalendar"></lte-calendar>
						</div>
						<div class="d-flex flex-column bd-highlight mb-1">
							<label class="mb-0">Date range :</label>
							<lte-date-range-picker
								id="admitLteLteDateRangePicker"
								:start-date.sync="firstStart"
								:end-date.sync="firstEnd"
							/>
						</div>
						<div class="d-flex flex-column bd-highlight mb-1">
							<label class="mb-0">Date and time range :</label>
						</div>
						<lte-date-range-picker
							:start-date.sync="secondStart"
							:end-date.sync="secondEnd"
							withTime
						/>
						<div class="d-flex flex-column bd-highlight mb-1">
							<label class="mb-0">Date range picker</label>
							<lte-date-range-button
								id="admitLteLteDateRangeButton"
							></lte-date-range-button>
						</div>
					</card>
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<card
						title="time and color picker"
						is-info
						class="d-flex flex-column flex-grow"
					>
						<div
							class="d-flex flex-column bd-highlight mb-1 input-group input-group-inline"
						>
							<colour-picker
								v-model="color"
								label="Pick Colour"
								picker="chrome"
							/>
						</div>
						<div class="d-flex flex-column bd-highlight mb-1">
							<label>time picker</label>
							<lte-calendar format="LT" id="vcal2"></lte-calendar>
						</div>
					</card>
				</div>
				<div class="col-6">
					<card title="Checkbox and Radio Inputs">
						<div class="row">
							<div class="col-6">
								<div class="form-group-inline row">
									<input
										class="form-input mr-1"
										type="checkbox"
										id="customcheckbox1"
										value
										checked
										style="width: 25px; height: 25px"
									/>
									<input
										class="form-input mr-1"
										type="checkbox"
										id="customcheckbox2"
										value
										style="width: 25px; height: 25px"
									/>
									<input
										class="form-input mr-1"
										type="checkbox"
										id="customcheckbox3"
										value
										disabled
										style="width: 25px; height: 25px"
									/>
									<label>primary check box</label>
								</div>
							</div>
							<div class="col-6">
								<Radio value :inputStyles="['input-lg']"></Radio>
							</div>
						</div>
					</card>
				</div>
			</div>
		</section>
	</page>
</template>

<script>
import Vue from "vue"
import Multiselect from "vue-multiselect"
import VueTheMask from "vue-the-mask"

import ColourPicker from "vue-colour-picker"
import Cleave from "cleave.js"

import moment from "moment"

Vue.use(VueTheMask)

Vue.directive("cleave", {
	inserted(el, binding) {
		el.cleave = new Cleave(el, binding.value || {})
	},
	update(el) {
		const event = new Event("input", {bubbles: true})
		setTimeout(() => {
			el.value = el.cleave.properties.result
			el.dispatchEvent(event)
		}, 100)
	}
})
export default {
	name: "AdvancedElements",
	components: {
		Multiselect,
		VueTheMask,
		ColourPicker,
		Cleave
	},
	data() {
		return {
			firstStart: moment(),
			firstEnd: moment().add(10, "days"),
			secondStart: moment().subtract(30, "minutes"),
			secondEnd: moment(),
			isDisabled: true,
			multiselectValue: null,
			singleselectvalue: null,
			SelectOptions: [
				{name: "AAA"},
				{name: "BBB"},
				{name: "CCC"},
				{name: "DDD"}
			],
			SelectOptionsWdisabled: [
				{name: "AAA"},
				{name: "BBB"},
				{name: "CCC", $isDisabled: true},
				{name: "DDD"}
			],
			ListBox1: [
				"James",
				"John",
				"Robert",
				"Michael",
				"William",
				"David",
				"Richard",
				"Joseph",
				"Thomas",
				"Charles"
			],
			ListBox2: [
				"James2",
				"John2",
				"Robert2",
				"Michael2",
				"William2",
				"David2",
				"Richard2",
				"Joseph2",
				"Thomas2",
				"Charles2"
			],
			date: new Date(),
			range: {
				start: null, // Jan 16th, 2019
				end: null // Jan 19th, 2020
			},
			rangeWithTime: {
				start: "",
				end: ""
			},
			DateRangePickerOprions: [
				"Today",
				"Yesterday",
				"Last 7 Days",
				"Last 30 Days",
				"This month",
				"Last month"
			],
			DateRangePickerValue: "",
			color: {
				hex: "#000000"
			},
			Time: ""
		}
	}
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="vue2-timepicker/dist/VueTimepicker.css"></style>


<style>
.multiselect__option--highlight #red {
	background: red;
}

.red-checkbox:checked {
	background-color: red;
	color: red;
}
</style>
