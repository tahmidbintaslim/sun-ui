import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

type SunUIVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

export interface CardProps extends Omit<MuiCardProps, 'variant'> {
  variant?: SunUIVariant;
}

const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant = 'outlined', theme }: any) => ({
  ...(variant === 'solid' && {
    backgroundColor: sunPalette.primary.main,
    color: 'white',
    boxShadow: `0 4px 12px ${sunPalette.primary.alpha20}`,
  }),
  ...(variant === 'soft' && {
    backgroundColor: sunPalette.primary.alpha12,
    color: theme.palette.text.primary,
    border: `1px solid ${sunPalette.primary.alpha20}`,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
  }),
  ...(variant === 'outlined' && {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: `1px solid ${sunPalette.neutral[200]}`,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
  }),
  ...(variant === 'ghost' && {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    border: `1px solid ${sunPalette.neutral[300]}`,
    boxShadow: 'none',
  }),
  ...(variant === 'plain' && {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: 'none',
    boxShadow: 'none',
  }),
}));

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ variant, ...rest }, ref) => (
  <StyledCard ref={ref} variant={variant} {...(rest as any)} />
));
Card.displayName = 'Card';
