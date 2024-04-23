'use client';

import { cn } from '@/lib/utils';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React from 'react';

const Provider = TooltipPrimitive.Provider;

const Root = TooltipPrimitive.Root;

const Portal = TooltipPrimitive.Portal;

const Trigger = TooltipPrimitive.Trigger;

interface ContentProps extends TooltipPrimitive.TooltipContentProps {}

const Content = React.forwardRef<HTMLDivElement, ContentProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <TooltipPrimitive.Content
      {...rest}
      ref={ref}
      side="top"
      sideOffset={8}
      avoidCollisions={true}
      className={cn(
        'text-zinc-90 opacity-1000 text-foreground bg-background border-border z-40 rounded-full border px-3 py-1.5 text-sm font-medium shadow-sm',
        className
      )}
    />
  );
});
Content.displayName = TooltipPrimitive.Content.displayName;

export { Content, Portal, Provider, Root, Trigger };
