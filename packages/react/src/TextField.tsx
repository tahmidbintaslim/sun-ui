import {
  CircularProgress,
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
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

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'variant' | 'size' | 'color'> {
  /** Visual style variant */
  variant?: SunVariant;
  /** Color scheme */
  color?: SunColor;
  /** Size of the input */
  size?: SunSize;
  /** Show loading state */
  loading?: boolean;
  /** Start adornment icon/element */
  startIcon?: React.ReactNode;
  /** End adornment icon/element */
  endIcon?: React.ReactNode;
}

// =============================================================================
// STYLE UTILITIES
// =============================================================================

const getColorScale = (color: SunColor) => colors.semantic[color];

const sizeConfig = {
  xs: {
    height: sizing.componentSizes.input.xs,
    fontSize: typography.fontSize.xs,
    padding: `${sizing.spacing[1]} ${sizing.spacing[2]}`,
    labelSize: typography.fontSize.xs,
    borderRadius: sizing.radius.sm,
  },
  sm: {
    height: sizing.componentSizes.input.sm,
    fontSize: typography.fontSize.sm,
    padding: `${sizing.spacing[1]} ${sizing.spacing[3]}`,
    labelSize: typography.fontSize.xs,
    borderRadius: sizing.radius.md,
  },
  md: {
    height: sizing.componentSizes.input.md,
    fontSize: typography.fontSize.base,
    padding: `${sizing.spacing[2]} ${sizing.spacing[3]}`,
    labelSize: typography.fontSize.sm,
    borderRadius: sizing.radius.md,
  },
  lg: {
    height: sizing.componentSizes.input.lg,
    fontSize: typography.fontSize.lg,
    padding: `${sizing.spacing[2]} ${sizing.spacing[4]}`,
    labelSize: typography.fontSize.base,
    borderRadius: sizing.radius.lg,
  },
  xl: {
    height: sizing.componentSizes.input.xl,
    fontSize: typography.fontSize.xl,
    padding: `${sizing.spacing[3]} ${sizing.spacing[5]}`,
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

const StyledTextField = styled(MuiTextField, {
  shouldForwardProp: (prop) => !['sunVariant', 'sunColor', 'sunSize'].includes(prop as string),
})<StyledProps>(({ theme, sunVariant, sunColor, sunSize }) => {
  const colorScale = getColorScale(sunColor);
  const sizeStyles = sizeConfig[sunSize];
  const isDark = theme.palette.mode === 'dark';

  const baseStyles = {
    '& .MuiInputBase-root': {
      fontFamily: typography.fontFamily.sans,
      fontSize: sizeStyles.fontSize,
      minHeight: sizeStyles.height,
      borderRadius: sizeStyles.borderRadius,
      transition: animations.transitions.input,
      '& input': {
        padding: sizeStyles.padding,
      },
    },
    '& .MuiInputLabel-root': {
      fontSize: sizeStyles.labelSize,
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
    '& .MuiInputBase-root.Mui-disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    '& .MuiInputAdornment-root': {
      color: isDark ? colors.semantic.neutral[400] : colors.semantic.neutral[500],
    },
  };

  const variantStyles = {
    solid: {
      '& .MuiInputBase-root': {
        backgroundColor: colorScale.alpha12,
        '& fieldset': {
          borderWidth: '2px',
          borderColor: 'transparent',
        },
        '&:hover:not(.Mui-disabled):not(.Mui-focused)': {
          backgroundColor: colorScale.alpha20,
        },
        '&.Mui-focused': {
          backgroundColor: colorScale.alpha12,
          '& fieldset': {
            borderColor: colorScale.main,
          },
        },
        '&.Mui-error': {
          backgroundColor: colors.semantic.danger.alpha12,
          '& fieldset': {
            borderColor: colors.semantic.danger.main,
          },
        },
      },
    },
    soft: {
      '& .MuiInputBase-root': {
        backgroundColor: isDark ? colors.semantic.neutral[800] : colors.semantic.neutral[100],
        '& fieldset': {
          borderWidth: '2px',
          borderColor: isDark ? colors.semantic.neutral[700] : colors.semantic.neutral[200],
        },
        '&:hover:not(.Mui-disabled):not(.Mui-focused)': {
          backgroundColor: isDark ? colors.semantic.neutral[700] : colors.semantic.neutral[200],
          '& fieldset': {
            borderColor: colorScale.light,
          },
        },
        '&.Mui-focused': {
          backgroundColor: isDark ? colors.semantic.neutral[900] : colors.backgrounds.light.paper,
          '& fieldset': {
            borderColor: colorScale.main,
          },
        },
        '&.Mui-error': {
          '& fieldset': {
            borderColor: colors.semantic.danger.main,
          },
        },
      },
    },
    outlined: {
      '& .MuiInputBase-root': {
        backgroundColor: 'transparent',
        '& fieldset': {
          borderWidth: '2px',
          borderColor: isDark ? colors.semantic.neutral[600] : colors.semantic.neutral[300],
        },
        '&:hover:not(.Mui-disabled):not(.Mui-focused)': {
          '& fieldset': {
            borderColor: colorScale.light,
          },
        },
        '&.Mui-focused': {
          '& fieldset': {
            borderColor: colorScale.main,
          },
        },
        '&.Mui-error': {
          '& fieldset': {
            borderColor: colors.semantic.danger.main,
          },
        },
      },
    },
    ghost: {
      '& .MuiInputBase-root': {
        backgroundColor: 'transparent',
        '& fieldset': {
          borderWidth: '2px',
          borderColor: 'transparent',
        },
        '&:hover:not(.Mui-disabled):not(.Mui-focused)': {
          backgroundColor: isDark ? colors.semantic.neutral[800] : colors.semantic.neutral[100],
        },
        '&.Mui-focused': {
          backgroundColor: 'transparent',
          '& fieldset': {
            borderColor: colorScale.main,
          },
        },
        '&.Mui-error': {
          '& fieldset': {
            borderColor: colors.semantic.danger.main,
          },
        },
      },
    },
    plain: {
      '& .MuiInputBase-root': {
        backgroundColor: 'transparent',
        borderRadius: 0,
        '&:before': {
          borderBottom: `2px solid ${isDark ? colors.semantic.neutral[600] : colors.semantic.neutral[300]}`,
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: `2px solid ${colorScale.light}`,
        },
        '&:after': {
          borderBottom: `2px solid ${colorScale.main}`,
        },
        '&.Mui-error:after': {
          borderBottom: `2px solid ${colors.semantic.danger.main}`,
        },
      },
      '& .MuiInputLabel-root': {
        fontSize: sizeStyles.labelSize,
      },
    },
  };

  return {
    ...baseStyles,
    ...variantStyles[sunVariant],
  };
});

// =============================================================================
// COMPONENT
// =============================================================================

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      variant = 'outlined',
      color = 'primary',
      size = 'md',
      loading = false,
      startIcon,
      endIcon,
      disabled,
      InputProps,
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

    const endAdornment = endIcon && <InputAdornment position="end">{endIcon}</InputAdornment>;

    // Use MUI's standard variant for plain (underline style), outlined for others
    const muiVariant = variant === 'plain' ? 'standard' : 'outlined';

    return (
      <StyledTextField
        ref={ref}
        variant={muiVariant}
        sunVariant={variant}
        sunColor={color}
        sunSize={size}
        disabled={disabled || loading}
        InputProps={{
          ...InputProps,
          startAdornment: startAdornment || InputProps?.startAdornment,
          endAdornment: endAdornment || InputProps?.endAdornment,
        }}
        {...(rest as any)}
      />
    );
  }
);
TextField.displayName = 'TextField';
