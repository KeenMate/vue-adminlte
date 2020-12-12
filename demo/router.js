import VueRouter from "vue-router"

import {Empty} from "../src/components"

import FormsPage from "./screens/forms/FormsPage.vue"
import UiPage from "./screens/UiPage.vue"
import NotImplemented from "./screens/NotImplemented.vue"
import Validations from "./screens/ValidationsPage.vue"
import MainPage from "./screens/MainPage.vue"
import SummernoteEditorPage from "./screens/SummernoteEditorPage.vue"
import ComponentsPage from "./screens/ComponentsPage.vue"
import AdvancedElements from "./screens/forms/AdvancedElements.vue"
import EmptyPage from "./screens/EmptyPage"

const routes = [
	{
		path: "/",
		name: "parent",
		component: Empty,
		children: [
			{
				path: "/",
				name: "main",
				component: MainPage
			},
			{
				path: "with-param/:param/something",
				name: "with-param",
				meta: {
					breadcrumb: "Empty page with param"
				},
				component: EmptyPage,
				children: [
					{
						path: "nested",
						name: "nested",
						component: Empty,
						meta: {
							breadcrumb: "Nested"
						},
						children: [
							{
								path: "nested",
								name: "nested2",
								component: Empty,
								meta: {
									breadcrumb: "Nested 2"
								}
							}
						]
					}
				]
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
					},
					{
						path: "advanced-elements",
						name: "advanced-elements",
						component: AdvancedElements,
						meta: {
							breadcrumb: "Advanced Elements"
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
					}]
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
