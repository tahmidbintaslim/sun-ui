import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

type SunUIVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
    variant?: SunUIVariant;
}

const StyledButton = styled(MuiButton, {
    shouldForwardProp: (prop) => !['variant'].includes(prop as string),
})(({ variant = 'solid' }: ButtonProps) => ({
    textTransform: 'none',
    fontWeight: 600,
    padding: '8px 16px',
    ...(variant === 'solid' && {
        backgroundColor: sunPalette.primary.main,
        color: 'white',
        '&:hover': { backgroundColor: sunPalette.primary.dark },
    }),
    ...(variant === 'soft' && {
        backgroundColor: sunPalette.primary.alpha12,
        color: sunPalette.primary.main,
        '&:hover': { backgroundColor: sunPalette.primary.alpha20 },
    }),
    ...(variant === 'outlined' && {
        backgroundColor: 'transparent',
        border: `1.5px solid ${sunPalette.primary.main}`,
        color: sunPalette.primary.main,
        '&:hover': { backgroundColor: sunPalette.primary.alpha12 },
    }),
    ...(variant === 'ghost' && {
        background: 'transparent',
        border: `1.5px solid ${sunPalette.neutral[300]}`,
        color: sunPalette.neutral[700],
        '&:hover': { background: sunPalette.neutral[100] },
    }),
    ...(variant === 'plain' && {
        backgroundColor: 'transparent',
        color: sunPalette.primary.main,
        '&:hover': { backgroundColor: sunPalette.primary.alpha12 },
    }),
}));

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, ...rest }, ref) => <StyledButton ref={ref} {...(rest as any)} />
);
Button.displayName = 'Button';
