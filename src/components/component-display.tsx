import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const Section = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <section ref={ref} {...rest} className={cn('', className)}>
      <div className="container relative py-32">
        {/* Top Border */}
        <div className="absolute left-8 top-0 h-px w-[calc(100%-4rem)] border-t border-dashed border-zinc-200"></div>
        {/* Content */}
        <div className="relative z-10 grid w-full grid-cols-1 gap-12 lg:grid-cols-6 lg:gap-0">
          {children}
        </div>
      </div>
    </section>
  );
});
/** -----------------------------------------------------------------
 *  ContentSidebar
 *  -----------------------------------------------------------------*/
const ContentSidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div ref={ref} {...rest} className={cn('px-6 lg:col-span-2', className)} />
  );
});
ContentSidebar.displayName = 'ContentSidebar';

/** -----------------------------------------------------------------
 *  Title
 *  -----------------------------------------------------------------*/
const Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <h3 ref={ref} {...rest} className="text-lg font-medium text-zinc-900" />
  );
});
Title.displayName = 'Title';

/** -----------------------------------------------------------------
 *  Description
 *  -----------------------------------------------------------------*/
const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <p ref={ref} {...rest} className="mt-2 max-w-prose text-sm text-zinc-500" />
  );
});
Description.displayName = 'Description';

/** -----------------------------------------------------------------
 *  DependencyList
 *  -----------------------------------------------------------------*/
const DenpendencyList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <div ref={ref} {...rest} className={cn('mt-12', className)}>
      <p className="text-xs font-medium text-zinc-500">Built with</p>
      <div className="mt-4 flex flex-wrap items-center justify-start gap-2">
        {children}
      </div>
    </div>
  );
});
DenpendencyList.displayName = 'DenpendencyList';

/** -----------------------------------------------------------------
 *  Dependency
 *  -----------------------------------------------------------------*/
interface DenpendencyProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
}

const Denpendency = React.forwardRef<HTMLAnchorElement, DenpendencyProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <Link
        ref={ref}
        {...rest}
        className="block cursor-pointer rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-lime-100 hover:text-lime-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2"
      />
    );
  }
);
Denpendency.displayName = 'Denpendency';

/** -----------------------------------------------------------------
 *  PreviewWrapper
 *  -----------------------------------------------------------------*/
const PreviewWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <div
      ref={ref}
      {...rest}
      className={cn('px-6 lg:col-span-3 lg:col-start-4 lg:px-0', className)}
    >
      <div className="flex min-h-96 items-center justify-center rounded-lg border border-zinc-200 bg-white p-8 shadow-lg ring-zinc-100">
        {children}
      </div>
    </div>
  );
});
PreviewWrapper.displayName = 'PreviewWrapper';

export {
  ContentSidebar,
  Denpendency,
  DenpendencyList,
  Description,
  PreviewWrapper,
  Section,
  Title,
};