<template>
  <div class="input-group input-group-sm">
    <div class="row">
      {{Title}}
    </div>
    <div class="row">
      <div class="col-md-5">
          <div class="select is-multiple">
            <select multiple size="8" id="rightSelect">
              <option v-bind:for="item1 in list1">{{item1}} </option>
            </select>
          </div>
      </div>
      <div class="col-md-2">
        <div class="buttons are-primary">
          <button class="button " @click="oneToRight">></button>
          <button class="button " @click="allToRight">>></button>
          <button class="button " @click="oneToLeft">&gt;</button>
          <button class="button " @click="allToLeft">&gt;&gt;</button>
        </div>
      </div>
      <div class="col-md-5">
         <div class="select is-multiple" id="leftSekect">
            <select multiple size="8">
              <option v-bind:for="item2 in list2">{{item2}} </option>
            </select>
          </div>
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
		list1: [],

    /**
		 * @type {array},
		 * @description content of Second List
		 */
		list2: [],
		/**
		 * @type {string}
		 * @description Title of DualListBox
		 */
    title: String,
    
    },
    methods: {
      oneToRight: function (){
        var select = Document.getElementById('leftSelect');
        if(select != ""){
          this.list2.push(select);
          var del = this.list1.indexof(select);
          this.list1.splice(del,1);
        }

      },
      oneToLeft: function (){
        var select = Document.getElementById('RightSelect');
        if(select != ""){
          this.list1.push(select);
          var del = this.list2.indexof(select);
          this.list2.splice(del,1);
        }
      },
      allToRight: function (){
        for(var i = 0; i< this.list1.length; i++){
          this.list2.push(this.list1[i])
          var del = this.list1.indexof(this.list1[i])
          this.list1.splice(del,1)
        }
      },
      allToLeft: function (){
        for(var i = 0; i< this.list2.length; i++){
          this.list1.push(this.list2[i])
          var del = this.list2.indexof(this.list2[i])
          this.list2.splice(del,1)
        }
      }
     
    },
    data(){
      return {
        
      }
    }
   

		
}
</script>