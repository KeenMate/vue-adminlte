export default {
	/**
	 * @type {string[] | string | object}
	 * @description Styles applied on `label` element
	 */
	labelStyles: {
		type: [Array, String, Object],
		default: "",
	},
	/**
	 * @type {string[] | string | object}
	 * @description Styles applied on `input` element
	 */
	inputStyles: {
		type: [Array, String, Object],
		default: () => "",
	},

	/**
	 * @type {string[] | string | object}
	 * @description Styles for horizontally positioned form input
	 */
	horizontalStyles: {
		type: [Array, String, Object],
		default: () => "",
	},
	isHorizontal: Boolean
}