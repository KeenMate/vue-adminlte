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
				v-on:change="signalChange"
				v-on:input="signalChange"
			/>
		</div>
	</div>
</template>

<script>
import $ from "jquery"

export default {
	name: "LteDateRangePicker",
	component: {},
	props: {
		id: String,
		withTime: {
			type: Boolean,
			default: false,
		},
		/**
		 * @type String
		 * @description daterange
		 */
		value: String,
		format: {
			type: String,
			default: "MMMM Do YYYY, h:mm:ss a'",
		},
	},
	watch: {
		format() {
			// watch it
			this.$forceUpdate()
		},
	},
	data() {
		return {}
	},
	mounted() {
		this.daterangepicker()
	},
	updated() {
		this.daterangepicker()
	},
	methods: {
		daterangepicker() {
			$(this.$refs.input).daterangepicker({
				timePicker: true,
				locale: this.locale,
			})
			$(this.$refs.input).on("apply.daterangepicker", this.signalChange)
		},
		signalChange: function () {
			this.$emit("input", this.$refs.input.value)
		},
	},
	computed: {
		locale() {
			if (this.WithTime) {
				return {
					format: "YYYY M/DD hh:mm",
				}
			} else {
				if (this.format.lenght > 0) {
					return {
						format: this.format,
					}
				} else {
					return {
						format: "MMMM Do YYYY, h:mm '",
					}
				}
			}
		},
	},
}
</script>
