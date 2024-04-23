import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const badgeVariants = cva(
  'block cursor-pointer rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 w-fit h-fit',
  {
    variants: {
      variant: {
        default: 'bg-zinc-300/40 text-muted-foreground',
        success: 'bg-lime-400/40 text-lime-700 dark:text-lime-100',
        warning: 'bg-amber-400/40 text-amber-700 dark:text-amber-100',
        destructive: 'bg-red-400/40 text-red-700 dark:text-red-100',
      },
      size: {
        default: 'px-2 py-1 text-xs',
        lg: 'px-2 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { className, variant, size, ...rest } = props;

  return (
    <span
      ref={ref}
      {...rest}
      className={cn(badgeVariants({ variant, size, className }))}
    />
  );
});
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
