import commonjs from "@rollup/plugin-commonjs"
import vue from "rollup-plugin-vue"
import resolve from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"
import {terser} from "rollup-plugin-terser"
import styles from "rollup-plugin-styles"
import copy from "rollup-plugin-copy"
import serve from "rollup-plugin-serve"
import livereload from "rollup-plugin-livereload"

import pkg from "./package.json"

const commonOutput = {
	exports: "named",
	assetFileNames: "assets/[name].[ext]",
	sourcemap: true
}

const config = {
	input: "src/index.js",
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
	plugins: [
		resolve({
			extensions: [".js", ".vue"]
		}),
		commonjs(),
		vue({
			css: true, // Dynamically inject css as a <style> tag
			compileTemplate: true // Explicitly convert template to render function
		}),
		styles({
			mode: ["extract", "out.css"]
			// mode: "extract"
		}),
		babel({
			babelHelpers: "runtime",
			plugins: ["@babel/plugin-transform-runtime"],
			extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".vue"]
		}),
		// terser(),
		copy({
			targets: [
				{src: "src/vendors/adminlte/*", dest: "dist"},
				{src: "src/adminlte-styles.css", dest: "dist"}
			]
		})
	]
}

if (process.env.NODE_ENV === "development") {
	config.plugins.push(livereload("dist"))
	config.plugins.push(serve({
		contentBase: "public",
		open: true,
		port: 8080
	}))
}

if (!process.env.DEV) config.external = Object.keys(pkg.dependencies || {})

export default config
