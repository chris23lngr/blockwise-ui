import { Registry } from '@/registry/types';

export const index: Registry = {
  button: {
    name: 'button',
    title: 'Button',
    description: 'Button component',
    dependencies: [
      {
        name: '@radix-ui/react-slot',
        url: 'https://www.npmjs.com/package/@radix-ui/react-slot',
      },
    ],
  },
  input: {
    name: 'input',
    title: 'Input',
    description:
      'Input component for forms and more. This is a simple input component.',
    dependencies: [
      {
        name: '@tailwindcss/forms',
        url: 'https://github.com/tailwindlabs/tailwindcss-forms',
      },
    ],
  },
  terminal: {
    name: 'terminal',
    title: 'Terminal',
    description: 'Terminal component for displaying command line interfaces.',
    dependencies: [
      {
        name: 'react-syntax-highlighter',
        url: 'https://github.com/react-syntax-highlighter/react-syntax-highlighter',
      },
    ],
  },
  badge: {
    name: 'badge',
    title: 'Badge',
    description: 'Badge component for displaying status or notifications.',
    dependencies: [],
  },
};
