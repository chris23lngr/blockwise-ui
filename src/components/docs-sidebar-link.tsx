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
        'data-[active=true]:text-foreground text-muted-foreground text-sm data-[active=true]:font-medium',
        className
      )}
    />
  );
});
DocsSidebarLink.displayName = 'DocsSidebarLink';

export { DocsSidebarLink };
