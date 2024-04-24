import type { MDXComponents } from 'mdx/types';
import { cn } from './lib/utils';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-medium text-foreground">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-4 text-lg text-muted-foreground">{children}</h2>
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn('mt-12 text-2xl font-medium text-foreground', className)}
        {...props}
      />
    ),
    p: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className={cn(
          'leading-7 text-muted-foreground [&:not(:first-child)]:mt-6',
          className
        )}
        {...props}
      />
    ),
    ...components,
  };
}
