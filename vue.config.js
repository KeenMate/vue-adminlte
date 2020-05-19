const path = require("path")

module.exports = {
	publicPath: process.env.NODE_ENV === "demo"
		? "/vue-adminlte/demo/"
		: "/",
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
