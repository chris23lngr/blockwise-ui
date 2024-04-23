import * as Terminal from '@/registry/ui/terminal';

const codeString = `pnpm install @radix-ui/react-tabs @radix-ui/react-tooltip`;

export default function TerminalPreview() {
  return (
    <Terminal.Root>
      <Terminal.Header>
        <Terminal.CopyButton />
      </Terminal.Header>
      <Terminal.Content codeString={codeString} />
    </Terminal.Root>
  );
}
