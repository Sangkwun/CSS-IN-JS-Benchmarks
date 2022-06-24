import { pick } from 'lodash-es';

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

export function buildCSSStyles(
  // theme,
  props
) {
  const cssProps = pick(props, ComponentCSSDeclarations);
  // applyColorTheme(theme, cssProps);
  return css(cssProps);
}

// export function buildBreakpointStyles(
//   theme,
//   props
// ) {
//   const styles = Object.entries(props)
//     .sort(([bpA, _sA], [bpB, _sB]) => {
//       const valueA = isBreakpoint(bpA) ? theme.breakpoint.breakpoints[bpA] : Number(bpA);
//       const valueB = isBreakpoint(bpB) ? theme.breakpoint.breakpoints[bpB] : Number(bpB);
//       return valueB - valueA;
//     })
//     .map(([bp, s]) => s && buildBaseStyles(theme, s, bp));
//   return css(styles);
// }

// export function buildTypographyStyles(typography) {
//   if (!typography) return undefined;
//   if (isTypography(typography)) return theme.typography[typography];

//   const styles =
//     typography &&
//     Object.entries(typography).map(
//       ([bp, t]) => t && buildMediaQuery(theme, theme.typography[t as Typography], bp as Breakpoint)
//     );

//   return css(styles);
// }

export function buildBaseStyles(
  // theme,
  props
  // bp?
) {
  // const typographyStyles = buildTypographyStyles(props.typography);
  const baseStyles = buildCSSStyles(props);

  const serializedStyles = css(typographyStyles, baseStyles);

  return serializedStyles;
}

// export function buildResponsiveStyles(
//   theme,
//   props,
// ) {
//   const pickedProps = pick(props, ReservedBreakpoint, "customResponsive");

//   const { customResponsive, ...otherProps } = pickedProps;
//   const baseStyles =
//     otherProps && buildBreakpointStyles(theme, { ...otherProps, ...customResponsive });

//   return css(baseStyles);
// }

export function buildStyles(
  // theme,
  props
) {
  const baseStyles = buildBaseStyles(props);
  // const responsiveStyles = buildResponsiveStyles(theme, props);
  return baseStyles;
}
