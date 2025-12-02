import {
    Radio as MuiRadio,
    RadioProps as MuiRadioProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

export interface RadioProps extends MuiRadioProps {
    variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}

const StyledRadio = styled(MuiRadio, {
    shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant = 'outlined' }: RadioProps) => ({
    padding: 8,
    ...(variant === 'solid' && {
        color: sunPalette.neutral[300],
        '&.Mui-checked': {
            color: sunPalette.primary.main,
            backgroundColor: sunPalette.primary.alpha12,
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
        color: sunPalette.neutral[300],
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

export const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(
    ({ variant, ...rest }, ref) => <StyledRadio ref={ref} {...(rest as any)} />
);
Radio.displayName = 'Radio';
