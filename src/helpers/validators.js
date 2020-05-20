/* eslint-disable no-useless-escape */

export const specialCharRegexp = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

/**
 * @description Validator that checks count of provided 'char' param
 * @param char {String | RegExp} if RegExp is provided it must contain 'global flag'
 * @param minCount
 * @return {*}
 */
export const charMinCount = (char, minCount) => {
	if (char instanceof RegExp)
		return val => {
			const matches = []
			let currentMatch
			while ((currentMatch = char.exec(val)) !== null)
				matches.push(currentMatch)

			return matches.length >= minCount
		}

	return val => val
		.split("")
		.filter(x => x === char)
		.join().length >= minCount
}

/**
 * @description Validator that tests against provided regexp
 * @param regexp {RegExp}
 * @return {function(*=): *}
 */
export const masked = (regexp) => val => regexp.test(val)

/**
 * @param array {Array} Array of (preferably) primitive values that the value is checked against
 * @return {function(*=): boolean}
 */
export const oneOf = (array) => val => array.includes(val)

/**
 * @description Validator that checks whether all elements of 'array' are within value
 * @param array {Array} Array of (preferably) primitive values that the value is checked against
 * @return {function(*): boolean}
 */
export const contains = (array) => val => (val instanceof Array && (array.map(v => val.includes(v)).find(x => !x) === undefined))

/**
 * Validator that decides whether to return given 'predicate' or simple function always returning true
 * @param usePredicate {Boolean}
 * @param predicate {function(*): boolean}
 * @return {Boolean | function(*): boolean}
 */
export const validateIf = (usePredicate, predicate) => usePredicate
	? predicate
	: true
