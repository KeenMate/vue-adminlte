<template>
	<div class="form-group">
		<label>Multiple</label>
		<div
			class="bootstrap-duallistbox-container row moveonselect moveondoubleclick"
		>
			<div class="box1 col-md-6">
				<label
					for="bootstrap-duallistbox-nonselected-list_"
					style="display: none;"
				></label>
				<div class="btn-group buttons">
					<lte-button
						type="button"
						class="btn moveall btn-outline-secondary"
						title="Move all"
						@click.native="allToRight"
						>&gt;&gt;</lte-button
					>
				</div>
				<select
					multiple="multiple"
					id="leftSelect"
					name="_helper1"
					style="height: 102px;"
					class="form-control"
					@change="oneToRight"
				>
					<option v-for="leftItem in leftList" :key="leftItem">
						{{ leftItem }}
					</option>
				</select>
			</div>
			<div class="box2 col-md-6">
				<label
					for="bootstrap-duallistbox-selected-list_"
					style="display: none;"
				></label>
				<div class="btn-group buttons">
					<lte-button
						type="button"
						class="btn removeall btn-outline-secondary"
						title="Remove all"
						@click.native="allToLeft"
						>&lt;&lt;</lte-button
					>
				</div>
				<select
					multiple="multiple"
					id="rightSelect"
					@change="oneToLeft"
					name="_helper2"
					style="height: 102px;"
					class="form-control"
				>
					<option v-for="rightItem in rightList" :key="rightItem">
						{{ rightItem }}
					</option>
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
		 * @description content of left List
		 */
		leftList: Array,

		/**
		 * @type {array},
		 * @description content of right List
		 */
		rightList: Array,
		/**
		 * @type {string}
		 * @description Title of DualListBox
		 */
		title: String,
	},
	methods: {
		oneToRight: function () {
			var select = document.getElementById("leftSelect").value
			if (select != "" || select != null) {
				this.rightList.push(select)
				var del
				this.leftList.forEach((el, index) => {
					if (el === select) del = index
				})
				this.leftList.splice(del, 1)
			}
			document.getElementById("leftSelect").value = ""
		},
		oneToLeft: function () {
			var select = document.getElementById("rightSelect").value

			if (select != "" || select != null) {
				this.leftList.push(select)
				var del
				this.rightList.forEach((el, index) => {
					if (el === select) del = index
				})
				this.rightList.splice(del, 1)
			}
			document.getElementById("rightSelect").value = ""
		},
		allToRight: function () {
			this.leftList.forEach((el, i) => {
				this.rightList.push(el)
			})
			this.leftList.splice(0, this.leftList.length)
		},
		allToLeft: function () {
			this.rightList.forEach((el, i) => {
				this.leftList.push(el)
			})
			this.rightList.splice(0, this.rightList.length)
		},
		sortArrays: function () {
			this.leftList.sort(compare)
			this.rightList.sort(compare)
		},
		compare: function (a, b) {
			if (a.name < b.name) return -1
			if (a.name > b.name) return 1
			return 0
		},
	},
	data() {
		return {
			rightSelectValue: "",
			leftSelectValue: "",
		}
	},
}
</script>

<style src="../../vendors/adminlte/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css">
</style>