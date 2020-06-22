<template>
  <div class="input-group input-group-sm">
    <div class="row">{{title}}</div>
    <div class="row">
      <div class="col-md-5">
        <div class="select is-multiple">
          <select multiple size="8" id="leftSelect" @change="oneToRight">
            <option v-for="item1 in list1">{{item1}}</option>
          </select>
        </div>
      </div>
      <div class="col-md-2">
        <div class="buttons are-primary">
          <button class="button" @click="oneToRight">></button>
          <button class="button" @click="allToRight">>></button>
          <button class="button" @click="oneToLeft">&lt;</button>
          <button class="button" @click="allToLeft">&lt;&lt;</button>
        </div>
      </div>
      <div class="col-md-5">
        <select multiple size="8" id="rightselect" @change="oneToLeft">
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