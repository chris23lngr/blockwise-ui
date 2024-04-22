import * as Terminal from '@/registry/ui/terminal';

export default function TerminalPreview() {
  return (
    <Terminal.Root>
      <Terminal.Header>
        <Terminal.CopyButton />
      </Terminal.Header>
      <Terminal.Content>
        <span className="text-purple-700">pnpm</span>{' '}
        <span className="text-green-700">
          install @radix-ui/react-tabs --save-dev
        </span>
      </Terminal.Content>
    </Terminal.Root>
  );
}
