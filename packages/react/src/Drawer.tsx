import { Drawer as MuiDrawer, DrawerProps as MuiDrawerProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

type SunUIVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

export interface DrawerProps extends Omit<MuiDrawerProps, 'variant'> {
  variant?: SunUIVariant;
}

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<DrawerProps>(({ variant = 'solid', theme }: any) => ({
  '& .MuiDrawer-paper': {
    borderRadius: 0,
    boxShadow: '-2px 4px 16px rgba(0, 0, 0, 0.12)',
    ...(variant === 'solid' && {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    }),
    ...(variant === 'soft' && {
      backgroundColor: sunPalette.neutral[100],
      color: theme.palette.text.primary,
    }),
    ...(variant === 'outlined' && {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      borderRight: `1px solid ${sunPalette.neutral[300]}`,
    }),
    ...(variant === 'ghost' && {
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      color: theme.palette.text.primary,
      backdropFilter: 'blur(2px)',
    }),
    ...(variant === 'plain' && {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    }),
  },
}));

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const { ...rest } = props;
  return <StyledDrawer ref={ref} {...(rest as any)} />;
});
Drawer.displayName = 'Drawer';
