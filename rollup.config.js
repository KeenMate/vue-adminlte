import commonjs from "@rollup/plugin-commonjs" // Convert CommonJS modules to ES6
import vue from "rollup-plugin-vue" // Handle .vue SFC files
// import buble from "@rollup/plugin-buble" // Transpile/polyfill with reasonable browser support
import resolve from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"
import {terser} from "rollup-plugin-terser"
import styles from "rollup-plugin-styles"
import copy from "rollup-plugin-copy"

import pkg from "./package.json"

const commonOutput = {
	exports: "named",
	assetFileNames: "assets/[name].[ext]",
	sourcemap: true
}

export default {
	input: "src/index.js", // Path relative to package.json
	// output: {
	// 	name: "minimal-vue-package",
	// 	exports: "named"
	// },
	output: [
		{
			file: pkg.main,
			format: "cjs",
			...commonOutput
		},
		{
			file: pkg.module,
			format: "esm", // the preferred format
			...commonOutput
		},
		{
			file: pkg.unpkg,
			format: "iife",
			name: "VueAdminLte", // the global which can be used in a browser
			plugins: [terser()],
			...commonOutput
		}
	],
	external: [
		...Object.keys(pkg.dependencies || {})
	],
	plugins: [
		resolve(),
		commonjs(),
		vue({
			css: true, // Dynamically inject css as a <style> tag
			compileTemplate: true // Explicitly convert template to render function
		}),
		// postcss({
		// 	extract: path.resolve("dist/styles.css"),
		// 	minimize: true,
		// 	sourceMap: true,
		// 	plugins: [postcssImport(), postcssUrl()]
		// }),
		styles({
			mode: ["extract", "out.css"]
			// mode: "extract"
		}),
		babel({
			"babelHelpers": "inline",
			"extensions": [".js", ".jsx", ".es6", ".es", ".mjs", ".vue"]
		}),
		// buble(), // Transpile to ES5
		// terser(),
		copy({
			targets: [
				{src: "src/vendors/adminlte/*", dest: "dist"},
				{src: "src/adminlte-styles.css", dest: "dist"}
			]
		})
	]
}
