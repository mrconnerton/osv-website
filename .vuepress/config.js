const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  dest: 'public',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'OpenLung',
      description: 'Ventilator docuemntion for OpenLung '
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    editLinks: false,
    docsDir: '',
    /*algolia: ctx.isProd ? ({
      apiKey: '',
      indexName: 'vuepress'
    }) : null,*/
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        /*editLinkText: 'Edit this page on GitHub',*/
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/docs/': getDocsSidebar('Operating Manual', 'Appendix'),
          '/makers/': getMakersSidebar('Getting Started'),
          '/resources/': getResourcesSidebar('Resources'),
        }
      },
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['flowchart']
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
  ]
})


function getDocsSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'ventilator-overview',
        'breath-types',
        'ventilation-modes',
        'using-the-controls-and-indicators',
        'controls',
        'displays-and-indicators',
        'monitored-data',
        'ventilator-alarms',
        'extended-features',
        'ventilator-checkout-tests',
        'operating-procedure',
        'cleaning-disinfecting-and-sterilizing',
        'power-and-battery-operation',
        'troubleshooting',
        'mr-conditional-system',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'ventilator-specifications',
      ]
    }
  ]
}

function getMakersSidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
      ]
    },
  ]
}

function getResourcesSidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
      ]
    },
  ]
}
