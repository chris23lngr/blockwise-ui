'use client';

import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import {
  BookOpenIcon,
  HomeIcon,
  MonitorIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';
import { GithubLogo } from './logos/github';

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div
      ref={ref}
      {...rest}
      className={cn(
        'fixed left-1/2 top-8 z-50 flex w-[calc(100%-4rem)] -translate-x-1/2 items-center justify-start gap-1 rounded-full border border-border bg-background p-1 ring-2 ring-ring-detail md:w-fit',
        className
      )}
    >
      <Link
        href={`/`}
        className="block rounded-full p-1.5 text-foreground transition-colors hover:bg-foreground/5"
      >
        <HomeIcon className="h-4 w-4" />
      </Link>
      <button className="block rounded-full p-1.5 text-foreground transition-colors hover:bg-foreground/5">
        <SearchIcon className="h-4 w-4 " />
      </button>
      <ThemeSwitch />
      <Link
        href={`/docs`}
        className="block rounded-full p-1.5 text-foreground transition-colors hover:bg-foreground/5"
      >
        <BookOpenIcon className="h-4 w-4" />
      </Link>
      <div className="h-5 w-px bg-border" />
      <Link
        href={siteConfig.repository.url}
        target="_blank"
        className="block rounded-full p-1.5 text-foreground transition-colors hover:bg-foreground/5"
      >
        <GithubLogo className="h-4 w-4 fill-foreground" />
      </Link>
    </div>
  );
});
Navbar.displayName = 'Navbar';

/** -----------------------------------------------------------------
 *  NavbarButton
 *  -----------------------------------------------------------------*/

const navbarButtonVariants = cva(
  'block rounded-full p-1.5 text-zinc-700 transition-colors hover:bg-zinc-100'
);

const NavbarButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <button
      ref={ref}
      {...rest}
      className={cn(navbarButtonVariants({}), className)}
    />
  );
});
NavbarButton.displayName = 'NavbarButton';

const ThemeSwitch = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { className, ...rest } = props;
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    console.log('Theme is', theme);
  });
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      ref={ref}
      {...rest}
      className={cn(
        'block rounded-full p-1.5 text-foreground transition-colors hover:bg-foreground/5',
        className
      )}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <MoonIcon
        data-active={theme == 'dark'}
        className="hidden h-4 w-4 data-[active=true]:block"
      />
      <SunIcon
        data-active={theme == 'light'}
        className="hidden h-4 w-4 data-[active=true]:block"
      />
      <MonitorIcon
        data-active={theme == 'system'}
        className="hidden h-4 w-4 data-[active=true]:block"
      />
    </button>
  );
});
ThemeSwitch.displayName = 'ThemeSwitch';

export { Navbar };
