// import "AdminLTE/dist/css/adminlte.css"
// import "AdminLTE/build/scss/AdminLTE-condensed.scss"
// import "./vendors/adminlte/dist/css/adminlte.css"
// import "./vendors/adminlte/build/scss/AdminLTE-condensed.scss"

import * as components from "./components"

const version = "__VERSION__"

const install = Vue => {
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
