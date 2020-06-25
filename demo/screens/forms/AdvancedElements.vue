<!-- MODEL: https://admin-lte.keenmate.com/pages/forms/advanced.html# -->

<template>
  <page>
    <!-- 
									kdys se zmeni  nebo track-by u multiselect tak prestane fungovat
    -->
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
            >Single select with search</multiselect>
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
            <label>Single select with search and blue text and red background</label>
          </div>
          <div class="col-md-6">
            <label>Multi select with search and yelow text and red background</label>
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
              style="  color: blue;"
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
              style=" color: yellow;"
            ></multiselect>
          </div>
        </div>
      </card>
      <card title="dual listbox">
        <div class="row">
          <div class="col-12">
            <dualListBox
              :list1="ListBox1"
              :list2="ListBox2"
              title="Dual list box"
              id="dualListBox"
            >DualListBox</dualListBox>
          </div>
        </div>
      </card>
      <!--https://vuejs-tips.github.io/vue-the-mask/
			'#': {pattern: /\d/},
    	'X': {pattern: /[0-9a-zA-Z]/},
    	'S': {pattern: /[a-zA-Z]/},
  	  'A': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase()},
  	  'a': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase()},
  	  '!': {escape: true}  
      -->
      <div class="row">
        <div class="col-6">
          <card title="the-mask" is-danger>
            <div class="d-flex flex-column bd-highlight mb-2">
              <label class="mb-1">
                <b>Date masks:</b>
              </label>
              <the-mask
                mask="##/##/####"
                type="text"
                :masked="true"
                placeholder="dd/mm/yyy"
                class="d-flex mb-2 form-control"
              ></the-mask>
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
              <label class="mb-1">Date:</label>
              <v-date-picker v-model="date"></v-date-picker>
            </div>
            <div class="d-flex flex-column bd-highlight mb-1">
              <label class="mb-1">Date range :</label>
              <v-date-picker mode="range" v-model="range" />
            </div>
            <div class="d-flex flex-column bd-highlight mb-1">
              <label class="mb-1">Date and time range :</label>

              <div class="row">
                <div class="col-6">
                  <datetime
                    type="datetime"
                    v-model="rangeWithTime.start"
                    use12-hour
                    class="form-control"
                  ></datetime>
                </div>
                <div class="col-6">
                  <datetime
                    type="datetime"
                    v-model="rangeWithTime.end"
                    use12-hour
                    class="form-control"
                  ></datetime>
                </div>
              </div>
              <label>Date range picker</label>
              <multiselect
                v-model="DateRangePickerValue"
                :options="DateRangePickerOprions"
                :multiple="false"
                :close-on-select="true"
                placeholder="Date range picker"
                track-by="DateRangePicker"
              ></multiselect>
            </div>
          </card>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <card title="time and color picker" is-info>
            <div class="d-flex flex-column bd-highlight mb-1">
              <colour-picker v-model="color" label="Pick Colour" picker="chrome" />
            </div>
            <div class="d-flex flex-column bd-highlight mb-1">
              <vue-timepicker
                format="hh:mm:ss a"
                :v-model="Time"
                :second-interval="10"
                :minute-interval="5"
              ></vue-timepicker>
            </div>
          </card>
        </div>
      </div>
    </section>
  </page>
</template>


<script>
import Vue from "vue";
import Multiselect from "vue-multiselect";
import dualListBox from "../../../src/components/forms/DualListBox";
import VueTheMask from "vue-the-mask";
import VueTimepicker from "vue2-timepicker";
import VCalendar from "v-calendar";
import Datetime from "vue-datetime";
import ColourPicker from "vue-colour-picker";
Vue.use(VueTheMask);
Vue.use(VCalendar);
Vue.use(Datetime);
export default {
  name: "AdvancedElements",
  components: {
    Multiselect,
    dualListBox,
    VueTheMask,
    VCalendar,
    VueTimepicker,
    ColourPicker
  },
  data() {
    return {
      isDisabled: true,
      multiselectValue: null,
      singleselectvalue: null,
      SelectOptions: [
        { name: "AAA" },
        { name: "BBB" },
        { name: "CCC" },
        { name: "DDD" }
      ],
      SelectOptionsWdisabled: [
        { name: "AAA" },
        { name: "BBB" },
        { name: "CCC", $isDisabled: true },
        { name: "DDD" }
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
        start: new Date(2019, 0, 16), // Jan 16th, 2019
        end: new Date(2020, 0, 19) // Jan 19th, 2020
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
    };
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src='vue2-timepicker/dist/VueTimepicker.css'></style>
<style src="vue-datetime/dist/vue-datetime.css">
</style>

<style >
/*.multiselect__option--highlight {
  background: red;
}*/
.vdatetime-input {
  border: 0ch;
}
</style>