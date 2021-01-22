module.exports = {
  title: "react-helper",
  tagline: "React 开发辅助工具集",
  url: "https://nodoccat.github.io",
  baseUrl: "/react-helper/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "NoDocCat",
  projectName: "react-helper",
  themeConfig: {
    navbar: {
      title: "react-helper",
      items: [
        { label: "Docs", to: "docs/", activeBasePath: "docs" },
        { label: "GitHub", href: "https://github.com/NoDocCat/react-helper", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © 2020 NoDocCat, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/nodoccat/react-helper/edit/master/packages/docs-site",
        },
        pages: { path: "./pages" },
        theme: { customCss: require.resolve("./pages/style.css") },
      },
    ],
  ],
};