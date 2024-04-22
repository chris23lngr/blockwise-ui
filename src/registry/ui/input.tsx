import { cn } from '@/lib/utils';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <input
      ref={ref}
      className={cn(
        'rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-900 caret-zinc-500 ring-4 ring-zinc-100 transition-colors placeholder:text-zinc-500 focus-within:border-lime-300 focus-within:outline-none focus-within:ring-lime-100 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-70',
        className
      )}
      {...rest}
    />
  );
});
Input.displayName = 'Input';

export { Input };
