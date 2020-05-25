/**
 * @description Props that are common for form inputs that have ability to show valid/invalid state
 * and that can harness informations from vuelidate's field
 */
export default {
	/**
	 * @type {Boolean}
	 * @description Sets state of this form input to 'invalid'
	 * Overrides validator's validity
	 */
	isInvalid: Boolean,

	/**
	 * @type {String}
	 * @description Message to be displayed when form input is in invalid state
	 */
	invalidMsg: String,

	/**
	 * @type {Boolean}
	 * @description Sets state of this form input to 'valid'
	 * Overrides validator's validity
	 */
	isValid: Boolean,

	/**
	 * @type {String}
	 * @description Message to be displayed when form input is in valid state
	 */
	validMsg: String,

	/**
	 * @type {Object}
	 * @description object (e.g $v.field1) containing vuelidate's validations.
	 * This can be overriden by isInvalid and isValid props
	 */
	validator: Object
}
