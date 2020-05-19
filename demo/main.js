import Vue from "vue"
import App from "~entry"
import "../src/plugin"
import VueRouter from "vue-router"
import router from "./router"


Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount("#app")
