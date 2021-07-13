// eslint-disable-next-line @typescript-eslint/no-var-requires
const lightCodeTheme = require("prism-react-renderer/themes/github");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

module.exports = {
  title: "react-helper",
  tagline: "React 开发辅助工具集",
  url: "https://nodoccat.github.io",
  baseUrl: "/react-helper/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "NoDocCat",
  projectName: "react-helper",
  themeConfig: {
    navbar: {
      title: "react-helper",
      items: [
        { label: "Docs", type: "doc", docId: "start", position: "left" },
        { label: "GitHub", href: "https://github.com/nodoccat/react-helper", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      copyright: "Copyright (c) 2020 NoDocCat. Built with Docusaurus.",
    },
    prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: { sidebarPath: require.resolve("./sidebars.js") },
        theme: { customCss: require.resolve("./src/style.css") },
      },
    ],
  ],
};
