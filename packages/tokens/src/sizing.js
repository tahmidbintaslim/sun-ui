/**
 * Sun UI Spacing & Sizing System
 *
 * Consistent spacing scale based on 4px grid
 * Size tokens for component dimensions
 */
// Spacing scale (based on 4px grid)
export const spacing = {
    0: '0px',
    0.5: '2px',
    1: '4px',
    1.5: '6px',
    2: '8px',
    2.5: '10px',
    3: '12px',
    3.5: '14px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
    28: '112px',
    32: '128px',
    36: '144px',
    40: '160px',
    44: '176px',
    48: '192px',
    52: '208px',
    56: '224px',
    60: '240px',
    64: '256px',
    72: '288px',
    80: '320px',
    96: '384px',
};
export const componentSizes = {
    // Button sizes
    button: {
        xs: { height: '24px', padding: '4px 8px', fontSize: '12px', iconSize: '14px' },
        sm: { height: '32px', padding: '6px 12px', fontSize: '13px', iconSize: '16px' },
        md: { height: '40px', padding: '8px 16px', fontSize: '14px', iconSize: '18px' },
        lg: { height: '48px', padding: '10px 20px', fontSize: '16px', iconSize: '20px' },
        xl: { height: '56px', padding: '12px 24px', fontSize: '18px', iconSize: '24px' },
    },
    // Input/TextField sizes
    input: {
        xs: { height: '28px', padding: '4px 8px', fontSize: '12px' },
        sm: { height: '36px', padding: '6px 12px', fontSize: '13px' },
        md: { height: '44px', padding: '8px 14px', fontSize: '14px' },
        lg: { height: '52px', padding: '10px 16px', fontSize: '16px' },
        xl: { height: '60px', padding: '12px 18px', fontSize: '18px' },
    },
    // Checkbox/Radio sizes
    control: {
        xs: { size: '16px', iconSize: '12px' },
        sm: { size: '18px', iconSize: '14px' },
        md: { size: '22px', iconSize: '16px' },
        lg: { size: '26px', iconSize: '20px' },
        xl: { size: '30px', iconSize: '24px' },
    },
    // Switch sizes
    switch: {
        xs: { width: '32px', height: '18px', thumbSize: '14px' },
        sm: { width: '40px', height: '22px', thumbSize: '18px' },
        md: { width: '52px', height: '28px', thumbSize: '24px' },
        lg: { width: '64px', height: '34px', thumbSize: '30px' },
        xl: { width: '76px', height: '40px', thumbSize: '36px' },
    },
    // Avatar sizes
    avatar: {
        xs: { size: '24px', fontSize: '10px' },
        sm: { size: '32px', fontSize: '12px' },
        md: { size: '40px', fontSize: '14px' },
        lg: { size: '56px', fontSize: '18px' },
        xl: { size: '80px', fontSize: '24px' },
    },
    // Badge sizes
    badge: {
        xs: { minWidth: '14px', height: '14px', fontSize: '10px', padding: '0 4px' },
        sm: { minWidth: '18px', height: '18px', fontSize: '11px', padding: '0 5px' },
        md: { minWidth: '22px', height: '22px', fontSize: '12px', padding: '0 6px' },
        lg: { minWidth: '26px', height: '26px', fontSize: '14px', padding: '0 8px' },
        xl: { minWidth: '32px', height: '32px', fontSize: '16px', padding: '0 10px' },
    },
    // Chip sizes
    chip: {
        xs: { height: '20px', padding: '0 6px', fontSize: '11px' },
        sm: { height: '26px', padding: '0 8px', fontSize: '12px' },
        md: { height: '32px', padding: '0 12px', fontSize: '13px' },
        lg: { height: '38px', padding: '0 16px', fontSize: '14px' },
        xl: { height: '44px', padding: '0 20px', fontSize: '16px' },
    },
    // Icon sizes
    icon: {
        xs: '14px',
        sm: '18px',
        md: '22px',
        lg: '28px',
        xl: '36px',
    },
};
// Border radius presets
export const radius = {
    none: '0px',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '32px',
    full: '9999px',
};
// Shadow presets
export const shadows = {
    none: 'none',
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    // Focus rings
    focus: '0 0 0 3px rgba(14, 165, 233, 0.4)',
    focusDanger: '0 0 0 3px rgba(244, 63, 94, 0.4)',
    focusSuccess: '0 0 0 3px rgba(16, 185, 129, 0.4)',
    focusWarning: '0 0 0 3px rgba(245, 158, 11, 0.4)',
};
// Z-index scale
export const zIndex = {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
};
// Breakpoints
export const breakpoints = {
    xs: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
};
