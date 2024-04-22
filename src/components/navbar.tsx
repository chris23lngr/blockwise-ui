import { cn } from '@/lib/utils';
import { PlusIcon, SearchIcon } from 'lucide-react';
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
        'fixed left-1/2 top-8 z-50 flex w-[calc(100%-4rem)] -translate-x-1/2 items-center justify-start gap-1 rounded-full border border-zinc-200 bg-white p-1 ring-2 ring-zinc-50 md:w-fit',
        className
      )}
    >
      <button className="block rounded-full p-1.5 transition-colors hover:bg-zinc-100">
        <SearchIcon className="h-4 w-4 text-zinc-700" />
      </button>
      <button className="block rounded-full p-1.5 transition-colors hover:bg-zinc-100">
        <PlusIcon className="h-4 w-4 text-zinc-700" />
      </button>
      <div className="h-5 w-px bg-zinc-200" />
      <button className="block rounded-full p-1.5 transition-colors hover:bg-zinc-100">
        <GithubLogo className="h-4 w-4 fill-zinc-700" />
      </button>
    </div>
  );
});

export { Navbar };
