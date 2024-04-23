export const docsConfig = {
  content: [
    {
      title: 'Introduction',
      path: '/docs',
    },
    {
      title: 'Getting Started',
      path: '/docs/getting-started',
    },
    {
      title: 'Installation',
      path: '/docs/installation',
      children: [
        {
          title: 'Next.js',
          path: '/docs/installation/nextjs',
        },
        {
          title: 'Remix',
          path: '/docs/installation/remix',
        },
      ],
    },
  ],
};

export type DocsConfig = typeof docsConfig;
