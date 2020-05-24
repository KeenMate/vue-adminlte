const path = require("path")

const rollupPostcss = require("rollup-plugin-postcss")
// const rollupNodeResolve = require("@rollup/plugin-node-resolve").default
const rollupAlias = require("@rollup/plugin-alias")

module.exports = {
	publicPath: process.env.NODE_ENV === "demo"
		? "/vue-adminlte/demo/"
		: "/",
	pluginOptions: {
		p11n: {
			configureRollup: {
				external: ["jquery"],
				globals: {
					jquery: "$"
				},
				plugins: [
					// rollupNodeResolve({
					// 	customResolveOptions: {
					// 		moduleDirectory: "node_modules"
					// 	}
					// }),
					rollupAlias({
						entries: {
							AdminLTE: path.resolve(__dirname, "src/vendors/adminlte")
						}
					}),
					rollupPostcss({
						extensions: [".css", ".scss", ".sass", ".less"]
					})
				]
			}
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				AdminLTE: path.resolve(__dirname, "src/vendors/adminlte")
			}
		},
		externals: {
			jquery: "$"
		}
	}
}
