// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Weather',
  tagline: 'Weather is cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://weather.sanqro.me/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  organizationName: 'Nicola3341246, CevapiMitKajmak, RelxOff, sanqro', 
  projectName: 'weather',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ch',
    locales: ['ch'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Weather',
        logo: {
          alt: 'Weather App',
          src: 'img/logo.svg',
        },  
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: 'Weather App',
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
                label: 'Weather App',
                to: '/docs/doc',
              },
            ],
          },
          {
            title: 'Docusaurus community',
            items: [
              {
                label: 'Docusaurus Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Docusaurus Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Docusaurus Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub Weather App',
                href: 'https://github.com/sanqro/weather',
              },
              {
                label: 'Docusaurus GitHub',
                href: 'https://github.com/facebook/docusaurus',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Weather, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
