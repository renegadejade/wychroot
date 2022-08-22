// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Wychroot",
  tagline: "Gritty solarpunk roleplaying. Forged in the Dark.",
  url: "https://wychroot.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "zensomancer", // Usually your GitHub org/user name.
  projectName: "wychroot.com", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  stylesheets: ["https://use.typekit.net/net5egr.css"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "join_discord",
        content:
          '<a target="_blank" rel="noopener noreferrer" href="#">Join the Wychroot Discord for updates and community.</a>',
        backgroundColor: "#242526",
        textColor: "#91a919",
        isCloseable: true,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Wychroot",
        logo: {
          alt: "Wychroot Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "dropdown",
            label: "Playbooks",
            position: "left",

            items: [
              { to: "/devlog", label: "Archivist" },
              { to: "/devlog", label: "Biohacker" },
              { to: "/databender", label: "Databender" },
              { to: "/devlog", label: "Sporetender" },
              { to: "/devlog", label: "Storyteller" },
            ],
          },
          {
            type: "dropdown",
            label: "Wychcraft",
            position: "left",

            items: [
              { to: "/devlog", label: "Archivist" },
              { to: "/devlog", label: "Biohacker" },
              { to: "/devlog", label: "Databender" },
              { to: "/devlog", label: "Sporetender" },
              { to: "/devlog", label: "Storyteller" },
            ],
          },
          {
            type: "doc",
            docId: "rules/index",
            position: "left",
            label: "Rules",
          },
          { to: "/devlog", label: "Devlog", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Rules",
                to: "/rules/",
              },
              {
                label: "Settings",
                to: "/rules/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/pn94HbNGvA",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Wychroot",
              },
            ],
          },
          {
            title: "Developoment",
            items: [
              {
                label: "Devlog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/zensomancer/wychroot",
              },
            ],
          },
        ],
        copyright: `Wychroot © ${new Date().getFullYear()} John Thomas <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
