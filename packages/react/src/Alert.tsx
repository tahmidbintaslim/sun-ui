import {
    Alert as MuiAlert,
    AlertProps as MuiAlertProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

type SunUIVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

export interface AlertProps extends Omit<MuiAlertProps, 'variant'> {
    variant?: SunUIVariant;
}

const StyledAlert = styled(MuiAlert, {
    shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant = 'outlined', severity = 'info' }) => {
    const severityColor = {
        success: sunPalette.primary,
        error: { main: '#d32f2f', alpha12: 'rgba(211, 47, 47, 0.12)', alpha20: 'rgba(211, 47, 47, 0.2)' },
        warning: { main: '#f57c00', alpha12: 'rgba(245, 124, 0, 0.12)', alpha20: 'rgba(245, 124, 0, 0.2)' },
        info: sunPalette.primary,
    }[severity] || sunPalette.primary;

    return {
        ...(variant === 'solid' && {
            backgroundColor: severityColor.main,
            color: 'white',
            border: 'none',
            '& .MuiAlert-icon': {
                color: 'white',
            },
        }),
        ...(variant === 'soft' && {
            backgroundColor: severityColor.alpha12,
            color: severityColor.main,
            border: `1px solid ${severityColor.alpha20}`,
            '& .MuiAlert-icon': {
                color: severityColor.main,
            },
        }),
        ...(variant === 'outlined' && {
            backgroundColor: 'transparent',
            color: severityColor.main,
            border: `1px solid ${severityColor.main}`,
            '& .MuiAlert-icon': {
                color: severityColor.main,
            },
        }),
        ...(variant === 'ghost' && {
            backgroundColor: 'transparent',
            color: severityColor.main,
            border: `1px solid ${severityColor.alpha20}`,
            '& .MuiAlert-icon': {
                color: severityColor.main,
            },
        }),
        ...(variant === 'plain' && {
            backgroundColor: severityColor.alpha12,
            color: severityColor.main,
            border: 'none',
            '& .MuiAlert-icon': {
                color: severityColor.main,
            },
        }),
    };
});

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ variant, ...rest }, ref) => <StyledAlert ref={ref} variant={variant} {...(rest as any)} />
);
Alert.displayName = 'Alert';
