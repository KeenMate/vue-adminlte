// import "AdminLTE/dist/css/adminlte.css"
// import "AdminLTE/build/scss/AdminLTE-condensed.scss"
// import "AdminLTE/plugins/summernote/summernote-bs4.min.css"
// import "./vendors/adminlte/dist/css/adminlte.css"
// import "./vendors/adminlte/build/scss/AdminLTE-condensed.scss"

import VMarkdownEditor from "v-markdown-editor"

import * as components from "./components"

const version = "__VERSION__"

// This is some change to test docs workflow include path

const install = Vue => {
	Vue.use(VMarkdownEditor)

	Object
		.keys(components)
		.forEach(name => {
			Vue.component(name, components[name])
		})
}

const plugin = {
	install,
	version
}

export default plugin

if (typeof window !== "undefined" && window.Vue)
	window.Vue.use(plugin)
