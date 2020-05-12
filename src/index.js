import Card from "./components/structure/Card"
import CardTable from "./components/structure/CardTable"
import CardTools from "./components/structure/CardTools"
import Gallery from "./components/structure/Gallery"
import SummernoteEditor from "./components/forms/SummernoteEditor"
import UploadFile from "./components/forms/UploadFile"

import "AdminLTE/dist/css/adminlte.css"
import "AdminLTE/dist/css/adminlte-condensed.css"
import "AdminLTE/plugins/summernote/summernote-bs4.min.css"

const version = "__VERSION__"

const install = Vue => {
	/*
	 * NOTE:
	 *   if you need to extend Vue contstructor, you can extend it in here.
	 */

	Vue.component(Card.name, Card)
	Vue.component(CardTable.name, CardTable)
	Vue.component(CardTools.name, CardTools)
	Vue.component(Gallery.name, Gallery)
	Vue.component(SummernoteEditor.name, SummernoteEditor)
	Vue.component(UploadFile.name, UploadFile)
}

const plugin = {
	install,
	version
}

export default plugin

if (typeof window !== "undefined" && window.Vue) {
	window.Vue.use(plugin)
}
