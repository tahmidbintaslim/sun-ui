import {
  Box,
  CircularProgress,
  FormControlLabel,
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
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

export interface SwitchProps extends Omit<MuiSwitchProps, 'size' | 'color'> {
  /** Visual style variant */
  variant?: SunVariant;
  /** Color scheme */
  color?: SunColor;
  /** Switch size */
  size?: SunSize;
  /** Label text */
  label?: React.ReactNode;
  /** Show loading state */
  loading?: boolean;
}

// =============================================================================
// STYLE UTILITIES
// =============================================================================

const getColorScale = (color: SunColor) => colors.semantic[color];

const sizeConfig = {
  xs: { width: 32, height: 18, thumb: 14, translate: 14, label: typography.fontSize.xs },
  sm: { width: 40, height: 22, thumb: 18, translate: 18, label: typography.fontSize.sm },
  md: { width: 52, height: 28, thumb: 24, translate: 24, label: typography.fontSize.base },
  lg: { width: 64, height: 34, thumb: 30, translate: 30, label: typography.fontSize.lg },
  xl: { width: 76, height: 40, thumb: 36, translate: 36, label: typography.fontSize.xl },
};

// =============================================================================
// STYLED COMPONENTS
// =============================================================================

interface StyledProps {
  sunVariant: SunVariant;
  sunColor: SunColor;
  sunSize: SunSize;
}

const StyledSwitch = styled(MuiSwitch, {
  shouldForwardProp: (prop) => !['sunVariant', 'sunColor', 'sunSize'].includes(prop as string),
})<StyledProps>(({ sunVariant, sunColor, sunSize }) => {
  const colorScale = getColorScale(sunColor);
  const sizeStyles = sizeConfig[sunSize];
  const padding = (sizeStyles.height - sizeStyles.thumb) / 2;

  const getVariantStyles = (checked: boolean) => {
    switch (sunVariant) {
      case 'solid':
        return checked
          ? { backgroundColor: colorScale.main, border: 'none' }
          : { backgroundColor: colors.semantic.neutral[300], border: 'none' };
      case 'soft':
        return checked
          ? { backgroundColor: colorScale.alpha40, border: `2px solid ${colorScale.main}` }
          : {
              backgroundColor: colors.semantic.neutral[200],
              border: `2px solid ${colors.semantic.neutral[300]}`,
            };
      case 'outlined':
        return checked
          ? { backgroundColor: colorScale.alpha20, border: `2px solid ${colorScale.main}` }
          : { backgroundColor: 'transparent', border: `2px solid ${colors.semantic.neutral[400]}` };
      case 'ghost':
        return checked
          ? { backgroundColor: colorScale.alpha12, border: `2px solid transparent` }
          : { backgroundColor: colors.semantic.neutral[100], border: `2px solid transparent` };
      case 'plain':
      default:
        return checked
          ? { backgroundColor: colors.semantic.neutral[300], border: 'none' }
          : { backgroundColor: colors.semantic.neutral[200], border: 'none' };
    }
  };

  const getThumbColor = (checked: boolean) => {
    if (sunVariant === 'solid') {
      return checked ? '#fff' : colors.semantic.neutral[500];
    }
    return checked ? colorScale.main : colors.semantic.neutral[400];
  };

  return {
    width: sizeStyles.width,
    height: sizeStyles.height,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: padding,
      transition: animations.transitions.button,
      color: getThumbColor(false),
      '&.Mui-checked': {
        transform: `translateX(${sizeStyles.translate}px)`,
        color: getThumbColor(true),
        '& + .MuiSwitch-track': {
          ...getVariantStyles(true),
          opacity: 1,
        },
      },
      '&.Mui-focusVisible': {
        outline: `2px solid ${colorScale.main}`,
        outlineOffset: '2px',
        borderRadius: '50%',
      },
      '&.Mui-disabled': {
        opacity: 0.5,
        '& + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      width: sizeStyles.thumb,
      height: sizeStyles.thumb,
      boxShadow: sizing.shadows.md,
      transition: animations.transitions.button,
    },
    '& .MuiSwitch-track': {
      ...getVariantStyles(false),
      opacity: 1,
      borderRadius: sizeStyles.height / 2,
      boxSizing: 'border-box',
      transition: animations.transitions.button,
    },
  };
});

const StyledLabel = styled(FormControlLabel)<{ sunSize: SunSize }>(({ sunSize }) => ({
  margin: 0,
  gap: sizing.spacing[2],
  '& .MuiFormControlLabel-label': {
    fontSize: sizeConfig[sunSize].label,
    fontFamily: typography.fontFamily.sans,
    color: colors.textColors.light.primary,
    '&.Mui-disabled': {
      color: colors.textColors.light.disabled,
    },
  },
}));

const LoadingOverlay = styled(Box)<{ sunSize: SunSize }>(({ sunSize: _sunSize }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));

// =============================================================================
// COMPONENT
// =============================================================================

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      variant = 'solid',
      color = 'primary',
      size = 'md',
      label,
      loading = false,
      disabled,
      ...rest
    },
    ref
  ) => {
    const sizeStyles = sizeConfig[size];
    const loadingSize = sizeStyles.thumb * 0.6;

    const switchElement = (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <StyledSwitch
          ref={ref}
          sunVariant={variant}
          sunColor={color}
          sunSize={size}
          disabled={disabled || loading}
          {...(rest as any)}
        />
        {loading && (
          <LoadingOverlay sunSize={size}>
            <CircularProgress size={loadingSize} color="inherit" />
          </LoadingOverlay>
        )}
      </Box>
    );

    if (label) {
      return (
        <StyledLabel
          sunSize={size}
          control={switchElement}
          label={label}
          disabled={disabled || loading}
        />
      );
    }

    return switchElement;
  }
);
Switch.displayName = 'Switch';
