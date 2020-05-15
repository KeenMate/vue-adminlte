import VueRouter from "vue-router"

import FormsPage from "./FormsPage"
import Empty from "../src/components/Empty"
import UiPage from "./UiPage"

const routes = [
	{
		path: "/",
		component: Empty,
		children: [
			{
				path: "forms",
				name: "forms",
				component: Empty,
				meta: {
					breadcrumb: "Forms"
				},
				children: [
					{
						path: "general",
						name: "forms-general",
						component: FormsPage,
						meta: {
							breadcrumb: "General"
						}
					}
				]
			},
			{
				path: "ui",
				name: "ui",
				component: Empty,
				meta: {
					breadcrumb: "UI"
				},
				children: [
					{
						path: "general",
						name: "ui-general",
						component: UiPage,
						meta: {
							breadcrumb: "General"
						}
					}
				]
			}
		]
	}
]

export default new VueRouter({
	routes
})
