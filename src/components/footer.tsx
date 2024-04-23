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
      <div className="container relative flex flex-wrap items-center justify-center gap-4 py-8">
        <div className="border-border absolute left-8 top-0 h-px w-[calc(100%-4rem)] border-t border-dashed"></div>
        <p className="text-muted-foreground mt-0 text-sm">
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
        <CircleIcon className="fill-muted text-muted h-2 w-2" />
        <Link
          href={siteConfig.repository.url}
          target="_blank"
          className="text-muted-foreground text-sm font-medium transition-colors hover:text-lime-500"
        >
          Github
        </Link>
        <CircleIcon className="fill-muted text-muted h-2 w-2 " />
        <Link
          href={`${siteConfig.repository.url}/blob/master/LICENSE`}
          target="_blank"
          className="text-muted-foreground text-sm font-medium transition-colors hover:text-lime-500"
        >
          License
        </Link>
      </div>
    </footer>
  );
});
Footer.displayName = 'Footer';

export { Footer };
