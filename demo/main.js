import Vue from "vue"
import App from "./Demo"
import plugin from "../src/index"
import VueRouter from "vue-router"
import router from "./router"

Vue.use(plugin)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount("#app")
