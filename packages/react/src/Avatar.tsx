import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';
import * as React from 'react';

type SunUIVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

export interface AvatarProps extends Omit<MuiAvatarProps, 'variant'> {
  variant?: SunUIVariant;
}

const StyledAvatar = styled(MuiAvatar, {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant = 'solid' }) => ({
  ...(variant === 'solid' && {
    backgroundColor: sunPalette.primary.main,
    color: 'white',
    boxShadow: `0 2px 8px ${sunPalette.primary.alpha20}`,
  }),
  ...(variant === 'soft' && {
    backgroundColor: sunPalette.primary.alpha12,
    color: sunPalette.primary.main,
    border: `2px solid ${sunPalette.primary.alpha20}`,
  }),
  ...(variant === 'outlined' && {
    backgroundColor: sunPalette.primary.alpha12,
    color: sunPalette.primary.main,
    border: `2px solid ${sunPalette.primary.main}`,
  }),
  ...(variant === 'ghost' && {
    backgroundColor: 'transparent',
    color: sunPalette.neutral[700],
    border: `2px solid ${sunPalette.neutral[300]}`,
  }),
  ...(variant === 'plain' && {
    backgroundColor: sunPalette.neutral[100],
    color: sunPalette.neutral[700],
    border: 'none',
  }),
}));

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({ variant, ...rest }, ref) => (
  <StyledAvatar ref={ref} variant={variant} {...(rest as any)} />
));
Avatar.displayName = 'Avatar';
