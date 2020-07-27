<template>
  <div class="container mw-100 m-100">
    <div ref="reportrange" class="input-group w-100">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <i class="fa fa-calendar"></i>
        </div>
      </div>
      <input v-model="value" type="text" class="form-control" ref="render" :id="id" />
      <div class="input-group-append">
        <div class="input-group-text">
          <i class="fa fa-caret-down"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

import moment from "moment";
export default {
  name: "VDateRangeButton",
  component: {},
  props: {
    /**
     * @type String
     * @description id of input
     */
    id: String,
    /**
     * @type String
     * @description Date range
     */
    value: String
  },
  data() {
    return {};
  },
  mounted() {
    $(() => {
      //last 30 days is default
      var start = moment().subtract(29, "days");
      var end = moment();

      $(this.$refs.reportrange).daterangepicker(
        {
          startDate: start,
          endDate: end,
          ranges: {
            Today: [moment(), moment()],
            Yesterday: [
              moment().subtract(1, "days"),
              moment().subtract(1, "days")
            ],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [
              moment()
                .subtract(1, "month")
                .startOf("month"),
              moment()
                .subtract(1, "month")
                .endOf("month")
            ]
          }
        },
        (start, end) => {
          this.$refs.render.value =
            start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY");
        }
      );
    });
  }
};
</script>
