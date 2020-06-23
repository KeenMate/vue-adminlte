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
      <card title="Vue-Multiselect default" is-info>
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
      <card title="dual listbox" is-info>
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
            class="d-flex mb-2"
          ></the-mask>
          <the-mask
            mask="##/##/####"
            type="text"
            :masked="true"
            placeholder="mm/dd/yyy"
            class="d-flex mb-2"
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
            class="d-flex mb-2"
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
            class="d-flex mb-2"
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
            class="d-flex mb-2"
          ></the-mask>
        </div>
      </card>
    </section>
  </page>
</template>


<script>
import Vue from "vue";
import Multiselect from "vue-multiselect";
import dualListBox from "../../../src/components/forms/DualListBox";
import VueTheMask from "vue-the-mask";
Vue.use(VueTheMask);
export default {
  name: "AdvancedElements",
  components: {
    Multiselect,
    dualListBox,
    VueTheMask
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
      ]
    };
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style >
/*.multiselect__option--highlight {
  background: red;
}*/
</style>