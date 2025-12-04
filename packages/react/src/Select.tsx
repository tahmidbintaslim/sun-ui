import {
  CircularProgress,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
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

export interface SelectProps extends Omit<MuiSelectProps<string>, 'variant' | 'size' | 'color'> {
  /** Visual style variant */
  variant?: SunVariant;
  /** Color scheme */
  color?: SunColor;
  /** Select size */
  size?: SunSize;
  /** Show loading state */
  loading?: boolean;
  /** Helper text */
  helperText?: React.ReactNode;
  /** Start adornment icon/element */
  startIcon?: React.ReactNode;
}

// =============================================================================
// STYLE UTILITIES
// =============================================================================

const getColorScale = (color: SunColor) => colors.semantic[color];

const sizeConfig = {
  xs: {
    height: sizing.componentSizes.input.xs.height,
    fontSize: sizing.componentSizes.input.xs.fontSize,
    padding: sizing.componentSizes.input.xs.padding,
    labelSize: typography.fontSize.xs,
    borderRadius: sizing.radius.sm,
  },
  sm: {
    height: sizing.componentSizes.input.sm.height,
    fontSize: sizing.componentSizes.input.sm.fontSize,
    padding: sizing.componentSizes.input.sm.padding,
    labelSize: typography.fontSize.xs,
    borderRadius: sizing.radius.md,
  },
  md: {
    height: sizing.componentSizes.input.md.height,
    fontSize: sizing.componentSizes.input.md.fontSize,
    padding: sizing.componentSizes.input.md.padding,
    labelSize: typography.fontSize.sm,
    borderRadius: sizing.radius.md,
  },
  lg: {
    height: sizing.componentSizes.input.lg.height,
    fontSize: sizing.componentSizes.input.lg.fontSize,
    padding: sizing.componentSizes.input.lg.padding,
    labelSize: typography.fontSize.base,
    borderRadius: sizing.radius.lg,
  },
  xl: {
    height: sizing.componentSizes.input.xl.height,
    fontSize: sizing.componentSizes.input.xl.fontSize,
    padding: sizing.componentSizes.input.xl.padding,
    labelSize: typography.fontSize.lg,
    borderRadius: sizing.radius.lg,
  },
};

// =============================================================================
// STYLED COMPONENT
// =============================================================================

interface StyledProps {
  sunVariant: SunVariant;
  sunColor: SunColor;
  sunSize: SunSize;
}

const StyledSelect = styled(MuiSelect, {
  shouldForwardProp: (prop) => !['sunVariant', 'sunColor', 'sunSize'].includes(prop as string),
})<StyledProps>(({ theme, sunVariant, sunColor, sunSize }) => {
  const colorScale = getColorScale(sunColor);
  const sizeStyles = sizeConfig[sunSize];
  const isDark = theme.palette.mode === 'dark';

  const baseStyles = {
    fontFamily: typography.fontFamily.sans,
    fontSize: sizeStyles.fontSize,
    minHeight: sizeStyles.height,
    borderRadius: sizeStyles.borderRadius,
    transition: animations.transitions.input,
    '& .MuiSelect-select': {
      padding: sizeStyles.padding,
      minHeight: 'unset',
    },
    '&.Mui-disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  };

  const variantStyles = {
    solid: {
      backgroundColor: colorScale.alpha12,
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
        borderColor: 'transparent',
      },
      '&:hover:not(.Mui-disabled):not(.Mui-focused)': {
        backgroundColor: colorScale.alpha20,
      },
      '&.Mui-focused': {
        backgroundColor: colorScale.alpha12,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colorScale.main,
        },
      },
      '&.Mui-error': {
        backgroundColor: colors.semantic.danger.alpha12,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.semantic.danger.main,
        },
      },
    },
    soft: {
      backgroundColor: isDark ? colors.semantic.neutral[800] : colors.semantic.neutral[100],
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
        borderColor: isDark ? colors.semantic.neutral[700] : colors.semantic.neutral[200],
      },
      '&:hover:not(.Mui-disabled):not(.Mui-focused)': {
        backgroundColor: isDark ? colors.semantic.neutral[700] : colors.semantic.neutral[200],
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colorScale.light,
        },
      },
      '&.Mui-focused': {
        backgroundColor: isDark ? colors.semantic.neutral[900] : colors.backgrounds.light.paper,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colorScale.main,
        },
      },
      '&.Mui-error': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.semantic.danger.main,
        },
      },
    },
    outlined: {
      backgroundColor: 'transparent',
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
        borderColor: isDark ? colors.semantic.neutral[600] : colors.semantic.neutral[300],
      },
      '&:hover:not(.Mui-disabled):not(.Mui-focused)': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colorScale.light,
        },
      },
      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colorScale.main,
        },
      },
      '&.Mui-error': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.semantic.danger.main,
        },
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
        borderColor: 'transparent',
      },
      '&:hover:not(.Mui-disabled):not(.Mui-focused)': {
        backgroundColor: isDark ? colors.semantic.neutral[800] : colors.semantic.neutral[100],
      },
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colorScale.main,
        },
      },
      '&.Mui-error': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.semantic.danger.main,
        },
      },
    },
    plain: {
      backgroundColor: 'transparent',
      borderRadius: 0,
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
        borderBottom: `2px solid ${isDark ? colors.semantic.neutral[600] : colors.semantic.neutral[300]}`,
        borderRadius: 0,
      },
      '&:hover:not(.Mui-disabled):not(.Mui-focused)': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderBottomColor: colorScale.light,
        },
      },
      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderBottomColor: colorScale.main,
          borderBottom: `2px solid ${colorScale.main}`,
        },
      },
      '&.Mui-error': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderBottomColor: colors.semantic.danger.main,
        },
      },
    },
  };

  return {
    ...baseStyles,
    ...variantStyles[sunVariant],
  };
});

const StyledFormControl = styled(FormControl, {
  shouldForwardProp: (prop) => !['sunSize', 'sunColor'].includes(prop as string),
})<{ sunSize: SunSize; sunColor: SunColor }>(({ theme, sunSize, sunColor }) => {
  const colorScale = getColorScale(sunColor);
  const isDark = theme.palette.mode === 'dark';
  return {
    '& .MuiInputLabel-root': {
      fontSize: sizeConfig[sunSize].labelSize,
      fontWeight: typography.fontWeight.medium,
      color: isDark ? colors.semantic.neutral[400] : colors.semantic.neutral[600],
      '&.Mui-focused': {
        color: colorScale.main,
      },
      '&.Mui-error': {
        color: colors.semantic.danger.main,
      },
    },
    '& .MuiFormHelperText-root': {
      fontSize: typography.fontSize.xs,
      marginTop: sizing.spacing[1],
    },
  };
});

// =============================================================================
// COMPONENT
// =============================================================================

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      variant = 'outlined',
      color = 'primary',
      size = 'md',
      loading = false,
      label,
      helperText,
      error,
      disabled,
      startIcon,
      children,
      ...rest
    },
    ref
  ) => {
    const startAdornment = (startIcon || loading) && (
      <InputAdornment position="start">
        {loading ? (
          <CircularProgress
            size={size === 'xs' || size === 'sm' ? 14 : size === 'md' ? 16 : 20}
            color="inherit"
          />
        ) : (
          startIcon
        )}
      </InputAdornment>
    );

    return (
      <StyledFormControl
        sunSize={size}
        sunColor={color}
        error={error}
        disabled={disabled || loading}
        fullWidth
      >
        {label && <InputLabel>{label}</InputLabel>}
        <StyledSelect
          ref={ref}
          variant="outlined"
          sunVariant={variant}
          sunColor={color}
          sunSize={size}
          label={label}
          disabled={disabled || loading}
          error={error}
          startAdornment={startAdornment}
          {...(rest as any)}
        >
          {children}
        </StyledSelect>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </StyledFormControl>
    );
  }
);
Select.displayName = 'Select';

export { MenuItem };
