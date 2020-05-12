const path = require("path")
const webpack = require("webpack")

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
	      AdminLTE: path.resolve(__dirname, "src/vendors/adminlte"),
	      jquery: path.resolve(__dirname, "src/vendors/adminlte/plugins/jquery")
      }
    },
	  externals: {
    	jquery: "$"
	  }
  }
}
