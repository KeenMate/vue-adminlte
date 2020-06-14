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

export function successToast(title, body, config = {}) {
	defaultToast({
		title,
		body,
		class: "bg-success",
		...config
	})
}

export function infoToast(title, body, config = {}) {
	defaultToast({
		title,
		body,
		class: "bg-info",
		...config
	})
}

export function warningToast(title, body, config = {}) {
	defaultToast({
		title,
		body,
		class: "bg-warning",
		...config
	})
}

export function dangerToast(title, body, config = {}) {
	defaultToast({
		title,
		body,
		class: "bg-danger",
		...config
	})
}

export function maroonToast(title, body, config = {}) {
	defaultToast({
		title,
		body,
		class: "bg-maroon",
		...config
	})
}
