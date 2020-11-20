export const bar = '<div part="bar"></div>';

export const createTemplate = (tpl: string): HTMLTemplateElement => {
  const template = document.createElement('template');
  template.innerHTML = tpl;
  return template;
};

export const createRoot = <T extends HTMLElement>(node: T, tpl: HTMLTemplateElement): ShadowRoot => {
  const root = node.shadowRoot || node.attachShadow({ mode: 'open' });
  root.appendChild(tpl.content.cloneNode(true));
  return root;
};

export const getStyles = (root: ShadowRoot): CSSStyleDeclaration[] =>
  Array.from(root.querySelectorAll('div')).map((bar) => (bar as HTMLElement).style);

export const setStyles = (style: CSSStyleDeclaration, props: Record<string, string>): void => {
  for (const p in props) {
    style.setProperty(p, props[p]);
  }
};
