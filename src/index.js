const Card = require("./components/structure/Card").default
const CardTable = require("./components/structure/CardTable").default
const CardTools = require("./components/structure/CardTools").default
const Gallery = require("./components/structure/Gallery").default
const SummernoteEditor = require("./components/forms/SummernoteEditor").default
const UploadFile = require("./components/forms/UploadFile").default

require("AdminLTE/dist/css/adminlte.css")
require("AdminLTE/build/scss/AdminLTE-condensed.scss")
require("AdminLTE/plugins/summernote/summernote-bs4.min.css")
const Page = require("./components/application/Page").default
const PageHeader = require("./components/application/PageHeader").default
const TopNavigation = require("./components/navigation/TopNavigation").default
const TopNavLink = require("./components/navigation/TopNavLink").default
const PageBreadcrumbs = require("./components/navigation/PageBreadcrumbs").default
const LteSelect = require("./components/forms/LteSelect").default
const LteSwitch = require("./components/forms/LteSwitch").default
const Checkbox = require("./components/forms/Checkbox").default
const CheckboxGroup = require("./components/forms/CheckboxGroup").default
const FormCheck = require("./components/forms/FormCheck").default
const FormCheckGroup = require("./components/forms/FormCheckGroup").default
const FormInput = require("./components/forms/FormInput").default
const FormLabel = require("./components/forms/FormLabel").default
const Radio = require("./components/forms/Radio").default
const RadioGroup = require("./components/forms/RadioGroup").default
const WithRoot = require("./components/helper-components/WithRoot").default
const Sidenav = require("./components/navigation/Sidenav").default
const SidenavLink = require("./components/navigation/SidenavLink").default
const AdminButton = require("./components/ui/AdminButton").default
const Badge = require("./components/ui/Badge").default

const version = "__VERSION__"

const install = Vue => {
	// application
	Vue.component(Page.name, Page)
	Vue.component(PageHeader.name, PageHeader)
	Vue.component(TopNavigation.name, TopNavigation)

	// forms
	Vue.component(LteSelect.name, LteSelect)
	Vue.component(LteSwitch.name, LteSwitch)
	Vue.component(Checkbox.name, Checkbox)
	Vue.component(CheckboxGroup.name, CheckboxGroup)
	Vue.component(FormCheck.name, FormCheck)
	Vue.component(FormCheckGroup.name, FormCheckGroup)
	Vue.component(FormInput.name, FormInput)
	Vue.component(FormLabel.name, FormLabel)
	Vue.component(Radio.name, Radio)
	Vue.component(RadioGroup.name, RadioGroup)
	Vue.component(RadioGroup.name, RadioGroup)
	Vue.component(SummernoteEditor.name, SummernoteEditor)
	Vue.component(UploadFile.name, UploadFile)

	// helper-components
	Vue.component(WithRoot.name, WithRoot)

	// navigation
	Vue.component(Sidenav.name, Sidenav)
	Vue.component(SidenavLink.name, SidenavLink)
	Vue.component(TopNavLink.name, TopNavLink)
	Vue.component(PageBreadcrumbs.name, PageBreadcrumbs)

	// structure
	Vue.component(Card.name, Card)
	Vue.component(CardTable.name, CardTable)
	Vue.component(CardTools.name, CardTools)
	Vue.component(Gallery.name, Gallery)

	// ui
	Vue.component(AdminButton.name, AdminButton)
	Vue.component(Badge.name, Badge)
}

const plugin = {
	install,
	version
}

export default plugin

if (typeof window !== "undefined" && window.Vue)
	window.Vue.use(plugin)
