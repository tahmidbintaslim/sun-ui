/**
 * Sun UI Design Tokens
 *
 * A comprehensive design token system for building consistent,
 * accessible, and beautiful user interfaces.
 */
export * from './palette';
export * from './animations';
export * from './colors';
export * from './sizing';
export * from './typography';
export declare const colors: {
  semantic: {
    primary: import('./colors').ColorScale;
    secondary: import('./colors').ColorScale;
    success: import('./colors').ColorScale;
    warning: import('./colors').ColorScale;
    danger: import('./colors').ColorScale;
    info: import('./colors').ColorScale;
    neutral: import('./colors').ColorScale;
  };
  backgrounds: {
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
  textColors: {
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
  borderColors: {
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
  primary: import('./colors').ColorScale;
  secondary: import('./colors').ColorScale;
  success: import('./colors').ColorScale;
  warning: import('./colors').ColorScale;
  danger: import('./colors').ColorScale;
  info: import('./colors').ColorScale;
  neutral: import('./colors').ColorScale;
};
export declare const sizing: {
  spacing: {
    readonly 0: '0px';
    readonly 0.5: '2px';
    readonly 1: '4px';
    readonly 1.5: '6px';
    readonly 2: '8px';
    readonly 2.5: '10px';
    readonly 3: '12px';
    readonly 3.5: '14px';
    readonly 4: '16px';
    readonly 5: '20px';
    readonly 6: '24px';
    readonly 7: '28px';
    readonly 8: '32px';
    readonly 9: '36px';
    readonly 10: '40px';
    readonly 11: '44px';
    readonly 12: '48px';
    readonly 14: '56px';
    readonly 16: '64px';
    readonly 20: '80px';
    readonly 24: '96px';
    readonly 28: '112px';
    readonly 32: '128px';
    readonly 36: '144px';
    readonly 40: '160px';
    readonly 44: '176px';
    readonly 48: '192px';
    readonly 52: '208px';
    readonly 56: '224px';
    readonly 60: '240px';
    readonly 64: '256px';
    readonly 72: '288px';
    readonly 80: '320px';
    readonly 96: '384px';
  };
  componentSizes: {
    readonly button: {
      readonly xs: {
        readonly height: '24px';
        readonly padding: '0 8px';
        readonly fontSize: '0.6875rem';
        readonly iconSize: '14px';
      };
      readonly sm: {
        readonly height: '32px';
        readonly padding: '0 12px';
        readonly fontSize: '0.75rem';
        readonly iconSize: '16px';
      };
      readonly md: {
        readonly height: '40px';
        readonly padding: '0 16px';
        readonly fontSize: '0.875rem';
        readonly iconSize: '18px';
      };
      readonly lg: {
        readonly height: '48px';
        readonly padding: '0 20px';
        readonly fontSize: '1.125rem';
        readonly iconSize: '20px';
      };
      readonly xl: {
        readonly height: '56px';
        readonly padding: '0 24px';
        readonly fontSize: '1.375rem';
        readonly iconSize: '24px';
      };
    };
    readonly input: {
      readonly xs: {
        readonly height: '24px';
        readonly padding: '0 8px';
        readonly fontSize: '0.6875rem';
      };
      readonly sm: {
        readonly height: '32px';
        readonly padding: '0 12px';
        readonly fontSize: '0.75rem';
      };
      readonly md: {
        readonly height: '40px';
        readonly padding: '0 14px';
        readonly fontSize: '0.875rem';
      };
      readonly lg: {
        readonly height: '48px';
        readonly padding: '0 16px';
        readonly fontSize: '1.125rem';
      };
      readonly xl: {
        readonly height: '56px';
        readonly padding: '0 18px';
        readonly fontSize: '1.375rem';
      };
    };
    readonly control: {
      readonly xs: {
        readonly size: '16px';
        readonly iconSize: '10px';
      };
      readonly sm: {
        readonly size: '20px';
        readonly iconSize: '12px';
      };
      readonly md: {
        readonly size: '24px';
        readonly iconSize: '14px';
      };
      readonly lg: {
        readonly size: '28px';
        readonly iconSize: '18px';
      };
      readonly xl: {
        readonly size: '32px';
        readonly iconSize: '22px';
      };
    };
    readonly switch: {
      readonly xs: {
        readonly width: '28px';
        readonly height: '16px';
        readonly thumbSize: '12px';
      };
      readonly sm: {
        readonly width: '36px';
        readonly height: '20px';
        readonly thumbSize: '16px';
      };
      readonly md: {
        readonly width: '44px';
        readonly height: '24px';
        readonly thumbSize: '20px';
      };
      readonly lg: {
        readonly width: '52px';
        readonly height: '28px';
        readonly thumbSize: '24px';
      };
      readonly xl: {
        readonly width: '60px';
        readonly height: '32px';
        readonly thumbSize: '28px';
      };
    };
    readonly avatar: {
      readonly xs: {
        readonly size: '24px';
        readonly fontSize: '0.625rem';
      };
      readonly sm: {
        readonly size: '32px';
        readonly fontSize: '0.75rem';
      };
      readonly md: {
        readonly size: '40px';
        readonly fontSize: '0.875rem';
      };
      readonly lg: {
        readonly size: '56px';
        readonly fontSize: '1.125rem';
      };
      readonly xl: {
        readonly size: '80px';
        readonly fontSize: '1.5rem';
      };
    };
    readonly badge: {
      readonly xs: {
        readonly minWidth: '16px';
        readonly height: '16px';
        readonly fontSize: '0.625rem';
        readonly padding: '0 6px';
      };
      readonly sm: {
        readonly minWidth: '20px';
        readonly height: '20px';
        readonly fontSize: '0.75rem';
        readonly padding: '0 8px';
      };
      readonly md: {
        readonly minWidth: '24px';
        readonly height: '24px';
        readonly fontSize: '0.875rem';
        readonly padding: '0 10px';
      };
      readonly lg: {
        readonly minWidth: '28px';
        readonly height: '28px';
        readonly fontSize: '1rem';
        readonly padding: '0 12px';
      };
      readonly xl: {
        readonly minWidth: '32px';
        readonly height: '32px';
        readonly fontSize: '1.125rem';
        readonly padding: '0 14px';
      };
    };
    readonly chip: {
      readonly xs: {
        readonly height: '20px';
        readonly padding: '0 6px';
        readonly fontSize: '0.6875rem';
      };
      readonly sm: {
        readonly height: '26px';
        readonly padding: '0 8px';
        readonly fontSize: '0.75rem';
      };
      readonly md: {
        readonly height: '32px';
        readonly padding: '0 12px';
        readonly fontSize: '0.8125rem';
      };
      readonly lg: {
        readonly height: '38px';
        readonly padding: '0 16px';
        readonly fontSize: '0.875rem';
      };
      readonly xl: {
        readonly height: '44px';
        readonly padding: '0 20px';
        readonly fontSize: '1rem';
      };
    };
    readonly icon: {
      readonly xs: '14px';
      readonly sm: '18px';
      readonly md: '22px';
      readonly lg: '28px';
      readonly xl: '36px';
    };
  };
  radius: {
    readonly none: '0px';
    readonly xs: '2px';
    readonly sm: '4px';
    readonly md: '8px';
    readonly lg: '12px';
    readonly xl: '16px';
    readonly '2xl': '24px';
    readonly '3xl': '32px';
    readonly full: '9999px';
  };
  shadows: {
    readonly none: 'none';
    readonly xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    readonly sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
    readonly md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    readonly lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
    readonly xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    readonly '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
    readonly inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)';
    readonly focus: '0 0 0 3px rgba(14, 165, 233, 0.4)';
    readonly focusDanger: '0 0 0 3px rgba(244, 63, 94, 0.4)';
    readonly focusSuccess: '0 0 0 3px rgba(16, 185, 129, 0.4)';
    readonly focusWarning: '0 0 0 3px rgba(245, 158, 11, 0.4)';
  };
  zIndex: {
    readonly hide: -1;
    readonly auto: 'auto';
    readonly base: 0;
    readonly docked: 10;
    readonly dropdown: 1000;
    readonly sticky: 1100;
    readonly banner: 1200;
    readonly overlay: 1300;
    readonly modal: 1400;
    readonly popover: 1500;
    readonly skipLink: 1600;
    readonly toast: 1700;
    readonly tooltip: 1800;
  };
  breakpoints: {
    readonly xs: '0px';
    readonly sm: '640px';
    readonly md: '768px';
    readonly lg: '1024px';
    readonly xl: '1280px';
    readonly '2xl': '1536px';
  };
};
export declare const typography: {
  display1: {
    readonly fontSize: '3rem';
    readonly fontWeight: 700;
    readonly lineHeight: 1.25;
    readonly letterSpacing: '-0.025em';
  };
  display2: {
    readonly fontSize: '2.25rem';
    readonly fontWeight: 700;
    readonly lineHeight: 1.25;
    readonly letterSpacing: '-0.025em';
  };
  h1: {
    readonly fontSize: '1.875rem';
    readonly fontWeight: 700;
    readonly lineHeight: 1.25;
  };
  h2: {
    readonly fontSize: '1.5rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.375;
  };
  h3: {
    readonly fontSize: '1.25rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.375;
  };
  h4: {
    readonly fontSize: '1.125rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.5;
  };
  h5: {
    readonly fontSize: '1rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.5;
  };
  h6: {
    readonly fontSize: '0.875rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.5;
  };
  bodyLarge: {
    readonly fontSize: '1.125rem';
    readonly fontWeight: 400;
    readonly lineHeight: 1.625;
  };
  body: {
    readonly fontSize: '1rem';
    readonly fontWeight: 400;
    readonly lineHeight: 1.5;
  };
  bodySmall: {
    readonly fontSize: '0.875rem';
    readonly fontWeight: 400;
    readonly lineHeight: 1.5;
  };
  label: {
    readonly fontSize: '0.875rem';
    readonly fontWeight: 500;
    readonly lineHeight: 1.5;
  };
  labelSmall: {
    readonly fontSize: '0.8125rem';
    readonly fontWeight: 500;
    readonly lineHeight: 1.5;
  };
  caption: {
    readonly fontSize: '0.75rem';
    readonly fontWeight: 400;
    readonly lineHeight: 1.5;
  };
  button: {
    readonly fontSize: '0.875rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.5;
    readonly letterSpacing: '0.025em';
  };
  buttonSmall: {
    readonly fontSize: '0.8125rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.5;
    readonly letterSpacing: '0.025em';
  };
  overline: {
    readonly fontSize: '0.75rem';
    readonly fontWeight: 600;
    readonly lineHeight: 1.5;
    readonly letterSpacing: '0.05em';
    readonly textTransform: 'uppercase';
  };
  subtitle: {
    readonly fontSize: '0.875rem';
    readonly fontWeight: 500;
    readonly lineHeight: 1.5;
  };
  code: {
    readonly fontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace';
    readonly fontSize: '0.8125rem';
    readonly fontWeight: 400;
    readonly lineHeight: 1.5;
  };
  fontFamily: {
    readonly sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    readonly serif: '"Georgia", "Times New Roman", Times, serif';
    readonly mono: '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace';
  };
  fontSize: {
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
  fontWeight: {
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
  lineHeight: {
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
  letterSpacing: {
    readonly tighter: '-0.05em';
    readonly tight: '-0.025em';
    readonly normal: '0em';
    readonly wide: '0.025em';
    readonly wider: '0.05em';
    readonly widest: '0.1em';
  };
};
export declare const animations: {
  spin: 'spin 1s linear infinite';
  ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite';
  pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite';
  bounce: 'bounce 1s infinite';
  fadeIn: 'fadeIn 200ms ease-out';
  fadeOut: 'fadeOut 150ms ease-in';
  scaleIn: 'scaleIn 200ms ease-out';
  scaleOut: 'scaleOut 150ms ease-in';
  slideInFromTop: 'slideInFromTop 300ms ease-out';
  slideInFromBottom: 'slideInFromBottom 300ms ease-out';
  slideInFromLeft: 'slideInFromLeft 300ms ease-out';
  slideInFromRight: 'slideInFromRight 300ms ease-out';
  shake: 'shake 0.5s ease-in-out';
  shimmer: 'shimmer 2s infinite linear';
  duration: {
    readonly instant: '0ms';
    readonly fastest: '50ms';
    readonly faster: '100ms';
    readonly fast: '150ms';
    readonly normal: '200ms';
    readonly slow: '300ms';
    readonly slower: '400ms';
    readonly slowest: '500ms';
  };
  easing: {
    readonly linear: 'linear';
    readonly easeIn: 'cubic-bezier(0.4, 0, 1, 1)';
    readonly easeOut: 'cubic-bezier(0, 0, 0.2, 1)';
    readonly easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)';
    readonly easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)';
    readonly easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    readonly easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';
    readonly easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
    readonly easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)';
    readonly easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    readonly easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)';
    readonly easeInBack: 'cubic-bezier(0.36, 0, 0.66, -0.56)';
    readonly easeInOutBack: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)';
    readonly spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  };
  transitions: {
    readonly button: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)';
    readonly buttonHover: 'all 200ms cubic-bezier(0, 0, 0.2, 1)';
    readonly input: 'border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)';
    readonly inputFocus: 'all 200ms cubic-bezier(0, 0, 0.2, 1)';
    readonly fade: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)';
    readonly fadeIn: 'opacity 300ms cubic-bezier(0, 0, 0.2, 1)';
    readonly fadeOut: 'opacity 150ms cubic-bezier(0.4, 0, 1, 1)';
    readonly scale: 'transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    readonly scaleIn: 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)';
    readonly slide: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)';
    readonly slideIn: 'transform 300ms cubic-bezier(0, 0, 0.2, 1)';
    readonly slideOut: 'transform 150ms cubic-bezier(0.4, 0, 1, 1)';
    readonly color: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1)';
    readonly background: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)';
    readonly interactive: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)';
    readonly smooth: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)';
    readonly snappy: 'all 100ms cubic-bezier(0, 0, 0.2, 1)';
  };
  keyframes: {
    readonly fadeIn: '\n    @keyframes fadeIn {\n      from { opacity: 0; }\n      to { opacity: 1; }\n    }\n  ';
    readonly fadeOut: '\n    @keyframes fadeOut {\n      from { opacity: 1; }\n      to { opacity: 0; }\n    }\n  ';
    readonly scaleIn: '\n    @keyframes scaleIn {\n      from { transform: scale(0.95); opacity: 0; }\n      to { transform: scale(1); opacity: 1; }\n    }\n  ';
    readonly scaleOut: '\n    @keyframes scaleOut {\n      from { transform: scale(1); opacity: 1; }\n      to { transform: scale(0.95); opacity: 0; }\n    }\n  ';
    readonly slideInFromTop: '\n    @keyframes slideInFromTop {\n      from { transform: translateY(-100%); opacity: 0; }\n      to { transform: translateY(0); opacity: 1; }\n    }\n  ';
    readonly slideInFromBottom: '\n    @keyframes slideInFromBottom {\n      from { transform: translateY(100%); opacity: 0; }\n      to { transform: translateY(0); opacity: 1; }\n    }\n  ';
    readonly slideInFromLeft: '\n    @keyframes slideInFromLeft {\n      from { transform: translateX(-100%); opacity: 0; }\n      to { transform: translateX(0); opacity: 1; }\n    }\n  ';
    readonly slideInFromRight: '\n    @keyframes slideInFromRight {\n      from { transform: translateX(100%); opacity: 0; }\n      to { transform: translateX(0); opacity: 1; }\n    }\n  ';
    readonly bounce: '\n    @keyframes bounce {\n      0%, 100% { transform: translateY(0); }\n      50% { transform: translateY(-10px); }\n    }\n  ';
    readonly bounceIn: '\n    @keyframes bounceIn {\n      0% { transform: scale(0.3); opacity: 0; }\n      50% { transform: scale(1.05); }\n      70% { transform: scale(0.9); }\n      100% { transform: scale(1); opacity: 1; }\n    }\n  ';
    readonly pulse: '\n    @keyframes pulse {\n      0%, 100% { opacity: 1; }\n      50% { opacity: 0.5; }\n    }\n  ';
    readonly ping: '\n    @keyframes ping {\n      75%, 100% {\n        transform: scale(2);\n        opacity: 0;\n      }\n    }\n  ';
    readonly spin: '\n    @keyframes spin {\n      from { transform: rotate(0deg); }\n      to { transform: rotate(360deg); }\n    }\n  ';
    readonly shake: '\n    @keyframes shake {\n      0%, 100% { transform: translateX(0); }\n      10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }\n      20%, 40%, 60%, 80% { transform: translateX(4px); }\n    }\n  ';
    readonly shimmer: '\n    @keyframes shimmer {\n      0% { background-position: -200% 0; }\n      100% { background-position: 200% 0; }\n    }\n  ';
  };
};
export type { ColorScale, SemanticColor } from './colors';
export type { ComponentSize } from './sizing';
//# sourceMappingURL=index.d.ts.map
