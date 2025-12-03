import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

type SunUIVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

export interface BadgeProps extends Omit<MuiBadgeProps, 'variant'> {
  variant?: SunUIVariant;
}

const StyledBadge = styled(MuiBadge, {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant = 'solid' }) => ({
  '& .MuiBadge-badge': {
    ...(variant === 'solid' && {
      backgroundColor: sunPalette.primary.main,
      color: 'white',
      boxShadow: `0 0 0 2px white`,
    }),
    ...(variant === 'soft' && {
      backgroundColor: sunPalette.primary.alpha12,
      color: sunPalette.primary.main,
      boxShadow: `0 0 0 2px ${sunPalette.primary.alpha20}`,
      border: `1px solid ${sunPalette.primary.alpha20}`,
    }),
    ...(variant === 'outlined' && {
      backgroundColor: 'white',
      color: sunPalette.primary.main,
      border: `2px solid ${sunPalette.primary.main}`,
      boxShadow: '0 0 0 1px white',
    }),
    ...(variant === 'ghost' && {
      backgroundColor: 'transparent',
      color: sunPalette.neutral[700],
      border: `1px solid ${sunPalette.neutral[300]}`,
      boxShadow: 'none',
    }),
    ...(variant === 'plain' && {
      backgroundColor: sunPalette.neutral[100],
      color: sunPalette.neutral[700],
      border: 'none',
      boxShadow: 'none',
    }),
  },
}));

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ variant, ...rest }, ref) => (
  <StyledBadge ref={ref} variant={variant} {...(rest as any)} />
));
Badge.displayName = 'Badge';
