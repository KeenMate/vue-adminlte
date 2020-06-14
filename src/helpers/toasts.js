import $ from "jquery"

export default function defaultToast(config) {
	if (!$.fn.Toasts) {
		console.warn("Toasts are not imported (probably missing import of adminlte.js")
	}

	$(document).Toasts("create", {
		autohide: true,
		delay: 750,
		...config
	})
}

export function successToast(title, body) {
	defaultToast({
		title,
		body,
		class: "bg-success"
	})
}

export function infoToast(title, body) {
	defaultToast({
		title,
		body,
		class: "bg-info"
	})
}

export function warningToast(title, body) {
	defaultToast({
		title,
		body,
		class: "bg-warning"
	})
}

export function dangerToast(title, body) {
	defaultToast({
		title,
		body,
		class: "bg-danger"
	})
}

export function maroonToast(title, body) {
	defaultToast({
		title,
		body,
		class: "bg-maroon"
	})
}
