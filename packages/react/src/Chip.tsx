import {
    Chip as MuiChip,
    ChipProps as MuiChipProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

type SunUIVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

export interface ChipProps extends Omit<MuiChipProps, 'variant'> {
    variant?: SunUIVariant;
}

const StyledChip = styled(MuiChip, {
    shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant = 'outlined' }) => ({
    ...(variant === 'solid' && {
        backgroundColor: sunPalette.primary.main,
        color: 'white',
        '& .MuiChip-deleteIcon': {
            color: 'rgba(255, 255, 255, 0.7)',
            '&:hover': { color: 'white' },
        },
    }),
    ...(variant === 'soft' && {
        backgroundColor: sunPalette.primary.alpha12,
        color: sunPalette.primary.main,
        border: `1px solid ${sunPalette.primary.alpha20}`,
        '& .MuiChip-deleteIcon': {
            color: sunPalette.primary.main,
        },
    }),
    ...(variant === 'outlined' && {
        backgroundColor: 'transparent',
        color: sunPalette.primary.main,
        border: `1.5px solid ${sunPalette.primary.main}`,
        '& .MuiChip-deleteIcon': {
            color: sunPalette.primary.main,
        },
    }),
    ...(variant === 'ghost' && {
        backgroundColor: 'transparent',
        color: sunPalette.neutral[700],
        border: `1.5px solid ${sunPalette.neutral[300]}`,
        '& .MuiChip-deleteIcon': {
            color: sunPalette.neutral[700],
        },
    }),
    ...(variant === 'plain' && {
        backgroundColor: sunPalette.neutral[100],
        color: sunPalette.neutral[700],
        border: 'none',
        '& .MuiChip-deleteIcon': {
            color: sunPalette.neutral[700],
        },
    }),
}));

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
    ({ variant, ...rest }, ref) => <StyledChip ref={ref} variant={variant} {...(rest as any)} />
);
Chip.displayName = 'Chip';
