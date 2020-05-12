module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		"plugin:vue/essential",
		"@vue/standard"
	],
	parserOptions: {
		parser: "babel-eslint"
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"quotes": ["error", "double"],
		"indent": ["error", "tab"],
		"no-tabs": ["error", {allowIndentationTabs: true}],
		"space-before-function-paren": ["warn", "never"],
		"object-curly-spacing": ["warn", "never"],
		"curly": ["warn", "multi"]
	}
}
