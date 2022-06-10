// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Embrace the Metaverse',
  tagline: 'Join our community',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'dSphere',
          src: 'img/dSphere-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Quickstart',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'SDK',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'API Reference',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'FAQ',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Glossary',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Whats new',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Platform',
            items: [
              {
                label: 'NFT Marketplace',
                to: '/docs/intro',
              },
              {
                label: 'Pricing',
                to: '/docs/intro',
              },
              {
                label: 'Cinderella',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Solutions',
            items: [
              {
                label: 'Game Publishers',
                to: '/docs/intro',
              },
              {
                label: 'NFT Publishers & Marketplace',
                to: '/docs/intro',
              },
              {
                label: 'Web3 & Branding',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: "Socials/Community",
            items: [
              {
                label: "Twitter",
                href: "https://wappier.com/vision-mission-and-company-culture",
              },
              {
                label: "Telegram",
                href: "https://wappier.com/about-us",
              },
              {
                label: "Discord",
                href: "https://wappier.com/manifesto",
              },
              {
                label: "Medium",
                href: "https://wappier.com/join-us",
              },
              {
                label: "Facebook",
                href: "https://wappier.com/blog",
              },
              {
                label: "YouTube",
                href: "https://wappier.com/blog",
              },
            ],
          },
          {
            title: "About us",
            items: [
              {
                label: "Our vision",
                href: "https://wappier.com/vision-mission-and-company-culture",
              },
              {
                label: "Our story",
                href: "https://wappier.com/about-us",
              },
              {
                label: "Our mantra",
                href: "https://wappier.com/manifesto",
              },
              {
                label: "Become a Wappizen",
                href: "https://wappier.com/join-us",
              },
              {
                label: "Blog",
                href: "https://wappier.com/blog",
              },
              {
                label: "Newsletter",
                href: "https://wappier.com/blog",
              },
            ],
          },
        ],
        logo: {
          alt: 'Wappier',
          src: 'img/wappier-logo-full.png',
          href: 'https://wappier.com',
      },
        copyright: `Copyright © ${new Date().getFullYear()} Wappier . All Rights reserved | info@wappier.com`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

