module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		"plugin:vue/essential",
		"@vue/standard"
	],
	// parserOptions: {
	// 	parser: "babel-eslint",
	// 	sourceType: "module"
	// },
	overrides: [
		{
			files: "*",
			excludedFiles: ["node_modules/**/*", "src/vendors/**/*"]
		}
	],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		quotes: ["error", "double"],
		indent: ["error", "tab"],
		"no-tabs": "off",
		"space-before-function-paren": ["warn", "never"],
		"object-curly-spacing": ["warn", "never"],
		curly: ["warn", "multi"],
		"no-mixed-operators": "off",
		"operator-linebreak": ["error", "before"]
	}
}
