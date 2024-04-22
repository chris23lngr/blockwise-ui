import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  'rounded-md text-sm font-medium focus-visible:ring-offset-2 focus-visible:ring-lime-400 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-offset-white transition-colors inline-flex justify-center items-center',
  {
    variants: {
      variant: {
        default: 'bg-lime-400 text-zinc-900 shadow-sm hover:bg-lime-300',
        outline:
          'border border-zinc-200 ring-4 ring-zinc-50 bg-white hover:bg-zinc-100 text-zinc-700',
      },
      size: {
        default: 'px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, variant, size, asChild, ...rest } = props;

    const Component = asChild ? Slot : 'button';

    return (
      <Component
        ref={ref}
        {...rest}
        className={cn(buttonVariants({ variant, size, className }))}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
