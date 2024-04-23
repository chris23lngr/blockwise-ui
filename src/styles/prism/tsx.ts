const TSXStyle: { [key: string]: React.CSSProperties } = {
  'code[class*="language-"]': {
    color: '#ff0000',
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
    color: '#ff0000',
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
    color: '#d4d4d8', // Comments
  },
  prolog: {
    color: '#7C7C7C', // Not used
  },
  doctype: {
    color: '#7C7C7C', // Not used
  },
  cdata: {
    color: '#7C7C7C', // Not used
  },
  punctuation: {
    color: '#52525b', // {};()
  },
  '.namespace': {
    opacity: '1',
    color: '#b91c1c', // not used
  },
  property: {
    color: '#96CBFE', // not used
  },
  keyword: {
    color: '#71717a', // import, export, return, if, else, for, while, from, etc.
  },
  tag: {
    color: '#2563eb', // <div>, <span>, <a>, etc. TODO
  },
  'class-name': {
    color: '#84cc16', // Class names (Button, HTMLButtonElement, ...)
  },
  boolean: {
    color: '#a855f7',
  },
  constant: {
    color: '#a855f7',
  },
  symbol: {
    color: '#22d3ee',
  },
  deleted: {
    color: '#f92672',
  },
  number: {
    color: '#FF73FD',
  },
  selector: {
    color: '#22d3ee',
  },
  'attr-name': {
    color: '#18181b', // ref=...
  },
  string: {
    color: '#A8FF60',
  },
  char: {
    color: '#A8FF60',
  },
  builtin: {
    color: '#A8FF60',
  },
  inserted: {
    color: '#A8FF60',
  },
  variable: {
    color: '#C6C5FE',
  },
  operator: {
    color: '#EDEDED',
  },
  entity: {
    color: '#FFFFB6',
    cursor: 'help',
  },
  url: {
    color: '#96CBFE',
  },
  '.language-css .token.string': {
    color: '#87C38A',
  },
  '.style .token.string': {
    color: '#87C38A',
  },
  atrule: {
    color: '#F9EE98',
  },
  'attr-value': {
    color: '#F9EE98',
  },
  function: {
    color: '#DAD085',
  },
  regex: {
    color: '#E9C062',
  },
  important: {
    color: '#fd971f',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
};

export default TSXStyle;
