const { version } = require('../../package.json')

const autometa_options = {
	author: {
		name: "Ondrej Valenta"
	},
	site: {
		name: "AdminLTE in VueJS",
		description:
			"VueJS implementation of AdminLTE condensed template"
	},
	canonical_base: "https://keenmate.github.io/keenmate/",
	tags: ["VueJS", "AdminLTE", "desktop", "admin", "template"]
};

module.exports = (/*options, ctx*/) => ({
  async enhanceAppFiles () {
    const code = `export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      $version () {
        return '${version}'
      } 
    }
  })
}`
    return [{
      name: 'vuepress-plugin-vue-cli-plugin-p11n',
      content: code
    },
    ['@vuepress/back-to-top', true],
    ["autometa", autometa_options],
    [
			"sitemap",
			{
				hostname: "https://keenmate.github.io/vue-adminlte"
			}
		]
  ]
  }
})
