// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  favicon: 'img/favicon.ico',
  title: 'Voidline Developers',

  // Set the production url of your site here
  url: 'https://dev.voidline.rocks/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'voidline', // Usually your GitHub org/user name.
  projectName: 'voidline_devs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: "/",
					sidebarPath: require.resolve('./sidebars.js'),
					// editUrl: 'https://github.com/AMD-NICK/docusaurustest/tree/main/',
					// showLastUpdateTime: true,
				},

				blog: {
					// Remove this to remove the "edit this page" links.
					// editUrl: 'https://github.com/AMD-NICK/docusaurustest/tree/main/',
				},

				theme: {
					customCss: [
						// not my styles. Taken from here:
						// https://github.com/vendure-ecommerce/vendure/blob/cc4826dfb7c1a2f4e6ed8daa13eb017090d8bd9a/docs/src/css/custom.css
						require.resolve('./src/css/custom.css'),
						require.resolve('./src/css/layout.css'),
						require.resolve('./src/css/overrides.css'),
						// require.resolve('./src/css/code-blocks.css'),
					],
				},
			}),
		],
	],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
          defaultMode: 'dark',
          disableSwitch: false,
          respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Voidline Developers',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/voidline.png',
        // },
        items: [
          {
            href: 'https://github.com/gefake/voidline_devs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Voidline Social',
            items: [
              {
                label: 'Developers Discord',
                href: 'https://discord.gg/5RAjyd8HrH',
              },
              {
                label: 'Community Discord',
                href: 'https://discord.com/servers/voidline-634833167424946188',
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Voidline`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
