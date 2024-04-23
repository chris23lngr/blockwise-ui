const TerminalStyle: { [key: string]: React.CSSProperties } = {
  'code[class*="language-"]': {
    color: '#16a34a',
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
    background: '#2b2b2b',
    padding: '0.1em',
    borderRadius: '0.3em',
    whiteSpace: 'normal',
  },
  comment: {
    color: '#dc2626',
  },
  prolog: {
    color: '#dc2626',
  },
  doctype: {
    color: '#dc2626',
  },
  cdata: {
    color: '#dc2626',
  },
  punctuation: {
    color: '#dc2626',
  },
  property: {
    color: '#dc2626',
  },
  tag: {
    color: '#dc2626',
  },
  constant: {
    color: '#dc2626',
  },
  symbol: {
    color: '#dc2626',
  },
  deleted: {
    color: '#dc2626',
  },
  boolean: {
    color: '#dc2626',
  },
  number: {
    color: '#00e0e0',
  },
  selector: {
    color: '#dc2626',
  },
  'attr-name': {
    color: '#dc2626',
  },
  string: {
    color: '#dc2626',
  },
  char: {
    color: '#dc2626',
  },
  builtin: {
    color: '#dc2626',
  },
  inserted: {
    color: '#dc2626',
  },
  operator: {
    color: '#3f3f46',
  },
  entity: {
    color: '#dc2626',
    cursor: 'help',
  },
  url: {
    color: '#dc2626',
  },
  '.language-css .token.string': {
    color: '#3b82f6',
  },
  '.style .token.string': {
    color: '##3f3f46',
  },
  variable: {
    color: '#dc2626',
  },
  atrule: {
    color: '#dc2626',
  },
  'attr-value': {
    color: '#dc2626',
  },
  function: {
    color: '#9333ea',
  },
  keyword: {
    color: '#0ea5e9',
  },
  regex: {
    color: '#0ea5e9',
  },
  important: {
    color: '#0ea5e9',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
};

export default TerminalStyle;
