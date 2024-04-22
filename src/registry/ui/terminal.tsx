import { cn } from '@/lib/utils';
import { ClipboardIcon, TerminalIcon } from 'lucide-react';
import React from 'react';

/** -----------------------------------------------------------------
 *  Root
 *  ----------------------------------------------------------------- */
const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <div
      ref={ref}
      {...rest}
      className={cn(
        'w-full max-w-xl rounded-xl border border-zinc-200 bg-zinc-50 p-1',
        className
      )}
    >
      <div className="w-full overflow-hidden rounded-lg border border-zinc-200">
        {children}
      </div>
    </div>
  );
});
Root.displayName = 'Root';

/** -----------------------------------------------------------------
 *  Header
 *  ----------------------------------------------------------------- */
const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <div
      ref={ref}
      {...rest}
      className={cn(
        'flex items-center justify-start border-b border-inherit bg-zinc-100 py-1.5 pl-4 pr-2.5',
        className
      )}
    >
      <TerminalIcon className="h-4 w-4 text-zinc-700" />
      <p className="ms-2 text-sm font-medium text-zinc-500">Terminal</p>
    </div>
  );
});
Header.displayName = 'Header';

/** -----------------------------------------------------------------
 *  CopyButton
 *  ----------------------------------------------------------------- */
const CopyButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <button
      ref={ref}
      {...rest}
      className={cn(
        'ml-auto rounded-md p-1.5 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100',
        className
      )}
    >
      <ClipboardIcon className="h-4 w-4 text-zinc-500" />
    </button>
  );
});
CopyButton.displayName = 'CopyButton';

/** -----------------------------------------------------------------
 *  Content
 *  ----------------------------------------------------------------- */
const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <div
      ref={ref}
      {...rest}
      className={cn('overflow-x-auto bg-white px-4 py-4', className)}
    >
      <p className="text-nowrap break-keep font-mono text-sm text-zinc-900">
        {children}
      </p>
    </div>
  );
});
Content.displayName = 'Content';

export { Content, CopyButton, Header, Root };
