import {
    TextField as MuiTextField,
    TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

type SunUIVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'variant'> {
    variant?: SunUIVariant;
}

const StyledTextField = styled(MuiTextField, {
    shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant = 'outlined' }: TextFieldProps) => ({
    '& .MuiInputBase-root': {
        fontFamily: 'inherit',
        fontSize: '1rem',
        ...(variant === 'solid' && {
            backgroundColor: sunPalette.primary.alpha12,
            border: 'none',
            '& fieldset': { border: 'none' },
            '&:hover': { backgroundColor: sunPalette.primary.alpha20 },
            '&.Mui-focused': {
                backgroundColor: sunPalette.primary.alpha20,
                outline: `2px solid ${sunPalette.primary.main}`,
            },
        }),
        ...(variant === 'soft' && {
            backgroundColor: sunPalette.neutral[100],
            border: `1px solid ${sunPalette.neutral[200]}`,
            '& fieldset': {
                border: 'none',
            },
            '&:hover': { backgroundColor: sunPalette.neutral[200] },
            '&.Mui-focused': {
                backgroundColor: sunPalette.neutral[100],
                outline: `2px solid ${sunPalette.primary.main}`,
            },
        }),
        ...(variant === 'ghost' && {
            backgroundColor: 'transparent',
            border: 'none',
            '& fieldset': { border: 'none' },
            '&:hover': { backgroundColor: 'transparent' },
            '&.Mui-focused': {
                outline: `2px solid ${sunPalette.primary.main}`,
            },
        }),
        ...(variant === 'plain' && {
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: `2px solid ${sunPalette.neutral[300]}`,
            borderRadius: 0,
            '& fieldset': { border: 'none' },
            '&:hover': { borderBottomColor: sunPalette.neutral[400] },
            '&.Mui-focused': {
                borderBottomColor: sunPalette.primary.main,
            },
        }),
    },
}));

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
    ({ variant, ...rest }, ref) => <StyledTextField ref={ref} variant={variant} {...(rest as any)} />
);
TextField.displayName = 'TextField';
