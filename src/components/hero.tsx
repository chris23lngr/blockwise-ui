import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/registry/ui/button';
import Link from 'next/link';
import React from 'react';
import { GithubLogo } from './logos/github';

// TODO: Add component previews below the header

const Hero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <section
      ref={ref}
      {...rest}
      className={cn(
        'relative flex min-h-svh items-center justify-center overflow-hidden',
        className
      )}
    >
      <div className="absolute z-[5] h-full w-full bg-gradient-to-b from-background/0 to-background"></div>
      <div className="absolute bottom-0 left-0 z-0 h-full w-1/2 -translate-x-1/2 translate-y-1/4 bg-gradient-radial from-lime-400 via-lime-400/0 to-lime-400/0 dark:opacity-35 md:w-1/4"></div>
      <div className="absolute bottom-0 right-0 z-0 hidden h-full w-1/4 translate-x-1/2 translate-y-1/4 bg-gradient-radial from-lime-400 via-lime-400/0 to-lime-400/0 dark:opacity-35 md:block"></div>
      <div className="container relative z-10">
        <div className="w-full px-6 py-52">
          <h1 className="max-w-screen-md text-4xl font-medium leading-tight text-foreground md:text-5xl">
            Beautiful React Components,{' '}
            <span className="bg-gradient-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent">
              Made Easy
            </span>
          </h1>
          <h2 className="mt-6 max-w-prose text-muted-foreground">
            Radix UI is a collection of low-level, unstyled components that
            serve as the foundation for your React application. These components
            serve as an alternative to and are inspired by shadcn/ui.
          </h2>
          <div className="mt-12 flex items-center justify-start gap-4">
            <Button variant={'default'} size={'default'}>
              View Components
            </Button>
            <Link
              href={siteConfig.repository.url}
              target="_blank"
              className={buttonVariants({
                variant: 'outline',
                size: 'default',
              })}
            >
              Github <GithubLogo className="ms-2 h-4 w-4 fill-zinc-700" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});
Hero.displayName = 'Hero';

export { Hero };
