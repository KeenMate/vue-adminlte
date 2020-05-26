const path = require("path")

const postcss = require("rollup-plugin-postcss")
const alias = require("@rollup/plugin-alias")
const copy = require("rollup-plugin-copy")

module.exports = {
	publicPath: process.env.PUBLIC_PATH || "/",
	pluginOptions: {
		p11n: {
			configureRollup: {
				external: ["jquery"],
				globals: {
					jquery: "$"
				},
				plugins: [
					alias({
						entries: {
							AdminLTE: path.resolve(__dirname, "src/vendors/adminlte")
						}
					}),
					postcss({
						extensions: [".css", ".scss", ".sass", ".less"]
					}),
					copy({
						targets: [
							{src: "src/vendors/adminlte", dest: "dist/adminlte"}
						]
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
