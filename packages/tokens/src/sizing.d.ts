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
      readonly padding: '4px 8px';
      readonly fontSize: '12px';
      readonly iconSize: '14px';
    };
    readonly sm: {
      readonly height: '32px';
      readonly padding: '6px 12px';
      readonly fontSize: '13px';
      readonly iconSize: '16px';
    };
    readonly md: {
      readonly height: '40px';
      readonly padding: '8px 16px';
      readonly fontSize: '14px';
      readonly iconSize: '18px';
    };
    readonly lg: {
      readonly height: '48px';
      readonly padding: '10px 20px';
      readonly fontSize: '16px';
      readonly iconSize: '20px';
    };
    readonly xl: {
      readonly height: '56px';
      readonly padding: '12px 24px';
      readonly fontSize: '18px';
      readonly iconSize: '24px';
    };
  };
  readonly input: {
    readonly xs: {
      readonly height: '28px';
      readonly padding: '4px 8px';
      readonly fontSize: '12px';
    };
    readonly sm: {
      readonly height: '36px';
      readonly padding: '6px 12px';
      readonly fontSize: '13px';
    };
    readonly md: {
      readonly height: '44px';
      readonly padding: '8px 14px';
      readonly fontSize: '14px';
    };
    readonly lg: {
      readonly height: '52px';
      readonly padding: '10px 16px';
      readonly fontSize: '16px';
    };
    readonly xl: {
      readonly height: '60px';
      readonly padding: '12px 18px';
      readonly fontSize: '18px';
    };
  };
  readonly control: {
    readonly xs: {
      readonly size: '16px';
      readonly iconSize: '12px';
    };
    readonly sm: {
      readonly size: '18px';
      readonly iconSize: '14px';
    };
    readonly md: {
      readonly size: '22px';
      readonly iconSize: '16px';
    };
    readonly lg: {
      readonly size: '26px';
      readonly iconSize: '20px';
    };
    readonly xl: {
      readonly size: '30px';
      readonly iconSize: '24px';
    };
  };
  readonly switch: {
    readonly xs: {
      readonly width: '32px';
      readonly height: '18px';
      readonly thumbSize: '14px';
    };
    readonly sm: {
      readonly width: '40px';
      readonly height: '22px';
      readonly thumbSize: '18px';
    };
    readonly md: {
      readonly width: '52px';
      readonly height: '28px';
      readonly thumbSize: '24px';
    };
    readonly lg: {
      readonly width: '64px';
      readonly height: '34px';
      readonly thumbSize: '30px';
    };
    readonly xl: {
      readonly width: '76px';
      readonly height: '40px';
      readonly thumbSize: '36px';
    };
  };
  readonly avatar: {
    readonly xs: {
      readonly size: '24px';
      readonly fontSize: '10px';
    };
    readonly sm: {
      readonly size: '32px';
      readonly fontSize: '12px';
    };
    readonly md: {
      readonly size: '40px';
      readonly fontSize: '14px';
    };
    readonly lg: {
      readonly size: '56px';
      readonly fontSize: '18px';
    };
    readonly xl: {
      readonly size: '80px';
      readonly fontSize: '24px';
    };
  };
  readonly badge: {
    readonly xs: {
      readonly minWidth: '14px';
      readonly height: '14px';
      readonly fontSize: '10px';
      readonly padding: '0 4px';
    };
    readonly sm: {
      readonly minWidth: '18px';
      readonly height: '18px';
      readonly fontSize: '11px';
      readonly padding: '0 5px';
    };
    readonly md: {
      readonly minWidth: '22px';
      readonly height: '22px';
      readonly fontSize: '12px';
      readonly padding: '0 6px';
    };
    readonly lg: {
      readonly minWidth: '26px';
      readonly height: '26px';
      readonly fontSize: '14px';
      readonly padding: '0 8px';
    };
    readonly xl: {
      readonly minWidth: '32px';
      readonly height: '32px';
      readonly fontSize: '16px';
      readonly padding: '0 10px';
    };
  };
  readonly chip: {
    readonly xs: {
      readonly height: '20px';
      readonly padding: '0 6px';
      readonly fontSize: '11px';
    };
    readonly sm: {
      readonly height: '26px';
      readonly padding: '0 8px';
      readonly fontSize: '12px';
    };
    readonly md: {
      readonly height: '32px';
      readonly padding: '0 12px';
      readonly fontSize: '13px';
    };
    readonly lg: {
      readonly height: '38px';
      readonly padding: '0 16px';
      readonly fontSize: '14px';
    };
    readonly xl: {
      readonly height: '44px';
      readonly padding: '0 20px';
      readonly fontSize: '16px';
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
