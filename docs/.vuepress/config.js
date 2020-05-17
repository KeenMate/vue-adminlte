

module.exports = {
  title: 'AdminLTE in VueJS',
  description:
		"VueJS implementation of AdminLTE condensed template",	
  base: '/vue-adminlte/',
  plugins: [
    require('./plugin.js')
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VueAdminlte',
      description: 'VueAdminlte for Vue.js'
    }
  },
  themeConfig: {
    repo: 'keenmate/vue-adminlte',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [{
          text: 'Release Notes',
          link: 'https://github.com//vue-adminlte/releases'
        }],
        sidebar: [
          '/installation.md',
          '/started.md',
        ]
      }
    }
  }
}
