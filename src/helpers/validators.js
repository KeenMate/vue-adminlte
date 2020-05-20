/* eslint-disable no-useless-escape */

export const specialCharRegexp = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

export const charCount = (char, minCount) =>
	char instanceof RegExp
		? val => char.test(val)
		: val => val
			.split("")
			.filter(x => x === char)
			.join().length >= minCount
