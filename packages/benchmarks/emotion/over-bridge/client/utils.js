import { pick } from 'lodash-es';
import { css } from 'react-emotion';
const ComponentCSSDeclarations = [
  /* Layout Styles */
  'display',
  'visibility',

  'overflow',
  'overflowX',
  'overflowY',

  'clear',
  'position',

  'gap',

  'top',
  'right',
  'bottom',
  'left',

  'width',
  'maxWidth',
  'minWidth',

  'height',
  'maxHeight',
  'minHeight',

  'flexGrow',
  'flexDirection',
  'flex',
  'flexWrap',

  'justifyContent',
  'justifySelf',
  'alignItems',
  'alignSelf',

  'boxSizing',
  'inset',

  'zIndex',

  'transform',

  /* Margin Styles */
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',

  /* Padding Styles */
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',

  /* Border Styles */
  'border',
  'borderColor',
  'borderStyle',
  'borderWidth',
  'borderRadius',
  'borderBottom',
  'borderTop',
  'borderTopRightRadius',
  'borderTopLeftRadius',
  'borderBottomRightRadius',
  'borderBottomLeftRadius',

  /* Background Styles */
  'background',
  'backgroundColor',
  'backgroundAttachment',
  'backgroundImage',
  'backgroundPosition',
  'backgroundRepeat',

  /* Text Styles */
  'color',
  'textAlign',
  'textDecoration',
  'textIndent',
  'textTransform',
  'whiteSpace',

  /* Font Styles */
  'font',
  'fontFamily',
  'fontSize',
  'fontVariant',
  'fontWeight',
  'letterSpacing',
  'lineHeight',

  /* Box Styles */
  'boxShadow',

  'opacity',
  'transition',
  'animation',
  /* TODO: Add properties as many as possible... e.g. grid, animation, ... */
];

export function buildStyles(
  // theme,
  props
) {
  const cssProps = pick(props, ComponentCSSDeclarations);
  // applyColorTheme(theme, cssProps);
  return css(cssProps);
}
