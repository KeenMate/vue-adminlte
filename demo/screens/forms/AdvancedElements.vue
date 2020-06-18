<template>
  <page>
    <!-- 
									kdys se zmeni label nebo track-by u multiselect tak prestane fungovat
									Nefunguji styly

    -->
    <card title="Vue-Multiselect default" is-info>
      <div class="row">
        <!-- Single select with search -->
        <div class="col-md-6">
          <multiselect
            v-model="singleselectvalue"
            :options="SelectOptions"
            close-on-select="true"
            placeholder="Select one"
            label="name"
            track-by="name"
          ></multiselect>
        </div>
        <!-- Multu select with seatch-->
        <div class="col-md-6">
          <multiselect
            v-model="multiselectValue"
            :options="SelectOptions"
            multiple="true"
            close-on-select="true"
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
          <multiselect
            v-model="singleselectvalue"
            :options="SelectOptions"
            :close-on-select="true"
            :clear-on-select="false"
            placeholder="Select one"
            label="name"
            track-by="name"
            :isDisabled="true"
          ></multiselect>
        </div>
        <!-- Multu select with seatch and one of options disabled-->
        <div class="col-md-6">
          <multiselect
            v-model="multiselectValue"
            :options="SelectOptionsWdisabled"
            multiple="true"
            close-on-select="true"
            placeholder="Pick some"
            label="name"
            track-by="name"
          ></multiselect>
        </div>
      </div>
      <!-- -->
    </card>
  </page>
</template>


<script>
import Multiselect from "vue-multiselect";
export default {
  name: "AdvancedElements",
  components: {
    Multiselect
  },
  data() {
    return {
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
      ]
    };
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>