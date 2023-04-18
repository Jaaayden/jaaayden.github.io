// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jayden Tseng',
  // tagline: '立志成才，报国裕民',
  tagline: '为天地立心,为生民立命,为往圣继学,为万世开太平',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zengxud.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jaaayden', // Usually your GitHub org/user name.
  projectName: 'Jaaayden.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-DL9GDTKSZE',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Jaaayden/Jaaayden.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Jaaayden/Jaaayden.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // plugins: [
  //   'plugin-image-zoom',
  //   [
  //     require.resolve("@easyops-cn/docusaurus-search-local"),
  //     {
  //       language: ["en", "zh"],
  //     },
  //   ],
  // ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'support_us',
        content:
          '<a target="_blank" rel="noopener noreferrer" href="https://zengxud.top/docs/TechLife/2023-04-05-JaydenGPT">JaydenGPT</a> and <a target="_blank" rel="noopener noreferrer" href="https://zengxud.top/docs/TechLife/2023-04-06-RSSHub">self-host RSSHub</a> is avaliable.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      // Replace with your project's social card
      image: 'img/favicon.png',
      navbar: {
        title: 'Jayden',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'right'},
          {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'right', label: 'Docs',},
          {
            position: 'right',
            label: 'Tools',
            items:[
              {label: 'JaydenGPT', href: 'https://chat.zengxud.top/',},
              {label: 'RSSHub', href: 'https://rss.zengxud.top/',},
              {label: 'PUc', href: 'https://zengxud.top/Propagation-of-Uncertainty-Calculator/',},
            ]
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Docs', to: '/docs/intro',},
              {label: 'Blog', to: '/blog',},
            ],
          },
          {
            title: 'Tools',
            items: [
              {label: 'JaydenGPT', href: 'https://chat.zengxud.top/',},
              {label: 'RSSHub', href: 'https://rss.zengxud.top/',},
              {label: 'PUc', href: 'https://zengxud.top/Propagation-of-Uncertainty-Calculator/',},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'GitHub', href: 'https://github.com/Jaaayden',},
              {label: 'RSS', href: 'https://zengxud.top/blog/rss.xml',},
              {label: 'Friends', to: '/friends',},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jayden Tseng.  Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;