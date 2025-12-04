/**
 * Sun UI Typography System
 *
 * Font families, sizes, weights, and line heights
 */
// Font families
export const fontFamily = {
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    serif: '"Georgia", "Times New Roman", Times, serif',
    mono: '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace',
};
// Font sizes
export const fontSize = {
    xs: '0.75rem', // 12px
    sm: '0.8125rem', // 13px
    md: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem', // 72px
    '8xl': '6rem', // 96px
    '9xl': '8rem', // 128px
};
// Font weights
export const fontWeight = {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
};
// Line heights
export const lineHeight = {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
    // Specific values
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
};
// Letter spacing
export const letterSpacing = {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
};
// Typography presets for components
export const typographyPresets = {
    // Display styles
    display1: {
        fontSize: fontSize['5xl'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight.tight,
        letterSpacing: letterSpacing.tight,
    },
    display2: {
        fontSize: fontSize['4xl'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight.tight,
        letterSpacing: letterSpacing.tight,
    },
    // Heading styles
    h1: {
        fontSize: fontSize['3xl'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight.tight,
    },
    h2: {
        fontSize: fontSize['2xl'],
        fontWeight: fontWeight.semibold,
        lineHeight: lineHeight.snug,
    },
    h3: {
        fontSize: fontSize.xl,
        fontWeight: fontWeight.semibold,
        lineHeight: lineHeight.snug,
    },
    h4: {
        fontSize: fontSize.lg,
        fontWeight: fontWeight.semibold,
        lineHeight: lineHeight.normal,
    },
    h5: {
        fontSize: fontSize.base,
        fontWeight: fontWeight.semibold,
        lineHeight: lineHeight.normal,
    },
    h6: {
        fontSize: fontSize.md,
        fontWeight: fontWeight.semibold,
        lineHeight: lineHeight.normal,
    },
    // Body styles
    bodyLarge: {
        fontSize: fontSize.lg,
        fontWeight: fontWeight.normal,
        lineHeight: lineHeight.relaxed,
    },
    body: {
        fontSize: fontSize.base,
        fontWeight: fontWeight.normal,
        lineHeight: lineHeight.normal,
    },
    bodySmall: {
        fontSize: fontSize.md,
        fontWeight: fontWeight.normal,
        lineHeight: lineHeight.normal,
    },
    // Label/Caption styles
    label: {
        fontSize: fontSize.md,
        fontWeight: fontWeight.medium,
        lineHeight: lineHeight.normal,
    },
    labelSmall: {
        fontSize: fontSize.sm,
        fontWeight: fontWeight.medium,
        lineHeight: lineHeight.normal,
    },
    caption: {
        fontSize: fontSize.xs,
        fontWeight: fontWeight.normal,
        lineHeight: lineHeight.normal,
    },
    // Button text
    button: {
        fontSize: fontSize.md,
        fontWeight: fontWeight.semibold,
        lineHeight: lineHeight.normal,
        letterSpacing: letterSpacing.wide,
    },
    buttonSmall: {
        fontSize: fontSize.sm,
        fontWeight: fontWeight.semibold,
        lineHeight: lineHeight.normal,
        letterSpacing: letterSpacing.wide,
    },
    // Overline/Subtitle
    overline: {
        fontSize: fontSize.xs,
        fontWeight: fontWeight.semibold,
        lineHeight: lineHeight.normal,
        letterSpacing: letterSpacing.wider,
        textTransform: 'uppercase',
    },
    subtitle: {
        fontSize: fontSize.md,
        fontWeight: fontWeight.medium,
        lineHeight: lineHeight.normal,
    },
    // Code
    code: {
        fontFamily: fontFamily.mono,
        fontSize: fontSize.sm,
        fontWeight: fontWeight.normal,
        lineHeight: lineHeight.normal,
    },
};
//# sourceMappingURL=typography.js.map