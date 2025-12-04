/**
 * Sun UI Color System
 *
 * A comprehensive color palette supporting:
 * - Semantic colors (primary, secondary, success, warning, danger, info)
 * - Neutral grays
 * - Alpha variations for overlays and states
 * - Dark mode support
 */
export type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  main: string;
  light: string;
  dark: string;
  contrastText: string;
  alpha8: string;
  alpha12: string;
  alpha16: string;
  alpha20: string;
  alpha30: string;
  alpha40: string;
};
export type SemanticColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';
/**
 * Sun UI Brand Colors
 * Primary: Sky Blue (Sun-inspired warmth meets modern tech)
 */
export declare const colorPalette: {
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
  info: ColorScale;
  neutral: ColorScale;
};
export declare const backgrounds: {
  light: {
    default: string;
    paper: string;
    subtle: string;
    muted: string;
  };
  dark: {
    default: string;
    paper: string;
    subtle: string;
    muted: string;
  };
};
export declare const semantic: {
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
  info: ColorScale;
  neutral: ColorScale;
};
export declare const colorsWithSemantic: {
  semantic: {
    primary: ColorScale;
    secondary: ColorScale;
    success: ColorScale;
    warning: ColorScale;
    danger: ColorScale;
    info: ColorScale;
    neutral: ColorScale;
  };
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
  info: ColorScale;
  neutral: ColorScale;
};
export declare const textColors: {
  light: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
  dark: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
};
export declare const borderColors: {
  light: {
    default: string;
    subtle: string;
    strong: string;
  };
  dark: {
    default: string;
    subtle: string;
    strong: string;
  };
};
export type ColorPalette = typeof colorPalette;
export type Backgrounds = typeof backgrounds;
export type TextColors = typeof textColors;
export type BorderColors = typeof borderColors;
//# sourceMappingURL=colors.d.ts.map
