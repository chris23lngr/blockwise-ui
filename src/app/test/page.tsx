'use client';

import * as CD from '@/components/component-display';
import TSXStyle from '@/styles/prism/tsx-dark';
import * as Tabs from '@radix-ui/react-tabs';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';

SyntaxHighlighter.registerLanguage('tsx', tsx);

const codeString = `import { cn } from '@/lib/utils';\nimport { Slot } from '@radix-ui/react-slot';\nimport { VariantProps, cva } from 'class-variance-authority';\nimport React from 'react';\n\n// Here is the component\n\nconst buttonVariants = cva(\n  'rounded-md text-sm font-medium focus-visible:ring-offset-2 focus-visible:ring-lime-400 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-offset-background transition-colors inline-flex justify-center items-center',\n  {\n    variants: {\n      variant: {\n        default: 'bg-lime-400 text-foreground shadow-sm hover:bg-lime-300',\n        outline:\n          'border border-border ring-4 ring-zinc-50 bg-background hover:bg-zinc-100 text-zinc-700',\n      },\n      size: {\n        default: 'px-4 py-2',\n      },\n    },\n    defaultVariants: {\n      variant: 'default',\n      size: 'default',\n    },\n  }\n);\n\ninterface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement>,\n    VariantProps<typeof buttonVariants> {\n  asChild?: boolean;\n}\n\nconst Button = React.forwardRef<HTMLButtonElement, ButtonProps>(\n  (props, ref) => {\n    const { className, variant, size, asChild, ...rest } = props;\n\n    const Component = asChild ? Slot : 'button';\n\n    return (\n      <Component\n        ref={ref}\n        {...rest}\n        className={cn(buttonVariants({ variant, size, className }))}\n      />\n    );\n  }\n);\nButton.displayName = 'Button';\n\nexport { Button, buttonVariants };`;

export default function TestPage() {
  return (
    <main className="py-72">
      <CD.Section>
        <CD.ContentSidebar>
          <CD.Title>Test</CD.Title>
          <CD.Description>Test</CD.Description>
        </CD.ContentSidebar>
        <div className="col-span-6 col-start-1 mt-12 ">
          <Tabs.Root defaultValue="code">
            <Tabs.List>
              <Tabs.Trigger value="code"></Tabs.Trigger>
            </Tabs.List>
            <div className="rounded-lg border border-border bg-background p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
              <Tabs.Content value="code">
                <SyntaxHighlighter
                  language="tsx"
                  wrapLongLines
                  style={TSXStyle}
                >
                  {codeString}
                </SyntaxHighlighter>
              </Tabs.Content>
            </div>
          </Tabs.Root>
        </div>
      </CD.Section>
    </main>
  );
}
