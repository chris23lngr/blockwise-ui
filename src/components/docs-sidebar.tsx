import { docsConfig } from '@/lib/config/docs';
import { cn } from '@/lib/utils';
import React from 'react';
import { DocsSidebarLink } from './docs-sidebar-link';

const DocsSidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div
      ref={ref}
      {...rest}
      className={cn(
        'flex h-fit w-full max-w-xs flex-col items-start justify-start space-y-2',
        className
      )}
    >
      {docsConfig.content.map((item, index) => {
        return (
          <DocsSidebarLink key={`docs-sb-link-${index}`} href={item.path}>
            {item.title}
          </DocsSidebarLink>
        );
      })}
    </div>
  );
});
DocsSidebar.displayName = 'DocsSidebar';

export { DocsSidebar };
