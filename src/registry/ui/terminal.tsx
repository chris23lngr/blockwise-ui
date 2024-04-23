'use client';

import { cn } from '@/lib/utils';
import TerminalStyle from '@/styles/prism/terminal';
import { CheckIcon, ClipboardIcon, TerminalIcon } from 'lucide-react';
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';

SyntaxHighlighter.registerLanguage('bash', bash);

/** -----------------------------------------------------------------
 *  Context
 *  ----------------------------------------------------------------- */
type TerminalContextType = {
  codeString: string;
  setCodeString: React.Dispatch<React.SetStateAction<string>>;
};

const TerminalContext = React.createContext<TerminalContextType>(
  {} as TerminalContextType
);

function useTerminal() {
  const context = React.useContext(TerminalContext);

  if (!context) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }

  return context;
}

const TerminalProvider = TerminalContext.Provider;

/** -----------------------------------------------------------------
 *  Root
 *  ----------------------------------------------------------------- */
const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, children, ...rest } = props;
  const [codeString, setCodeString] = React.useState<string>('');

  return (
    <TerminalProvider
      value={{
        codeString,
        setCodeString,
      }}
    >
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
    </TerminalProvider>
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
      {children}
    </div>
  );
});
Header.displayName = 'Header';

/** -----------------------------------------------------------------
 *  CopyButton
 *  ----------------------------------------------------------------- */

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  handleCopy?: (codeString?: string) => void;
  copyDelay?: number;
}

const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  (props, ref) => {
    const {
      className,
      handleCopy: imperativeHandleCopy,
      copyDelay,
      ...rest
    } = props;
    const { codeString } = useTerminal();
    const [copied, setCopied] = React.useState<boolean>(false);

    const handleCopy = () => {
      if (imperativeHandleCopy) {
        imperativeHandleCopy(codeString);
      } else {
        navigator.clipboard.writeText(codeString);
      }

      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, copyDelay || 1000);
    };

    return (
      <button
        ref={ref}
        {...rest}
        data-copied={copied}
        className={cn(
          'group ml-auto rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100',
          className
        )}
        onClick={handleCopy}
      >
        {copied ? (
          <CheckIcon className="h-4 w-4 text-lime-500" />
        ) : (
          <ClipboardIcon className="h-4 w-4 " />
        )}
      </button>
    );
  }
);
CopyButton.displayName = 'CopyButton';

/** -----------------------------------------------------------------
 *  Content
 *  ----------------------------------------------------------------- */
interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  codeString: string;
}

const Content = React.forwardRef<HTMLDivElement, ContentProps>((props, ref) => {
  const { className, codeString, ...rest } = props;
  const { setCodeString } = useTerminal();

  React.useMemo(() => {
    setCodeString(codeString);
  }, [codeString]);

  return (
    <div
      ref={ref}
      {...rest}
      className={cn('overflow-x-auto bg-white px-4 py-4', className)}
    >
      <SyntaxHighlighter language="bash" style={TerminalStyle}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
});
Content.displayName = 'Content';

/** -----------------------------------------------------------------
 *  Export
 *  ----------------------------------------------------------------- */
const TerminalRoot = Root;
const TerminalHeader = Header;
const TerminalCopyButton = CopyButton;
const TerminalContent = Content;

export {
  Content,
  CopyButton,
  Header,
  Root,
  TerminalContent,
  TerminalCopyButton,
  TerminalHeader,
  TerminalRoot,
  useTerminal,
};
