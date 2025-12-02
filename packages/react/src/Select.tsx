import {
    MenuItem,
    Select as MuiSelect,
    SelectProps as MuiSelectProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

type SunUIVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

export interface SelectProps extends Omit<MuiSelectProps<string>, 'variant'> {
    variant?: SunUIVariant;
}

const StyledSelect = styled(MuiSelect, {
    shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant = 'outlined' }: SelectProps) => ({
    fontFamily: 'inherit',
    fontSize: '1rem',
    ...(variant === 'solid' && {
        backgroundColor: sunPalette.primary.alpha12,
        border: 'none',
        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
        '&:hover': { backgroundColor: sunPalette.primary.alpha20 },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: `2px solid ${sunPalette.primary.main}`,
        },
    }),
    ...(variant === 'soft' && {
        backgroundColor: sunPalette.neutral[100],
        border: `1px solid ${sunPalette.neutral[200]}`,
        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
        '&:hover': { backgroundColor: sunPalette.neutral[200] },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: `2px solid ${sunPalette.primary.main}`,
        },
    }),
    ...(variant === 'ghost' && {
        backgroundColor: 'transparent',
        border: 'none',
        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
        '&:hover': { backgroundColor: 'transparent' },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: `2px solid ${sunPalette.primary.main}`,
        },
    }),
    ...(variant === 'plain' && {
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: `2px solid ${sunPalette.neutral[300]}`,
        borderRadius: 0,
        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
        '&:hover': { borderBottomColor: sunPalette.neutral[400] },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: `2px solid ${sunPalette.primary.main}`,
        },
    }),
}));

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
    ({ variant, ...rest }, ref) => <StyledSelect ref={ref} {...(rest as any)} />
);
Select.displayName = 'Select';

export { MenuItem };
