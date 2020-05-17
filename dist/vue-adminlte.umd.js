/*!
 * vue-adminlte v0.1.3 
 * (c) 2020 Benjamin Horne
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.VueAdminlte = factory());
}(this, (function () { 'use strict';

	var Card = require("./components/structure/Card").default;

	var CardTable = require("./components/structure/CardTable").default;

	var CardTools = require("./components/structure/CardTools").default;

	var Gallery = require("./components/structure/Gallery").default;

	var SummernoteEditor = require("./components/forms/SummernoteEditor").default;

	var UploadFile = require("./components/forms/UploadFile").default;

	require("AdminLTE/dist/css/adminlte.css");

	require("AdminLTE/build/scss/AdminLTE-condensed.scss");

	require("AdminLTE/plugins/summernote/summernote-bs4.min.css");

	var Page = require("./components/application/Page").default;

	var PageHeader = require("./components/application/PageHeader").default;

	var TopNavigation = require("./components/navigation/TopNavigation").default;

	var TopNavLink = require("./components/navigation/TopNavLink").default;

	var PageBreadcrumbs = require("./components/navigation/PageBreadcrumbs").default;

	var LteSelect = require("./components/forms/LteSelect").default;

	var LteSwitch = require("./components/forms/LteSwitch").default;

	var Checkbox = require("./components/forms/Checkbox").default;

	var CheckboxGroup = require("./components/forms/CheckboxGroup").default;

	var FormCheck = require("./components/forms/FormCheck").default;

	var FormCheckGroup = require("./components/forms/FormCheckGroup").default;

	var FormInput = require("./components/forms/FormInput").default;

	var FormLabel = require("./components/forms/FormLabel").default;

	var Radio = require("./components/forms/Radio").default;

	var RadioGroup = require("./components/forms/RadioGroup").default;

	var WithRoot = require("./components/helper-components/WithRoot").default;

	var Sidenav = require("./components/navigation/Sidenav").default;

	var SidenavLink = require("./components/navigation/SidenavLink").default;

	var AdminButton = require("./components/ui/AdminButton").default;

	var Badge = require("./components/ui/Badge").default;

	var version = "0.1.3"; // This is some change to test docs workflow include path

	var install = function install(Vue) {
	  // application
	  Vue.component(Page.name, Page);
	  Vue.component(PageHeader.name, PageHeader);
	  Vue.component(TopNavigation.name, TopNavigation); // forms

	  Vue.component(LteSelect.name, LteSelect);
	  Vue.component(LteSwitch.name, LteSwitch);
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
	  Vue.component(SidenavLink.name, SidenavLink);
	  Vue.component(TopNavLink.name, TopNavLink);
	  Vue.component(PageBreadcrumbs.name, PageBreadcrumbs); // structure

	  Vue.component(Card.name, Card);
	  Vue.component(CardTable.name, CardTable);
	  Vue.component(CardTools.name, CardTools);
	  Vue.component(Gallery.name, Gallery); // ui

	  Vue.component(AdminButton.name, AdminButton);
	  Vue.component(Badge.name, Badge);
	};

	var plugin = {
	  install: install,
	  version: version
	};
	if (typeof window !== "undefined" && window.Vue) window.Vue.use(plugin);

	return plugin;

})));
