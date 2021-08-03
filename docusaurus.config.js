module.exports = {
  title: 'Sendblue',
  tagline: 'SMS + iMessaging API Designed for Successful Businesses',
  url: 'https://docs.sendblue.co',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'sendblue-api', // Usually your GitHub org/user name. 
  projectName: 'sendblue-api.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Sendblue Logo',
        src: 'img/logo-trans-blue.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/sendblue-api',
          label: 'GitHub',
          position: 'left',
        },
        {
          href: 'https://sendblue.co/dashboard',
          label: 'Console',
          position: 'right',
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
              to: 'docs/',
            },
            {
              label: 'Messaging',
              to: 'docs/outbound/',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:support@sendblue.co',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sendbluedotco',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Landing Page',
              to: 'https://sendblue.co/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sendblue-api',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sendblue, Built with ❤️ by @nikita_builds.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'intro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sendblue-api/sendblue-api.github.io/blob/gh-pages/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/sendblue-api/sendblue-api.github.io/tree/gh-pages/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
