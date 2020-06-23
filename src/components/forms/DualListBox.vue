<template>
  <!-- <div class="form-group">
    <label>{{title}}</label>
    <div class="bootstrap-duallistbox-container row moveonselect moveondoubleclick">
      <div class="box1 col-md-6">
        <div class="btn-group buttons flex-fill">
          <button class="btn moveall btn-outline-secondary" @click="allToRight" title="move all">>></button>
        </div>
        <select
          multiple
          size="8"
          id="leftSelect"
          @change="oneToRight"
          class="d-flex align-items-stretch flex-grow-1"
        >
          <option v-for="item1 in list1">{{item1}}</option>
        </select>

      <div class="box2 col-md-6">
        <div class="btn-group buttons">
          <button class="btn removeall btn-outline-secondary" @click="allToLeft">&lt;&lt;</button>
        </div>
        <select
          multiple
          size="8"
          id="rightselect"
          @change="oneToLeft"
          class="d-flex align-items-stretch flex-grow-1"
        >
          <option v-for="item2 in list2">{{item2}}</option>
        </select>
      </div>
    </div>
  </div>-->
  <div class="form-group">
    <label>Multiple</label>
    <div class="bootstrap-duallistbox-container row moveonselect moveondoubleclick">
      <div class="box1 col-md-6">
        <label for="bootstrap-duallistbox-nonselected-list_" style="display: none;"></label>
        <div class="btn-group buttons">
          <button
            type="button"
            class="btn moveall btn-outline-secondary"
            title="Move all"
            @click="allToRight"
          >&gt;&gt;</button>
        </div>
        <select
          multiple="multiple"
          id="leftSelect"
          name="_helper1"
          style="height: 102px;"
          class="form-control"
          @change="oneToRight"
        >
          <option v-for="item1 in list1">{{item1}}</option>
        </select>
      </div>
      <div class="box2 col-md-6">
        <label for="bootstrap-duallistbox-selected-list_" style="display: none;"></label>
        <div class="btn-group buttons">
          <button
            type="button"
            class="btn removeall btn-outline-secondary"
            title="Remove all"
            @click="allToLeft"
          >&lt;&lt;</button>
        </div>
        <select
          multiple="multiple"
          id="rightSelect"
          @change="oneToLeft"
          name="_helper2"
          style="height: 102px;"
          class="form-control"
        >
          <option v-for="item2 in list2">{{item2}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dualListBox",
  props: {
    /**
     * @type {string}
     * @description ID used for input and label
     */
    id: String,

    /**
     * @type {array},
     * @description content of First List
     */
    list1: Array,

    /**
     * @type {array},
     * @description content of Second List
     */
    list2: Array,
    /**
     * @type {string}
     * @description Title of DualListBox
     */
    title: String
  },
  methods: {
    oneToRight: function() {
      var select = document.getElementById("leftSelect").value;
      if (select != "" || select != null) {
        this.list2.push(select);
        var del;
        this.list1.forEach((el, index) => {
          if (el === select) del = index;
        });
        this.list1.splice(del, 1);
      }
      document.getElementById("leftSelect").value = "";
    },
    oneToLeft: function() {
      var select = document.getElementById("rightSelect").value;

      if (select != "" || select != null) {
        this.list1.push(select);
        var del;
        this.list2.forEach((el, index) => {
          if (el === select) del = index;
        });
        this.list2.splice(del, 1);
      }
      document.getElementById("rightSelect").value = "";
    },
    allToRight: function() {
      this.list1.forEach((el, i) => {
        this.list2.push(el);
      });
      this.list1.splice(0, this.list1.length);
    },
    allToLeft: function() {
      this.list2.forEach((el, i) => {
        this.list1.push(el);
      });
      this.list2.splice(0, this.list2.length);
    },
    sortArrays: function() {
      this.list1.sort(compare);
      this.list2.sort(compare);
    },
    compare: function(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
  },
  data() {
    return {
      rightSelectValue: "",
      leftSelectValue: ""
    };
  }
};
</script>

<style src="../../vendors/adminlte/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css">
</style>