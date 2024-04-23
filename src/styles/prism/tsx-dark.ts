const TSXStyle: { [key: string]: React.CSSProperties } = {
  'code[class*="language-"]': {
    color: 'var(--default)',
    background: 'none',
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: '#f8f8f2',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  ':not(pre) > code[class*="language-"]': {
    background: '#1d1f21',
    padding: '.1em',
    borderRadius: '.3em',
  },
  comment: {
    color: 'var(--comment)', // Comments
  },
  prolog: {
    color: 'var(--prolog)', // Not used
  },
  doctype: {
    color: 'var(--doctype)', // Not used
  },
  cdata: {
    color: 'var(--cdata)', // Not used
  },
  punctuation: {
    color: 'var(--punctuation)', // {};()
  },
  '.namespace': {
    color: 'var(--namespace)', // not used
  },
  property: {
    color: 'var(--property)', // Properties
  },
  keyword: {
    color: 'var(--keyword)', // import, export, return, if, else, for, while, from, etc.
  },
  tag: {
    color: 'var(--tag)', // <div>, <span>, <a>, etc. TODO
  },
  'class-name': {
    color: 'var(--class-name)', // Class names (Button, HTMLButtonElement, ...)
  },
  boolean: {
    color: 'var(--boolean)',
  },
  constant: {
    color: 'var(--constant)',
  },
  symbol: {
    color: 'var(--symbol)',
  },
  deleted: {
    color: 'var(--deleted)',
  },
  number: {
    color: 'var(--number)',
  },
  selector: {
    color: 'var(--selector)',
  },
  'attr-name': {
    color: 'var(--attr-name)',
  },
  string: {
    color: 'var(--string)',
  },
  char: {
    color: 'var(--char)',
  },
  builtin: {
    color: 'var(--builtin)',
  },
  inserted: {
    color: 'var(--inserted)',
  },
  variable: {
    color: 'var(--variable)',
  },
  operator: {
    color: 'var(--operator)',
  },
  entity: {
    color: 'var(--entity)',
  },
  url: {
    color: 'var(--url)',
  },
  '.language-css .token.string': {
    color: 'var(--token-string)',
  },
  '.style .token.string': {
    color: 'var(--token-string)',
  },
  atrule: {
    color: 'var(--atrule)',
  },
  'attr-value': {
    color: 'var(--attr-value)',
  },
  function: {
    color: 'var(--function)',
  },
  regex: {
    color: 'var(--regex)',
  },
  important: {
    color: 'var(--important)',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
};

export default TSXStyle;
