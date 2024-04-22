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
};
