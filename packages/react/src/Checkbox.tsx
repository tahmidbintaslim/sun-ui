import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

export interface CheckboxProps extends MuiCheckboxProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}

const StyledCheckbox = styled(MuiCheckbox, {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant = 'outlined' }: CheckboxProps) => ({
  padding: 8,
  ...(variant === 'solid' && {
    color: sunPalette.neutral[300],
    '&.Mui-checked': {
      backgroundColor: sunPalette.primary.main,
      color: 'white',
    },
    '&:hover': {
      backgroundColor: sunPalette.primary.alpha12,
    },
  }),
  ...(variant === 'soft' && {
    color: sunPalette.neutral[300],
    '&.Mui-checked': {
      color: sunPalette.primary.main,
      backgroundColor: sunPalette.primary.alpha12,
    },
    '&:hover': {
      backgroundColor: sunPalette.neutral[100],
    },
  }),
  ...(variant === 'outlined' && {
    border: `1px solid ${sunPalette.neutral[300]}`,
    '&.Mui-checked': {
      color: sunPalette.primary.main,
      borderColor: sunPalette.primary.main,
    },
  }),
  ...(variant === 'ghost' && {
    color: sunPalette.neutral[400],
    '&.Mui-checked': {
      color: sunPalette.primary.main,
    },
  }),
  ...(variant === 'plain' && {
    color: sunPalette.neutral[400],
    '&.Mui-checked': {
      color: sunPalette.primary.main,
    },
  }),
}));

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ variant, ...rest }, ref) => <StyledCheckbox ref={ref} variant={variant} {...(rest as any)} />
);
Checkbox.displayName = 'Checkbox';
