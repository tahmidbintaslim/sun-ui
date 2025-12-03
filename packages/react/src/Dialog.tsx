import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

type SunUIVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

export interface DialogProps extends Omit<MuiDialogProps, 'variant'> {
  variant?: SunUIVariant;
}

const StyledDialog = styled(MuiDialog, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<DialogProps>(({ variant = 'solid', theme }: any) => ({
  '& .MuiDialog-paper': {
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.16)',
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
      border: `1px solid ${sunPalette.neutral[300]}`,
    }),
    ...(variant === 'ghost' && {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      color: theme.palette.text.primary,
      backdropFilter: 'blur(4px)',
    }),
    ...(variant === 'plain' && {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    }),
  },
}));

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const { ...rest } = props;
  return <StyledDialog ref={ref} {...(rest as any)} />;
});
Dialog.displayName = 'Dialog';

export { DialogActions, DialogContent, DialogTitle };
