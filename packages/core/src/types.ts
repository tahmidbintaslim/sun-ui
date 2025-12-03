/**
 * Sun UI Shared Types
 *
 * Common type definitions used across all components
 */

import type { CSSProperties } from 'react';

/**
 * Variant presets - The 5 standard Sun UI variants
 */
export type SunVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

/**
 * Semantic colors
 */
export type SunColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';

/**
 * Component sizes
 */
export type SunSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Positions for tooltips, popovers, etc.
 */
export type SunPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

/**
 * Anchor positions for drawers
 */
export type SunAnchor = 'top' | 'bottom' | 'left' | 'right';

/**
 * Common component states
 */
export interface SunStateProps {
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Whether the component is in a loading state */
  loading?: boolean;
  /** Whether the component is in an error state */
  error?: boolean;
  /** Whether the component is in a success state */
  success?: boolean;
  /** Whether the component is read-only */
  readOnly?: boolean;
  /** Whether the component is required */
  required?: boolean;
}

/**
 * Base props for all Sun UI components
 */
export interface SunBaseProps {
  /** Unique identifier for the component */
  id?: string;
  /** Additional CSS class names */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Test ID for automated testing */
  'data-testid'?: string;
}

/**
 * Props for components that support variants
 */
export interface SunVariantProps {
  /** Visual variant of the component */
  variant?: SunVariant;
  /** Color scheme of the component */
  color?: SunColor;
}

/**
 * Props for components that support sizing
 */
export interface SunSizeProps {
  /** Size of the component */
  size?: SunSize;
  /** Full width mode */
  fullWidth?: boolean;
}

/**
 * Props for interactive components
 */
export interface SunInteractiveProps extends SunStateProps {
  /** Click handler */
  onClick?: (event: React.MouseEvent) => void;
  /** Focus handler */
  onFocus?: (event: React.FocusEvent) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent) => void;
  /** Keyboard handler */
  onKeyDown?: (event: React.KeyboardEvent) => void;
}

/**
 * Props for form components
 */
export interface SunFormProps extends SunStateProps {
  /** Current value */
  value?: string | number | boolean;
  /** Default value (for uncontrolled mode) */
  defaultValue?: string | number | boolean;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<any>) => void;
  /** Form field name */
  name?: string;
  /** Label text */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Placeholder text */
  placeholder?: string;
}

/**
 * Accessibility props
 */
export interface SunA11yProps {
  /** ARIA label */
  'aria-label'?: string;
  /** ARIA labelledby reference */
  'aria-labelledby'?: string;
  /** ARIA describedby reference */
  'aria-describedby'?: string;
  /** ARIA live region */
  'aria-live'?: 'off' | 'polite' | 'assertive';
  /** ARIA role */
  role?: string;
  /** Tab index */
  tabIndex?: number;
}

/**
 * Icon props for components with icon support
 */
export interface SunIconProps {
  /** Icon to show at the start (left in LTR) */
  startIcon?: React.ReactNode;
  /** Icon to show at the end (right in LTR) */
  endIcon?: React.ReactNode;
  /** Size of the icons */
  iconSize?: SunSize | number;
}

/**
 * Loading props
 */
export interface SunLoadingProps {
  /** Whether component is in loading state */
  loading?: boolean;
  /** Custom loading indicator */
  loadingIndicator?: React.ReactNode;
  /** Position of loading indicator */
  loadingPosition?: 'start' | 'end' | 'center';
}

/**
 * Animation props
 */
export interface SunAnimationProps {
  /** Disable all animations */
  disableAnimation?: boolean;
  /** Entrance animation */
  enterAnimation?: string;
  /** Exit animation */
  exitAnimation?: string;
  /** Animation duration */
  animationDuration?: number | string;
}

/**
 * Common combined props for Sun UI components
 */
export interface SunComponentProps
  extends SunBaseProps, SunVariantProps, SunSizeProps, SunA11yProps {}

/**
 * Combined props for interactive Sun UI components
 */
export interface SunInteractiveComponentProps
  extends SunComponentProps, SunInteractiveProps, SunIconProps, SunLoadingProps {}

/**
 * Combined props for form Sun UI components
 */
export interface SunFormComponentProps extends SunComponentProps, SunFormProps, SunIconProps {}
