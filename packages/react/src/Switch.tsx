import {
    Switch as MuiSwitch,
    SwitchProps as MuiSwitchProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

export interface SwitchProps extends MuiSwitchProps {
    variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}

const StyledSwitch = styled(MuiSwitch, {
    shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant = 'outlined' }: SwitchProps) => ({
    width: 50,
    height: 28,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            ...(variant === 'solid' && {
                color: sunPalette.primary.main,
                '& + .MuiSwitch-track': {
                    backgroundColor: sunPalette.primary.main,
                    opacity: 1,
                },
            }),
            ...(variant === 'soft' && {
                color: 'white',
                '& + .MuiSwitch-track': {
                    backgroundColor: sunPalette.primary.main,
                    opacity: 0.7,
                },
            }),
            ...(variant === 'outlined' && {
                color: sunPalette.primary.main,
                '& + .MuiSwitch-track': {
                    backgroundColor: sunPalette.primary.alpha20,
                    border: `1px solid ${sunPalette.primary.main}`,
                    opacity: 1,
                },
            }),
            ...(variant === 'ghost' && {
                color: sunPalette.primary.main,
                '& + .MuiSwitch-track': {
                    backgroundColor: sunPalette.primary.alpha12,
                    opacity: 1,
                },
            }),
            ...(variant === 'plain' && {
                color: sunPalette.primary.main,
                '& + .MuiSwitch-track': {
                    backgroundColor: sunPalette.neutral[300],
                    opacity: 1,
                },
            }),
        },
    },
    '& .MuiSwitch-track': {
        ...(variant === 'outlined' && {
            border: `1px solid ${sunPalette.neutral[300]}`,
        }),
        backgroundColor: sunPalette.neutral[200],
        opacity: 1,
        borderRadius: 14,
    },
}));

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
    ({ variant, ...rest }, ref) => <StyledSwitch ref={ref} variant={variant} {...(rest as any)} />
);
Switch.displayName = 'Switch';
