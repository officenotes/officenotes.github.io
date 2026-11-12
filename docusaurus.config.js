// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OfficeNotes',
  tagline: 'IT Business Analysis Portfolio, System Specifications & Frameworks',
  favicon: 'img/favicon.ico',

  // Konfigurasi wajib untuk GitHub Pages Organization
  url: 'https://officenotes.github.io',
  baseUrl: '/',
  organizationName: 'officenotes',
  projectName: 'officenotes.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Aktifkan dukungan diagram Mermaid.js
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'portfolio', // Mengubah URL /docs menjadi /portfolio
          sidebarPath: './sidebars.js',
        },
        blog: {
          routeBasePath: 'articles', // Mengubah URL /blog menjadi /articles
          showReadingTime: true,
          blogTitle: 'Business Analysis Notes & Playbooks',
          blogDescription: 'Artikel praktis seputar Requirement Engineering, BPMN, dan System Analysis',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OfficeNotes',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Portofolio (BRD & FSD)',
          },
          //{to: '/articles', label: 'Materi Business Analyst', position: 'left'},
          {
            href: 'https://github.com/officenotes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;