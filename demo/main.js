import Vue from "vue"
import App from "~entry"
import "../src/plugin"
import VueRouter from "vue-router"
import router from "./router"
import Vuelidate from "vuelidate"
import VuelidateErrorExtractor, {templates} from "vuelidate-error-extractor"

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(VuelidateErrorExtractor)
Vue.component("FormMessages", templates.multiErrorExtractor.foundation6)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount("#app")
