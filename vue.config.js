const path = require("path")

module.exports = {
  configureWebpack: {
    resolve: {
      AdminLTE: path.join(__dirname, "src/vendors/adminlte")
    }
  }
}
