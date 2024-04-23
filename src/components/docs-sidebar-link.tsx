'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface DocsSidebarLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
}

const DocsSidebarLink = React.forwardRef<
  HTMLAnchorElement,
  DocsSidebarLinkProps
>((props, ref) => {
  const { className, ...rest } = props;

  const pathname = usePathname();

  return (
    <Link
      ref={ref}
      {...rest}
      data-active={pathname === props.href ? 'true' : 'false'}
      className={cn(
        'text-sm text-zinc-500 data-[active=true]:font-medium data-[active=true]:text-zinc-900',
        className
      )}
    />
  );
});
DocsSidebarLink.displayName = 'DocsSidebarLink';

export { DocsSidebarLink };
