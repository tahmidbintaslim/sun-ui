import { Popover as MuiPopover, PopoverProps as MuiPopoverProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

type SunUIVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

export interface PopoverProps extends Omit<MuiPopoverProps, 'variant'> {
  variant?: SunUIVariant;
}

const StyledPopover = styled(MuiPopover, {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant = 'solid' }: PopoverProps) => ({
  '& .MuiPopover-paper': {
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
    ...(variant === 'solid' && {
      backgroundColor: sunPalette.neutral[900],
      color: sunPalette.neutral[50],
    }),
    ...(variant === 'soft' && {
      backgroundColor: sunPalette.neutral[100],
      color: sunPalette.neutral[900],
    }),
    ...(variant === 'outlined' && {
      backgroundColor: sunPalette.neutral[50],
      color: sunPalette.neutral[900],
      border: `1px solid ${sunPalette.neutral[300]}`,
    }),
    ...(variant === 'ghost' && {
      backgroundColor: 'transparent',
      color: sunPalette.neutral[900],
      border: `1px solid ${sunPalette.neutral[300]}`,
    }),
    ...(variant === 'plain' && {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      color: sunPalette.neutral[900],
    }),
  },
}));

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  const { ...rest } = props;
  return <StyledPopover ref={ref} {...(rest as any)} />;
});
Popover.displayName = 'Popover';
