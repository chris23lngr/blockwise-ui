import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx', 'md'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    /* otherOptions… */
  },
});

export default withMDX(nextConfig);
