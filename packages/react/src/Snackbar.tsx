import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
  SnackbarContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

type SunUIVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

export interface SnackbarProps extends Omit<MuiSnackbarProps, 'variant'> {
  variant?: SunUIVariant;
}

const StyledSnackbar = styled(MuiSnackbar, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<SnackbarProps>(({ variant = 'solid' }: any) => ({
  '& .MuiSnackbarContent-root': {
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
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
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      color: sunPalette.neutral[900],
      backdropFilter: 'blur(4px)',
    }),
  },
}));

export const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>((props, ref) => {
  const { ...rest } = props;
  return <StyledSnackbar ref={ref} {...(rest as any)} />;
});
Snackbar.displayName = 'Snackbar';

export { SnackbarContent };
