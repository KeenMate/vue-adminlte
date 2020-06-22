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
      </div>
      <!--<div class="buttons are-primary">
        <button class="button" @click="oneToRight">></button>
        <button class="button" @click="allToRight">>></button>
        <button class="button" @click="oneToLeft">&lt;</button>
        <button class="button" @click="allToLeft">&lt;&lt;</button>
      </div>
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
        <span class="info-container">
          <span class="info">Showing all 6</span>
          <button type="button" class="btn btn-sm clear1" style="float:right!important;">show all</button>
        </span>
        <input class="form-control filter" type="text" placeholder="Filter" />
        <div class="btn-group buttons">
          <button type="button" class="btn moveall btn-outline-secondary" title="Move all">&gt;&gt;</button>
        </div>
        <select
          multiple="multiple"
          id="bootstrap-duallistbox-nonselected-list_"
          name="_helper1"
          style="height: 102px;"
          class="form-control"
        >
          <option selected>Alabama</option>
          <option>California</option>
          <option>Delaware</option>
          <option>Tennessee</option>
          <option>Texas</option>
          <option>Washington</option>
        </select>
      </div>
      <div class="box2 col-md-6">
        <label for="bootstrap-duallistbox-selected-list_" style="display: none;"></label>
        <span class="info-container">
          <span class="info">Showing all 1</span>
          <button type="button" class="btn btn-sm clear2" style="float:right!important;">show all</button>
        </span>
        <input class="form-control filter" type="text" placeholder="Filter" />
        <div class="btn-group buttons">
          <button
            type="button"
            class="btn removeall btn-outline-secondary"
            title="Remove all"
          >&lt;&lt;</button>
        </div>
        <select
          multiple="multiple"
          id="bootstrap-duallistbox-selected-list_"
          name="_helper2"
          style="height: 102px;"
          class="form-control"
        >
          <option data-sortindex="21">Alaska</option>
        </select>
      </div>
    </div>
    <select class="duallistbox" multiple="multiple" style="display: none;">
      <option selected>Alabama</option>
      <option data-sortindex="21">Alaska</option>
      <option>California</option>
      <option>Delaware</option>
      <option>Tennessee</option>
      <option>Texas</option>
      <option>Washington</option>
    </select>
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
    },
    oneToLeft: function() {
      var select = document.getElementById("rightselect").value;

      if (select != "" || select != null) {
        this.list1.push(select);
        var del;
        this.list2.forEach((el, index) => {
          if (el === select) del = index;
        });
        this.list2.splice(del, 1);
      }
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
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>