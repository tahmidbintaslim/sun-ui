import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

type SunUIVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

export interface TooltipProps extends Omit<MuiTooltipProps, 'variant'> {
  variant?: SunUIVariant;
}

const StyledTooltip = styled(MuiTooltip, {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant = 'solid' }: TooltipProps) => ({
  '& .MuiTooltip-tooltip': {
    fontSize: '12px',
    fontWeight: 500,
    padding: '8px 12px',
    borderRadius: '4px',
    ...(variant === 'solid' && {
      backgroundColor: sunPalette.neutral[900],
      color: sunPalette.neutral[50],
    }),
    ...(variant === 'soft' && {
      backgroundColor: sunPalette.neutral[200],
      color: sunPalette.neutral[900],
    }),
    ...(variant === 'outlined' && {
      backgroundColor: sunPalette.neutral[50],
      color: sunPalette.neutral[900],
      border: `1px solid ${sunPalette.neutral[300]}`,
    }),
    ...(variant === 'ghost' && {
      backgroundColor: sunPalette.primary.alpha20,
      color: sunPalette.primary.main,
    }),
    ...(variant === 'plain' && {
      backgroundColor: 'transparent',
      color: sunPalette.neutral[900],
    }),
  },
  '& .MuiTooltip-arrow': {
    ...(variant === 'solid' && {
      color: sunPalette.neutral[900],
    }),
    ...(variant === 'soft' && {
      color: sunPalette.neutral[200],
    }),
    ...(variant === 'outlined' && {
      color: sunPalette.neutral[50],
    }),
    ...(variant === 'ghost' && {
      color: sunPalette.primary.alpha20,
    }),
    ...(variant === 'plain' && {
      color: 'transparent',
    }),
  },
}));

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const { ...rest } = props;
  return <StyledTooltip ref={ref} {...(rest as any)} />;
});
Tooltip.displayName = 'Tooltip';
