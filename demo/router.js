import VueRouter from "vue-router"

import {Empty} from "../src/components"

import FormsPage from "./screens/FormsPage.vue"
import UiPage from "./screens/UiPage.vue"
import NotImplemented from "./screens/NotImplemented.vue"
import Validations from "./screens/ValidationsPage.vue"
import MainPage from "./screens/MainPage.vue"
import SummernoteEditorPage from "./screens/SummernoteEditorPage"
import ComponentsPage from "./screens/ComponentsPage"

const routes = [
	{
		path: "/",
		component: Empty,
		children: [
			{
				path: "/",
				name: "main",
				component: MainPage
			},
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
					},
					{
						path: "validations",
						name: "forms-validations",
						component: Validations,
						meta: {
							breadcrumb: "Validations"
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
			},
			{
				name: "summernote-editor",
				path: "summernote-editor",
				component: SummernoteEditorPage,
				meta: {
					breadcrumb: "Summernote editor"
				}
			},
			{
				path: "/components",
				name: "components",
				component: ComponentsPage
			}
		]
	},
	{
		path: "*",
		name: "not-implemented",
		component: NotImplemented
	}
]

export default new VueRouter({
	routes
})
