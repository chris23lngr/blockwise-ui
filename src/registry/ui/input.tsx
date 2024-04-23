import { cn } from '@/lib/utils';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <input
      ref={ref}
      className={cn(
        'rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground caret-muted-foreground ring-4 ring-ring-detail transition-colors placeholder:text-muted-foreground focus-within:border-lime-300 focus-within:outline-none focus-within:ring-lime-100 focus-visible:ring-4 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-70 focus-within:dark:border-lime-600 focus-visible:dark:ring-lime-400/20',
        className
      )}
      {...rest}
    />
  );
});
Input.displayName = 'Input';

export { Input };
