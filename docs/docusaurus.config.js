/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = async function () {
  const { nightOwlLight, nightOwl } = (await import('prism-react-renderer'))
    .themes;

  return {
    title: 'Transloco Angular i18n',
    tagline: 'The internationalization (i18n) library for Angular',
    baseUrl: '/transloco/',
    url: 'https://jsverse.github.io',
    favicon: 'img/favicon.ico',
    organizationName: 'jsverse',
    projectName: 'transloco',
    trailingSlash: false,
    themeConfig: {
      image: 'img/large-logo.png',
      metadata: [
        {
          name: 'google-site-verification',
          content: 'OVdCorlkGdaEo3iAodtFprKQ458Nxig5qLBfJpxlHsk',
        },
      ],
      algolia: {
        appId: 'TJQR54QJD0',
        apiKey: 'b1b00a6233a5eaf6a679cc57ad00eaae',
        indexName: 'jsverseio',
      },
      navbar: {
        title: 'Transloco',
        logo: {
          alt: 'Transloco',
          src: 'img/logo.png',
          srcDark: 'img/logo-white.png',
        },
        items: [
          {
            to: 'docs/getting-started/installation',
            activeBasePath: 'docs',
            label: 'Docs',
            position: 'left',
            className: 'first-nav-element',
          },
          // {
          //   to: 'videoGuides',
          //   activeBasePath: 'videoGuides',
          //   label: 'Video Guides',
          //   position: 'left',
          // },
          {
            to: 'live-app',
            activeBasePath: 'live-app',
            label: 'Live App',
            position: 'left',
          },
          {
            href: 'https://codesandbox.io/s/jsverse-transloco-kn52hs',
            label: 'Playground',
            position: 'left',
            className: 'header-playground-link',
          },
          {
            href: 'https://github.com/sponsors/jsverse',
            label: 'Sponsor',
            position: 'right',
            className: 'header-icon-link header-sponsor-link',
          },
          {
            href: 'https://github.com/jsverse/transloco/',
            label: ' ',
            position: 'right',
            className: 'header-icon-link header-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: 'docs/getting-started/installation',
              },
              {
                label: 'Translation',
                to: 'docs/translation-in-the-template',
              },
              {
                label: 'FAQ',
                to: 'docs/faq',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/jsverse/transloco/discussions',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/transloco',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/jsverse/transloco/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/shaharkazaz',
              },
            ],
          },
        ],
        copyright: `Copyright © 2019-${new Date().getFullYear()} Transloco, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: nightOwlLight,
        darkTheme: nightOwl,
      },
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl: 'https://github.com/jsverse/transloco/edit/master/docs',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
    plugins: [
      [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [
            {
              from: '/docs/inline-loaders',
              to: '/docs/lazy-load/inline-loaders',
            },
            {
              from: '/docs/scope-configuration',
              to: '/docs/lazy-load/scope-configuration',
            },
            {
              from: '/docs/installation',
              to: '/docs/getting-started/installation',
            },
            {
              from: '/docs/config-options',
              to: '/docs/getting-started/config-options',
            },
            {
              from: '/docs/plugins/preload',
              to: '/docs/plugins/preload-langs',
            },
            {
              from: '/docs/tools/comments/optimize',
              to: '/docs/tools/optimize',
            },
            {
              from: '/docs/schematics/add',
              to: '/docs/schematics/ng-add',
            },
            {
              from: '/docs/transpiler/additional-functionality',
              to: '/docs/additional-functionality',
            },
            {
              from: '/docs/plugins/persist',
              to: '/docs/plugins/persist-translations',
            },
          ],
        },
      ],
    ],
  };
};
