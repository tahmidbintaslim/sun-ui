import {
  CircularProgress,
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { animations, colors, sizing, typography } from '@sun-ui/tokens';
import * as React from 'react';

// =============================================================================
// TYPES
// =============================================================================

type SunVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
type SunColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
type SunSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface TooltipProps extends Omit<MuiTooltipProps, 'variant'> {
  /** Visual style variant */
  variant?: SunVariant;
  /** Color scheme */
  color?: SunColor;
  /** Tooltip size */
  size?: SunSize;
  /** Show loading state */
  loading?: boolean;
  /** Custom loading indicator */
  loadingIndicator?: React.ReactNode;
  /** Disable animations */
  disableAnimation?: boolean;
}

// =============================================================================
// STYLE UTILITIES
// =============================================================================

const getColorScale = (color: SunColor) => colors.semantic[color];

const sizeConfig = {
  xs: {
    fontSize: typography.fontSize.xs,
    padding: `${sizing.spacing[1]} ${sizing.spacing[2]}`,
    borderRadius: sizing.radius.sm,
    maxWidth: 180,
  },
  sm: {
    fontSize: typography.fontSize.sm,
    padding: `${sizing.spacing[1]} ${sizing.spacing[3]}`,
    borderRadius: sizing.radius.md,
    maxWidth: 220,
  },
  md: {
    fontSize: typography.fontSize.base,
    padding: `${sizing.spacing[2]} ${sizing.spacing[3]}`,
    borderRadius: sizing.radius.md,
    maxWidth: 280,
  },
  lg: {
    fontSize: typography.fontSize.lg,
    padding: `${sizing.spacing[2]} ${sizing.spacing[4]}`,
    borderRadius: sizing.radius.lg,
    maxWidth: 340,
  },
  xl: {
    fontSize: typography.fontSize.xl,
    padding: `${sizing.spacing[3]} ${sizing.spacing[5]}`,
    borderRadius: sizing.radius.lg,
    maxWidth: 400,
  },
};

const getVariantStyles = (variant: SunVariant, color: SunColor, isDark: boolean) => {
  const colorScale = getColorScale(color);
  const neutralScale = colors.semantic.neutral;

  const variants: Record<SunVariant, object> = {
    solid: {
      backgroundColor: colorScale.main,
      color: colorScale.contrastText,
      boxShadow: sizing.shadows.lg,
    },
    soft: {
      backgroundColor: isDark ? colorScale.alpha30 : colorScale.alpha20,
      color: isDark ? colorScale.light : colorScale.dark,
      boxShadow: sizing.shadows.md,
    },
    outlined: {
      backgroundColor: isDark ? neutralScale[800] : neutralScale[50],
      color: isDark ? neutralScale[100] : neutralScale[900],
      border: `1.5px solid ${colorScale.main}`,
      boxShadow: sizing.shadows.md,
    },
    ghost: {
      backgroundColor: isDark ? neutralScale[800] : neutralScale[100],
      color: isDark ? neutralScale[100] : neutralScale[800],
      boxShadow: sizing.shadows.sm,
    },
    plain: {
      backgroundColor: isDark ? neutralScale[900] : '#ffffff',
      color: isDark ? neutralScale[100] : neutralScale[900],
      border: `1px solid ${isDark ? neutralScale[700] : neutralScale[200]}`,
      boxShadow: sizing.shadows.md,
    },
  };

  return variants[variant];
};

const getArrowStyles = (variant: SunVariant, color: SunColor, isDark: boolean) => {
  const colorScale = getColorScale(color);
  const neutralScale = colors.semantic.neutral;

  const arrowColors: Record<SunVariant, string> = {
    solid: colorScale.main,
    soft: isDark ? colorScale.alpha30 : colorScale.alpha20,
    outlined: isDark ? neutralScale[800] : neutralScale[50],
    ghost: isDark ? neutralScale[800] : neutralScale[100],
    plain: isDark ? neutralScale[900] : '#ffffff',
  };

  return { color: arrowColors[variant] };
};

// =============================================================================
// STYLED COMPONENTS
// =============================================================================

const LoadingWrapper = styled('span')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: sizing.spacing[2],
});

// =============================================================================
// COMPONENT
// =============================================================================

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      variant = 'solid',
      color = 'neutral',
      size = 'md',
      loading = false,
      loadingIndicator,
      disableAnimation = false,
      title,
      slotProps,
      TransitionProps,
      ...rest
    },
    ref
  ) => {
    const sizeStyles = sizeConfig[size];

    // Render loading content if loading
    const renderTitle = () => {
      if (loading) {
        return (
          <LoadingWrapper>
            {loadingIndicator || (
              <CircularProgress
                size={size === 'xs' || size === 'sm' ? 12 : size === 'md' ? 14 : 16}
                color="inherit"
                sx={{ opacity: 0.8 }}
              />
            )}
            {title}
          </LoadingWrapper>
        );
      }
      return title;
    };

    return (
      <MuiTooltip
        ref={ref}
        title={renderTitle()}
        TransitionProps={{
          ...TransitionProps,
          timeout: disableAnimation ? 0 : TransitionProps?.timeout,
        }}
        slotProps={{
          ...slotProps,
          tooltip: {
            ...slotProps?.tooltip,
            sx: {
              fontFamily: typography.fontFamily.sans,
              fontWeight: typography.fontWeight.medium,
              fontSize: sizeStyles.fontSize,
              padding: sizeStyles.padding,
              borderRadius: sizeStyles.borderRadius,
              maxWidth: sizeStyles.maxWidth,
              transition: disableAnimation ? 'none' : animations.transitions.smooth,
              ...getVariantStyles(variant, color, false),
              '[data-theme="dark"] &': getVariantStyles(variant, color, true),
              ...(typeof slotProps?.tooltip === 'object' &&
              slotProps.tooltip &&
              'sx' in slotProps.tooltip
                ? ((slotProps.tooltip as { sx?: object }).sx as object)
                : {}),
            },
          },
          arrow: {
            ...slotProps?.arrow,
            sx: {
              ...getArrowStyles(variant, color, false),
              '[data-theme="dark"] &': getArrowStyles(variant, color, true),
              ...(typeof slotProps?.arrow === 'object' && slotProps.arrow && 'sx' in slotProps.arrow
                ? ((slotProps.arrow as { sx?: object }).sx as object)
                : {}),
            },
          },
        }}
        {...rest}
      />
    );
  }
);
Tooltip.displayName = 'Tooltip';
