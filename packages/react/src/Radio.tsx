import {
  Box,
  CircularProgress,
  FormControlLabel,
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
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

export interface RadioProps extends Omit<MuiRadioProps, 'size' | 'color'> {
  /** Visual style variant */
  variant?: SunVariant;
  /** Color scheme */
  color?: SunColor;
  /** Radio size */
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
  xs: { radio: 16, dot: 6, label: typography.fontSize.xs },
  sm: { radio: 18, dot: 7, label: typography.fontSize.sm },
  md: { radio: 22, dot: 9, label: typography.fontSize.base },
  lg: { radio: 26, dot: 11, label: typography.fontSize.lg },
  xl: { radio: 32, dot: 14, label: typography.fontSize.xl },
};

// =============================================================================
// CUSTOM RADIO ICONS
// =============================================================================

interface IconProps {
  size: number;
  dotSize: number;
  variant: SunVariant;
  colorScale: ReturnType<typeof getColorScale>;
  checked?: boolean;
}

const RadioIcon = ({ size, dotSize, variant, colorScale, checked }: IconProps) => {
  const baseStyles: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: animations.transitions.button,
  };

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'solid':
        return {
          backgroundColor: checked ? colorScale.main : colors.semantic.neutral[200],
          border: 'none',
        };
      case 'soft':
        return {
          backgroundColor: checked ? colorScale.alpha20 : colors.semantic.neutral[100],
          border: `2px solid ${checked ? colorScale.main : colors.semantic.neutral[300]}`,
        };
      case 'outlined':
        return {
          backgroundColor: 'transparent',
          border: `2px solid ${checked ? colorScale.main : colors.semantic.neutral[400]}`,
        };
      case 'ghost':
        return {
          backgroundColor: checked ? colorScale.alpha12 : 'transparent',
          border: `2px solid ${checked ? colorScale.main : 'transparent'}`,
        };
      case 'plain':
      default:
        return {
          backgroundColor: 'transparent',
          border: `2px solid ${checked ? colorScale.main : colors.semantic.neutral[400]}`,
        };
    }
  };

  const dotColor = variant === 'solid' && checked ? '#fff' : colorScale.main;

  return (
    <Box sx={{ ...baseStyles, ...getVariantStyles() }}>
      {checked && (
        <Box
          sx={{
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            backgroundColor: dotColor,
            transition: animations.transitions.scale,
          }}
        />
      )}
    </Box>
  );
};

// =============================================================================
// STYLED COMPONENTS
// =============================================================================

interface StyledProps {
  sunSize: SunSize;
}

const StyledRadio = styled(MuiRadio)<StyledProps>(({ sunSize: _sunSize }) => ({
  padding: sizing.spacing[1],
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&.Mui-focusVisible': {
    outline: `2px solid ${colors.semantic.primary.main}`,
    outlineOffset: '2px',
    borderRadius: '50%',
  },
  '&.Mui-disabled': {
    opacity: 0.5,
  },
}));

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

// =============================================================================
// COMPONENT
// =============================================================================

export const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(
  (
    {
      variant = 'outlined',
      color = 'primary',
      size = 'md',
      label,
      loading = false,
      checked,
      disabled,
      ...rest
    },
    ref
  ) => {
    const colorScale = getColorScale(color);
    const sizeStyles = sizeConfig[size];

    const radioElement = (
      <StyledRadio
        ref={ref}
        sunSize={size}
        checked={checked}
        disabled={disabled || loading}
        icon={
          loading ? (
            <CircularProgress size={sizeStyles.dot * 2} color="inherit" />
          ) : (
            <RadioIcon
              size={sizeStyles.radio}
              dotSize={sizeStyles.dot}
              variant={variant}
              colorScale={colorScale}
            />
          )
        }
        checkedIcon={
          <RadioIcon
            size={sizeStyles.radio}
            dotSize={sizeStyles.dot}
            variant={variant}
            colorScale={colorScale}
            checked
          />
        }
        {...rest}
      />
    );

    if (label) {
      return (
        <StyledLabel
          sunSize={size}
          control={radioElement}
          label={label}
          disabled={disabled || loading}
        />
      );
    }

    return radioElement;
  }
);
Radio.displayName = 'Radio';
