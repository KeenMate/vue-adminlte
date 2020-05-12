/*!
 * vue-adminlte v0.1.1 
 * (c) 2020 Benjamin Horne
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.VueAdminlte = factory());
}(this, (function () { 'use strict';

	var Card = require("./components/structure/Card");

	var CardTable = require("./components/structure/CardTable");

	var CardTools = require("./components/structure/CardTools");

	var Gallery = require("./components/structure/Gallery");

	var SummernoteEditor = require("./components/forms/SummernoteEditor");

	var UploadFile = require("./components/forms/UploadFile");

	require("AdminLTE/dist/css/adminlte.css");

	require("AdminLTE/dist/css/adminlte-condensed.css");

	require("AdminLTE/plugins/summernote/summernote-bs4.min.css");

	var Page = require("./components/structure/Page");

	var AdminSelect = require("./components/forms/AdminSelect");

	var AdminSwitch = require("./components/forms/AdminSwitch");

	var Checkbox = require("./components/forms/Checkbox");

	var CheckboxGroup = require("./components/forms/CheckboxGroup");

	var FormCheck = require("./components/forms/FormCheck");

	var FormCheckGroup = require("./components/forms/FormCheckGroup");

	var FormInput = require("./components/forms/FormInput");

	var FormLabel = require("./components/forms/FormLabel");

	var Radio = require("./components/forms/Radio");

	var RadioGroup = require("./components/forms/RadioGroup");

	var WithRoot = require("./components/helper-components/WithRoot");

	var Sidenav = require("./components/navigation/Sidenav");

	var SidenavLink = require("./components/navigation/SidenavLink");

	var AdminButton = require("./components/ui/AdminButton");

	var Badge = require("./components/ui/Badge");

	var version = "0.1.1";

	var install = function install(Vue) {
	  // forms
	  Vue.component(AdminSelect.name, AdminSelect);
	  Vue.component(AdminSwitch.name, AdminSwitch);
	  Vue.component(Checkbox.name, Checkbox);
	  Vue.component(CheckboxGroup.name, CheckboxGroup);
	  Vue.component(FormCheck.name, FormCheck);
	  Vue.component(FormCheckGroup.name, FormCheckGroup);
	  Vue.component(FormInput.name, FormInput);
	  Vue.component(FormLabel.name, FormLabel);
	  Vue.component(Radio.name, Radio);
	  Vue.component(RadioGroup.name, RadioGroup);
	  Vue.component(RadioGroup.name, RadioGroup);
	  Vue.component(SummernoteEditor.name, SummernoteEditor);
	  Vue.component(UploadFile.name, UploadFile); // helper-components

	  Vue.component(WithRoot.name, WithRoot); // navigation

	  Vue.component(Sidenav.name, Sidenav);
	  Vue.component(SidenavLink.name, SidenavLink); // structure

	  Vue.component(Card.name, Card);
	  Vue.component(CardTable.name, CardTable);
	  Vue.component(CardTools.name, CardTools);
	  Vue.component(Gallery.name, Gallery);
	  Vue.component(Page.name, Page); // ui

	  Vue.component(AdminButton.name, AdminButton);
	  Vue.component(Badge.name, Badge);
	};

	var plugin = {
	  install: install,
	  version: version
	};

	if (typeof window !== "undefined" && window.Vue) {
	  window.Vue.use(plugin);
	}

	return plugin;

})));
