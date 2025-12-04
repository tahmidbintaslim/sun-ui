/**
 * Sun UI Typography System
 *
 * Font families, sizes, weights, and line heights
 */
export declare const fontFamily: {
  readonly sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
  readonly serif: '"Georgia", "Times New Roman", Times, serif';
  readonly mono: '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace';
};
export declare const fontSize: {
  readonly xs: '0.75rem';
  readonly sm: '0.8125rem';
  readonly md: '0.875rem';
  readonly base: '1rem';
  readonly lg: '1.125rem';
  readonly xl: '1.25rem';
  readonly '2xl': '1.5rem';
  readonly '3xl': '1.875rem';
  readonly '4xl': '2.25rem';
  readonly '5xl': '3rem';
  readonly '6xl': '3.75rem';
  readonly '7xl': '4.5rem';
  readonly '8xl': '6rem';
  readonly '9xl': '8rem';
};
export declare const fontWeight: {
  readonly thin: 100;
  readonly extralight: 200;
  readonly light: 300;
  readonly normal: 400;
  readonly medium: 500;
  readonly semibold: 600;
  readonly bold: 700;
  readonly extrabold: 800;
  readonly black: 900;
};
export declare const lineHeight: {
  readonly none: 1;
  readonly tight: 1.25;
  readonly snug: 1.375;
  readonly normal: 1.5;
  readonly relaxed: 1.625;
  readonly loose: 2;
  readonly 3: '0.75rem';
  readonly 4: '1rem';
  readonly 5: '1.25rem';
  readonly 6: '1.5rem';
  readonly 7: '1.75rem';
  readonly 8: '2rem';
  readonly 9: '2.25rem';
  readonly 10: '2.5rem';
};
export declare const letterSpacing: {
  readonly tighter: '-0.05em';
  readonly tight: '-0.025em';
  readonly normal: '0em';
  readonly wide: '0.025em';
  readonly wider: '0.05em';
  readonly widest: '0.1em';
};
export declare const typographyPresets: {
  readonly display1: {
    readonly fontSize: '3rem';
    readonly fontWeight: 700;
    readonly lineHeight: 1.25;
    readonly letterSpacing: '-0.025em';
  };
  readonly display2: {
    readonly fontSize: '2.25rem';
    readonly fontWeight: 700;
    readonly lineHeight: 1.25;
    readonly letterSpacing: '-0.025em';
  };
  readonly h1: {
    readonly fontSize: '1.875rem';
    readonly fontWeight: 700;
    readonly lineHeight: 1.25;
  };
  readonly h2: {
    readonly fontSize: '1.5rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.375;
  };
  readonly h3: {
    readonly fontSize: '1.25rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.375;
  };
  readonly h4: {
    readonly fontSize: '1.125rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.5;
  };
  readonly h5: {
    readonly fontSize: '1rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.5;
  };
  readonly h6: {
    readonly fontSize: '0.875rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.5;
  };
  readonly bodyLarge: {
    readonly fontSize: '1.125rem';
    readonly fontWeight: 400;
    readonly lineHeight: 1.625;
  };
  readonly body: {
    readonly fontSize: '1rem';
    readonly fontWeight: 400;
    readonly lineHeight: 1.5;
  };
  readonly bodySmall: {
    readonly fontSize: '0.875rem';
    readonly fontWeight: 400;
    readonly lineHeight: 1.5;
  };
  readonly label: {
    readonly fontSize: '0.875rem';
    readonly fontWeight: 500;
    readonly lineHeight: 1.5;
  };
  readonly labelSmall: {
    readonly fontSize: '0.8125rem';
    readonly fontWeight: 500;
    readonly lineHeight: 1.5;
  };
  readonly caption: {
    readonly fontSize: '0.75rem';
    readonly fontWeight: 400;
    readonly lineHeight: 1.5;
  };
  readonly button: {
    readonly fontSize: '0.875rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.5;
    readonly letterSpacing: '0.025em';
  };
  readonly buttonSmall: {
    readonly fontSize: '0.8125rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.5;
    readonly letterSpacing: '0.025em';
  };
  readonly overline: {
    readonly fontSize: '0.75rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.5;
    readonly letterSpacing: '0.05em';
    readonly textTransform: 'uppercase';
  };
  readonly subtitle: {
    readonly fontSize: '0.875rem';
    readonly fontWeight: 500;
    readonly lineHeight: 1.5;
  };
  readonly code: {
    readonly fontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace';
    readonly fontSize: '0.8125rem';
    readonly fontWeight: 400;
    readonly lineHeight: 1.5;
  };
};
export type FontFamily = typeof fontFamily;
export type FontSize = typeof fontSize;
export type FontWeight = typeof fontWeight;
export type LineHeight = typeof lineHeight;
export type LetterSpacing = typeof letterSpacing;
export type TypographyPresets = typeof typographyPresets;
//# sourceMappingURL=typography.d.ts.map
