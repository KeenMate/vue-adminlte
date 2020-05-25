import commonjs from "@rollup/plugin-commonjs"
import vue from "rollup-plugin-vue"
import resolve from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"
import {terser} from "rollup-plugin-terser"
import styles from "rollup-plugin-styles"
import replace from "rollup-plugin-replace"
import livereload from "rollup-plugin-livereload"
import serve from "rollup-plugin-serve"
import copy from "rollup-plugin-copy"
import html from "rollup-plugin-generate-html-template"
// import html from "@rollup/plugin-html"
import alias from "@rollup/plugin-alias"
import pkg from "./package.json"

const config = {
	input: "demo/main.js", // Path relative to package.json
	output: {
		name: "VueAdminLteDemo",
		file: "dist/demo/app.js",
		// exports: "named",
		format: "iife"
	},
	plugins: [
		alias({
			entries: [
				{find: "~entry", replacement: process.env.ENTRY || "./components/Demo.vue"}
			]
		}),
		replace({
			"process.env.NODE_ENV": process.env.DEV && JSON.stringify("development") || JSON.stringify("production"),
			"process.env.BUILD": process.env.DEV && JSON.stringify("web")
		}),
		resolve({
			extensions: [".js", ".vue"]
		}),
		commonjs(),
		styles({
			mode: ["extract", "out.css"]
		}),
		vue({
			css: true, // Dynamically inject css as a <style> tag
			compileTemplate: true // Explicitly convert template to render function
		}),
		babel({
			babelHelpers: "runtime",
			plugins: ["@babel/plugin-transform-runtime"],
			extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".vue"]
		}),
		!process.env.DEV && terser(),
		copy({
			targets: [
				{src: "src/vendors/adminlte/*", dest: "dist"},
				{src: "src/adminlte-styles.css", dest: "dist"}
			]
		})
	]
}

if (process.env.DEV) {
	config.plugins.push(html({
		template: "demo/index.html",
		target: "dist/demo/index.html",
		replaceVars: {
			__title__: pkg.name
		}
	}))
	// config.plugins.push(html({
	// 	title: pkg.name,
	// 	template: "demo/index.html"
	// }))
	config.plugins.push(livereload({
		watch: ["dist", "src", "demo"]
	}))
	config.plugins.push(serve({
		contentBase: "dist/demo",
		open: true,
		port: 8080
	}))
}

export default config
