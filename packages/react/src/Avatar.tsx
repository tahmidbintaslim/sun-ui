import {
  CircularProgress,
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { animations, colors, typography } from '@sun-ui/tokens';
import * as React from 'react';

// =============================================================================
// TYPES
// =============================================================================

type SunVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
type SunColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
type SunSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps extends Omit<MuiAvatarProps, 'variant'> {
  /** Visual style variant */
  variant?: SunVariant;
  /** Color scheme */
  color?: SunColor;
  /** Avatar size */
  size?: SunSize;
  /** Show loading state */
  loading?: boolean;
  /** Show online/offline status indicator */
  status?: 'online' | 'offline' | 'away' | 'busy';
  /** Disable hover animation */
  disableAnimation?: boolean;
}

// =============================================================================
// STYLE UTILITIES
// =============================================================================

const getColorScale = (color: SunColor) => colors.semantic[color];

const sizeConfig = {
  xs: { size: 24, fontSize: typography.fontSize.xs, iconSize: 12, statusSize: 6 },
  sm: { size: 32, fontSize: typography.fontSize.sm, iconSize: 16, statusSize: 8 },
  md: { size: 40, fontSize: typography.fontSize.base, iconSize: 20, statusSize: 10 },
  lg: { size: 56, fontSize: typography.fontSize.lg, iconSize: 28, statusSize: 12 },
  xl: { size: 80, fontSize: typography.fontSize.xl, iconSize: 40, statusSize: 16 },
};

const statusColors = {
  online: colors.semantic.success.main,
  offline: colors.semantic.neutral[400],
  away: colors.semantic.warning.main,
  busy: colors.semantic.danger.main,
};

// =============================================================================
// STYLED COMPONENTS
// =============================================================================

interface StyledProps {
  sunVariant: SunVariant;
  sunColor: SunColor;
  sunSize: SunSize;
  $disableAnimation?: boolean;
}

const StyledAvatar = styled(MuiAvatar, {
  shouldForwardProp: (prop) =>
    !['sunVariant', 'sunColor', 'sunSize', '$disableAnimation'].includes(prop as string),
})<StyledProps>(({ theme, sunVariant, sunColor, sunSize, $disableAnimation }) => {
  const colorScale = getColorScale(sunColor);
  const sizeStyles = sizeConfig[sunSize];
  const isDark = theme.palette.mode === 'dark';

  const baseStyles = {
    width: sizeStyles.size,
    height: sizeStyles.size,
    fontSize: sizeStyles.fontSize,
    fontWeight: typography.fontWeight.semibold,
    fontFamily: typography.fontFamily.sans,
    transition: $disableAnimation ? 'none' : animations.transitions.button,
    '&:hover': $disableAnimation
      ? {}
      : {
          transform: 'scale(1.05)',
        },
  };

  const variantStyles = {
    solid: {
      backgroundColor: colorScale.main,
      color: colorScale.contrastText,
      boxShadow: `0 2px 8px ${colorScale.alpha30}`,
    },
    soft: {
      backgroundColor: isDark ? colorScale.alpha20 : colorScale.alpha12,
      color: isDark ? colorScale.light : colorScale.dark,
      border: `2px solid ${colorScale.alpha20}`,
    },
    outlined: {
      backgroundColor: isDark ? colorScale.alpha12 : colorScale.alpha8,
      color: colorScale.main,
      border: `2px solid ${colorScale.main}`,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: isDark ? colors.semantic.neutral[300] : colors.semantic.neutral[700],
      border: `2px solid ${isDark ? colors.semantic.neutral[600] : colors.semantic.neutral[300]}`,
    },
    plain: {
      backgroundColor: isDark ? colors.semantic.neutral[800] : colors.semantic.neutral[100],
      color: isDark ? colors.semantic.neutral[200] : colors.semantic.neutral[700],
      border: 'none',
    },
  };

  return {
    ...baseStyles,
    ...variantStyles[sunVariant],
  };
});

const AvatarWrapper = styled('div')({
  position: 'relative',
  display: 'inline-flex',
});

const StatusIndicator = styled('span')<{
  status: 'online' | 'offline' | 'away' | 'busy';
  sunSize: SunSize;
}>(({ status, sunSize }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: sizeConfig[sunSize].statusSize,
  height: sizeConfig[sunSize].statusSize,
  borderRadius: '50%',
  backgroundColor: statusColors[status],
  border: '2px solid white',
  boxSizing: 'content-box',
}));

const LoadingOverlay = styled('div')<{ sunSize: SunSize }>(({ sunSize }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: sizeConfig[sunSize].size,
  height: sizeConfig[sunSize].size,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
}));

// =============================================================================
// COMPONENT
// =============================================================================

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      variant = 'solid',
      color = 'primary',
      size = 'md',
      loading = false,
      status,
      disableAnimation = false,
      children,
      ...rest
    },
    ref
  ) => {
    const sizeStyles = sizeConfig[size];

    return (
      <AvatarWrapper>
        <StyledAvatar
          ref={ref}
          sunVariant={variant}
          sunColor={color}
          sunSize={size}
          $disableAnimation={disableAnimation}
          {...rest}
        >
          {children}
        </StyledAvatar>
        {loading && (
          <LoadingOverlay sunSize={size}>
            <CircularProgress size={sizeStyles.iconSize} sx={{ color: 'white' }} />
          </LoadingOverlay>
        )}
        {status && !loading && <StatusIndicator status={status} sunSize={size} />}
      </AvatarWrapper>
    );
  }
);
Avatar.displayName = 'Avatar';
