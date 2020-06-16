import Vue from "vue"
import App from "~entry"
import VueRouter from "vue-router"
import {Plugin as VueFragment} from "vue-fragment"
import Vuelidate from "vuelidate"
import VuelidateErrorExtractor, {templates} from "vuelidate-error-extractor"
import "bootstrap"
// import "bootstrap/js/dist/modal"
import "@popperjs/core"

import VueAdminLte from "../src"
import router from "./router"
import "../src/vue-adminlte-setup"

Vue.use(VueAdminLte)
Vue.use(VueRouter)
Vue.use(VueFragment)
Vue.use(Vuelidate)
Vue.use(VuelidateErrorExtractor)
Vue.component("FormMessages", templates.multiErrorExtractor.foundation6)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount("#app")
