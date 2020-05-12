const path = require("path")

module.exports = {
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
