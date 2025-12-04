/**
 * Sun UI Spacing & Sizing System
 *
 * Consistent spacing scale based on 4px grid
 * Size tokens for component dimensions
 */
export declare const spacing: {
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
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare const componentSizes: {
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
export declare const radius: {
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
export declare const shadows: {
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
export declare const zIndex: {
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
export declare const breakpoints: {
  readonly xs: '0px';
  readonly sm: '640px';
  readonly md: '768px';
  readonly lg: '1024px';
  readonly xl: '1280px';
  readonly '2xl': '1536px';
};
export type Spacing = typeof spacing;
export type ComponentSizes = typeof componentSizes;
export type Radius = typeof radius;
export type Shadows = typeof shadows;
export type ZIndex = typeof zIndex;
export type Breakpoints = typeof breakpoints;
//# sourceMappingURL=sizing.d.ts.map
