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
              style=" background:red; color: blue;"
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
              style=" background:red; color: yellow;"
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
    </section>
  </page>
</template>


<script>
import Multiselect from "vue-multiselect";
import dualListBox from "../../../src/components/forms/DualListBox";
export default {
  name: "AdvancedElements",
  components: {
    Multiselect,
    dualListBox
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
.multiselect__option--highlight {
  background: red;
}
</style>