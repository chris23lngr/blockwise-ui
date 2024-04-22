import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils';
import { CircleIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <footer ref={ref} {...rest} className={cn('', className)}>
      <div className="container relative flex max-w-4xl flex-wrap items-center justify-center gap-4 py-8">
        <div className="absolute left-8 top-0 h-px w-[calc(100%-4rem)] border-t border-dashed border-zinc-200"></div>
        {/* <p className="font-mono text-sm text-zinc-700">Hello World</p> */}
        <p className="text-sm text-zinc-700">
          Inspired by{' '}
          <Link
            href={'https://ui.shadcn.com/'}
            target="_blank"
            className="font-medium transition-colors hover:text-lime-500"
          >
            ui.shadcn.com
          </Link>{' '}
          and{' '}
          <Link
            href={'https://www.uilabs.dev/'}
            target="_blank"
            className="font-medium transition-colors hover:text-lime-500"
          >
            uilabs.dev
          </Link>
        </p>
        <CircleIcon className="h-2 w-2 fill-zinc-300 text-zinc-300" />
        <Link
          href={siteConfig.repository.url}
          target="_blank"
          className="text-sm font-medium text-zinc-700 transition-colors hover:text-lime-500"
        >
          Github
        </Link>
        <CircleIcon className="h-2 w-2 fill-zinc-300 text-zinc-300" />
        <Link
          href={`${siteConfig.repository.url}/blob/main/LICENSE`}
          target="_blank"
          className="text-sm font-medium text-zinc-700 transition-colors hover:text-lime-500"
        >
          License
        </Link>
      </div>
    </footer>
  );
});
Footer.displayName = 'Footer';

export { Footer };
