import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

type SunUIVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

export interface TooltipProps extends Omit<MuiTooltipProps, 'variant'> {
  variant?: SunUIVariant;
}

const getVariantStyles = (variant: SunUIVariant = 'solid') => {
  const baseStyles = {
    fontSize: '12px',
    fontWeight: 500,
    padding: '8px 12px',
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  };

  const variantStyles = {
    solid: {
      backgroundColor: sunPalette.neutral[900],
      color: sunPalette.neutral[50],
    },
    soft: {
      backgroundColor: sunPalette.neutral[200],
      color: sunPalette.neutral[900],
    },
    outlined: {
      backgroundColor: sunPalette.neutral[50],
      color: sunPalette.neutral[900],
      border: `1px solid ${sunPalette.neutral[300]}`,
    },
    ghost: {
      backgroundColor: sunPalette.primary.alpha20,
      color: sunPalette.primary.main,
    },
    plain: {
      backgroundColor: 'white',
      color: sunPalette.neutral[900],
      border: `1px solid ${sunPalette.neutral[200]}`,
    },
  };

  return { ...baseStyles, ...variantStyles[variant] };
};

const getArrowStyles = (variant: SunUIVariant = 'solid') => {
  const arrowColors = {
    solid: sunPalette.neutral[900],
    soft: sunPalette.neutral[200],
    outlined: sunPalette.neutral[50],
    ghost: sunPalette.primary.alpha20,
    plain: 'white',
  };

  return { color: arrowColors[variant] };
};

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ variant = 'solid', slotProps, ...rest }, ref) => {
    return (
      <MuiTooltip
        ref={ref}
        slotProps={{
          ...slotProps,
          tooltip: {
            ...slotProps?.tooltip,
            sx: {
              ...getVariantStyles(variant),
              ...(typeof slotProps?.tooltip === 'object' && 'sx' in slotProps.tooltip
                ? slotProps.tooltip.sx
                : {}),
            },
          },
          arrow: {
            ...slotProps?.arrow,
            sx: {
              ...getArrowStyles(variant),
              ...(typeof slotProps?.arrow === 'object' && 'sx' in slotProps.arrow
                ? slotProps.arrow.sx
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
