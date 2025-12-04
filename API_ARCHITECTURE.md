# 🌞 Sun UI — Architecture & API Reference

> **Technical deep-dive into Sun UI's architecture, design patterns, and internal APIs.**

Sun UI is a React component library that gives you **beautiful, opinionated defaults on top of Material-UI** — without locking you out of MUI's full ecosystem.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Design Principles](#design-principles)
3. [Component Architecture](#component-architecture)
4. [Theme System](#theme-system)
5. [Design Tokens](#design-tokens)
6. [Module System](#module-system)
7. [Styling Approach](#styling-approach)
8. [Type System](#type-system)
9. [Performance Considerations](#performance-considerations)
10. [Extensibility](#extensibility)

---

## Architecture Overview

### Monorepo Structure

Sun UI is built as a monorepo using TurboRepo and pnpm workspaces:

```
┌─────────────────────────────────────┐
│          @sun-ui/react              │  ← Main component library
│  (Button, TextField, Select, etc.)  │
└──────────────────┬──────────────────┘
                   ↓
┌─────────────────────────────────────┐
│         @sun-ui/theme               │  ← MUI theme configuration
│  (lightTheme, darkTheme)            │
└──────────────────┬──────────────────┘
                   ↓
┌──────────────────────────────────────┐
│        @sun-ui/tokens               │  ← Design tokens
│  (colors, spacing, radius)          │
└──────────────────────────────────────┘
```

### Package Dependencies

```
@sun-ui/react
  ├── @sun-ui/theme
  │   └── @sun-ui/tokens
  ├── @emotion/react
  ├── @emotion/styled
  ├── @mui/material
  └── react

@sun-ui/theme
  └── @sun-ui/tokens

@sun-ui/tokens
  └── (no dependencies)
```

### Build Pipeline

```
Source Code (TypeScript)
         ↓
    ESLint (linting)
         ↓
    TypeScript (type checking)
         ↓
    Vite/Rollup (bundling)
         ↓
    dist/ (ESM + CJS)
         ↓
    npm registry (publishing)
```

---

## Design Principles

### The Sun UI Philosophy

> **"MUI components, reimagined."**

Sun UI sits in a unique sweet spot:

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   Raw MUI ←────────── Sun UI ──────────→ Opinionated Systems        │
│   (Flexible           (Best of          (Chakra, Mantine —          │
│    but verbose)        both worlds)       locked ecosystem)         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 1. 7-Variant System

Every component supports **7 design variants** for maximum flexibility:

| Variant | Use Case | Visual Style |
|---------|----------|--------------|
| `solid` | Primary actions, CTAs | Filled background, high contrast |
| `soft` | Secondary actions | Subtle tinted background |
| `outlined` | Tertiary actions | Border with transparent background |
| `dash` | Upload zones, placeholders | Dashed border style |
| `ghost` | Minimal actions | Shows color on hover only |
| `plain` | Text-only actions | No background or border |
| `link` | Inline links | Underlined, hyperlink style |

```tsx
// Every component follows this pattern
<Component variant="solid" />   // Primary
<Component variant="soft" />    // Secondary
<Component variant="outlined" />// Tertiary
<Component variant="ghost" />   // Low-priority
<Component variant="plain" />   // Minimal
```

### 2. Composition Over Inheritance

Build complex UIs by composing simple components:

```tsx
// ✅ Good: Composition
<Card>
  <CardHeader title="Title" />
  <CardContent>
    <TextField />
  </CardContent>
  <CardActions>
    <Button>Submit</Button>
  </CardActions>
</Card>

// ❌ Avoid: Deep inheritance hierarchies
<ComplexCard withForm withActions />
```

### 3. Semantic HTML

All components render proper semantic HTML:

```tsx
<Button>        → renders <button>
<TextField>     → renders <input> or <textarea>
<Select>        → renders <select>
<Alert>         → renders <div role="alert">
<Card>          → renders <div> with semantic props
```

### 4. Type Safety

All props are fully typed with TypeScript:

```tsx
interface ButtonProps extends MuiButtonProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
}
```

### 5. Accessibility First

All components are WCAG 2.1 AA compliant:

- Keyboard navigation
- Screen reader support
- Color contrast ≥ 4.5:1
- Focus indicators
- ARIA attributes

---

## Component Architecture

### Component Template

All Sun UI components follow this structure:

```tsx
// 1. Imports
import * as React from 'react';
import { MuiComponent, MuiComponentProps } from '@mui/material';
import { styled } from '@mui/material/styles';

// 2. Props interface
export interface ComponentProps extends MuiComponentProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

// 3. Styled component
const StyledComponent = styled(MuiComponent, {
  shouldForwardProp: (prop) => !['variant', 'color'].includes(prop as string),
})<ComponentProps>(({ theme, variant = 'solid', color = 'primary' }) => ({
  // Base styles
  transition: theme.transitions.create(['background-color', 'color'], {
    duration: theme.transitions.duration.shortest,
  }),

  // Variant styles
  ...(variant === 'solid' && {
    backgroundColor: theme.palette[color].main,
    color: '#fff',
  }),
  ...(variant === 'soft' && {
    backgroundColor: theme.palette[color][100],
    color: theme.palette[color].main,
  }),
  ...(variant === 'outlined' && {
    border: `1px solid ${theme.palette[color].main}`,
    color: theme.palette[color].main,
  }),
  ...(variant === 'ghost' && {
    backgroundColor: 'transparent',
    color: theme.palette[color].main,
    '&:hover': {
      backgroundColor: theme.palette[color][50],
    },
  }),
  ...(variant === 'plain' && {
    backgroundColor: 'transparent',
    color: theme.palette[color].main,
  }),
}));

// 4. Component export with forwardRef
export const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ variant = 'solid', color = 'primary', ...props }, ref) => (
    <StyledComponent ref={ref} variant={variant} color={color} {...props} />
  )
);

// 5. DisplayName for debugging
Component.displayName = 'Component';
```

### Key Patterns

#### forwardRef Pattern

All components use `forwardRef` for ref forwarding:

```tsx
const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>((props, ref) => (
  <div ref={ref} {...props} />
));

MyComponent.displayName = 'MyComponent';
```

#### shouldForwardProp Pattern

Custom props are excluded from DOM:

```tsx
const Styled = styled(MuiButton, {
  shouldForwardProp: (prop) => !['variant', 'color'].includes(prop as string),
})<ButtonProps>((props) => ({
  // Styles
}));
```

#### Compound Components

Complex components use composition:

```tsx
export const Card = ({ children, ...props }: CardProps) => (
  <StyledCard {...props}>{children}</StyledCard>
);

export const CardHeader = ({ title }: CardHeaderProps) => (
  <StyledCardHeader>{title}</StyledCardHeader>
);

export const CardContent = ({ children }: CardContentProps) => (
  <StyledCardContent>{children}</StyledCardContent>
);

export const CardActions = ({ children }: CardActionsProps) => (
  <StyledCardActions>{children}</StyledCardActions>
);
```

---

## Theme System

### Theme Structure

```tsx
interface Theme {
  palette: {
    primary: Color;
    secondary: Color;
    error: Color;
    warning: Color;
    info: Color;
    success: Color;
    neutral: Color;
    background: { default: string; paper: string };
    text: { primary: string; secondary: string };
  };
  typography: {
    fontFamily: string;
    fontSize: number;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    h1: TypographyStyle;
    h2: TypographyStyle;
    body1: TypographyStyle;
    body2: TypographyStyle;
    button: TypographyStyle;
    caption: TypographyStyle;
  };
  spacing: (multiplier: number) => number;
  shape: { borderRadius: number };
  transitions: {
    duration: {
      shortest: number;
      shorter: number;
      short: number;
      standard: number;
      complex: number;
      enteringScreen: number;
      leavingScreen: number;
    };
    easing: { easeInOut: string; easeOut: string; easeIn: string; sharp: string };
    create: (props: string[], options?: {}) => string;
  };
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}
```

### Light Theme

```tsx
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2', ...otherShades },
    secondary: { main: '#dc004e', ...otherShades },
    background: { default: '#fff', paper: '#f5f5f5' },
    text: { primary: 'rgba(0, 0, 0, 0.87)', secondary: 'rgba(0, 0, 0, 0.60)' },
  },
  typography: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
});
```

### Dark Theme

```tsx
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9', ...otherShades },
    secondary: { main: '#f48fb1', ...otherShades },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#fff', secondary: 'rgba(255, 255, 255, 0.70)' },
  },
  typography: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
});
```

### Theme Application

```tsx
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@sun-ui/theme';

<ThemeProvider theme={lightTheme}>{/* Your app */}</ThemeProvider>;
```

---

## Design Tokens

### Token Organization

```typescript
// @sun-ui/tokens/src/index.ts
export { sunPalette } from './palette';
export { sunSpacing } from './spacing';
export { sunRadius } from './radius';
```

### Color Tokens

```typescript
export const sunPalette = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // main
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    main: '#3b82f6',
    dark: '#1e40af',
    light: '#eff6ff',
  },
  secondary: {
    /* ... */
  },
  neutral: {
    /* ... */
  },
  success: {
    /* ... */
  },
  warning: {
    /* ... */
  },
  error: {
    /* ... */
  },
  info: {
    /* ... */
  },
};
```

### Spacing Tokens

```typescript
export const sunSpacing = {
  xs: 4, // 0.25rem
  sm: 8, // 0.5rem
  md: 16, // 1rem
  lg: 24, // 1.5rem
  xl: 32, // 2rem
  xxl: 48, // 3rem
};
```

### Radius Tokens

```typescript
export const sunRadius = {
  xs: 4, // 0.25rem
  sm: 8, // 0.5rem
  md: 12, // 0.75rem
  lg: 16, // 1rem
  xl: 24, // 1.5rem
};
```

---

## Module System

### Export Structure

Each package provides a clear export surface:

```tsx
// @sun-ui/react/src/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button';

export { TextField } from './TextField';
export type { TextFieldProps } from './TextField';

export { Select } from './Select';
export type { SelectProps } from './Select';

// Re-export MUI components for convenience
export {
  Stack,
  Box,
  Grid,
  Container,
  Paper,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
} from '@mui/material';
```

### Tree-Shaking

All exports are tree-shakeable:

```tsx
// ✅ Good: Specific imports
import { Button } from '@sun-ui/react'; // Only Button is bundled
import { TextField } from '@sun-ui/react'; // Only TextField is bundled

// ❌ Avoid: Wildcard imports
import * as SunUI from '@sun-ui/react'; // All components bundled
```

### Barrel Exports

Each component has a barrel export pattern:

```
packages/react/src/
├── Button/
│   ├── Button.tsx
│   ├── Button.test.tsx
│   ├── Button.stories.tsx
│   └── index.ts         # exports Button, ButtonProps
├── TextField/
│   ├── TextField.tsx
│   ├── TextField.test.tsx
│   ├── TextField.stories.tsx
│   └── index.ts
└── index.ts             # re-exports all components
```

---

## Styling Approach

### MUI Styled-Components

All components use `styled()` from MUI:

```tsx
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)<ButtonProps>(({ theme, variant = 'solid' }) => ({
  // CSS object syntax
}));
```

### Benefits

- **Type-safe**: Full TypeScript support
- **Theme-aware**: Access theme in styles
- **Performance**: CSS-in-JS optimization
- **Runtime**: Works in browser and server
- **SSR**: Server-side rendering compatible

### CSS Precedence

MUI's `styled()` follows CSS specificity rules:

```tsx
const Styled = styled(Component)(({ theme }) => ({
  // Base styles (specificity: 1)
  color: 'red',

  // State selectors (specificity: 2)
  '&:hover': {
    color: 'blue',
  },

  // Responsive (specificity: 1)
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}));
```

### Dynamic Styling

Access props in styles:

```tsx
const Styled = styled(Component)<{ isActive: boolean }>(({ isActive }) => ({
  opacity: isActive ? 1 : 0.5,
}));
```

---

## Type System

### PropTypes

All components use TypeScript interfaces:

```tsx
export interface ButtonProps extends MuiButtonProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
  color?: ColorProp;
  size?: SizeProp;
}

type ColorProp = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
type SizeProp = 'small' | 'medium' | 'large';
```

### Generic Types

Reusable type utilities:

```tsx
// Variant type
type Variant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';

// Color type
type Color = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

// Size type
type Size = 'small' | 'medium' | 'large';

// Component props pattern
interface ComponentProps extends MuiComponentProps {
  variant?: Variant;
  color?: Color;
  size?: Size;
}
```

### Extended Types

Extend MUI types for custom components:

```tsx
interface CustomButtonProps extends ButtonProps {
  customProp?: string;
}

export const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ customProp, ...props }, ref) => <Button ref={ref} {...props} />
);
```

---

## Performance Considerations

### Code Splitting

Lazy-load components when needed:

```tsx
import { lazy, Suspense } from 'react';

const Button = lazy(() => import('@sun-ui/react').then((m) => ({ default: m.Button })));

<Suspense fallback={<div>Loading...</div>}>
  <Button>Click me</Button>
</Suspense>;
```

### Memoization

Memoize expensive components:

```tsx
import { memo } from 'react';

export const MemoizedComponent = memo(Component);
```

### Bundle Size

Sun UI components are optimized for size:

- **Minimal CSS**: Only necessary styles included
- **Tree-shakeable**: Unused code removed
- **External dependencies**: Only peer dependencies
- **Code splitting**: Separate bundles per component

### Performance Metrics

```
Button:        ~5KB (gzipped)
TextField:     ~8KB (gzipped)
Select:        ~12KB (gzipped)
Total @sun-ui/react: ~150KB (all components, gzipped)
```

---

## Extensibility

### Custom Components

Create custom components by extending Sun UI:

```tsx
import { Button, ButtonProps } from '@sun-ui/react';
import { styled } from '@mui/material/styles';

const CustomStyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: 1,
  fontWeight: 'bold',
}));

export const CustomButton = (props: ButtonProps) => <CustomStyledButton {...props} />;
```

### Theme Extension

Extend the theme with custom colors:

```tsx
import { createTheme } from '@mui/material/styles';
import { lightTheme } from '@sun-ui/theme';

const customTheme = createTheme(lightTheme, {
  palette: {
    // Additional colors
    custom: {
      purple: '#9c27b0',
      teal: '#009688',
    },
  },
});
```

### Token Extension

Add custom design tokens:

```tsx
import { sunPalette } from '@sun-ui/tokens';

export const customTokens = {
  ...sunPalette,
  // Additional tokens
  brand: {
    primary: '#ff6b6b',
    secondary: '#4ecdc4',
  },
};
```

### Plugin System (Future)

Future versions will support plugin architecture:

```tsx
// Coming in v2.0
import { createPlugin } from '@sun-ui/core';

const customPlugin = createPlugin({
  name: 'custom-theme',
  install(options) {
    // Plugin implementation
  },
});
```

---

## Internal APIs

### Theme Hooks (Future)

Access theme in components:

```tsx
// Coming soon
import { useTheme, usePalette, useBreakpoint } from '@sun-ui/theme';

const MyComponent = () => {
  const theme = useTheme();
  const palette = usePalette();
  const isMobile = useBreakpoint('down', 'sm');

  return <div>...</div>;
};
```

### Component Hooks (Future)

Custom hooks for component state:

```tsx
// Coming soon
import { useFormControl, useMenu, usePopper } from '@sun-ui/react';

const MyComponent = () => {
  const formControl = useFormControl();
  // ...
};
```

---

## Browser Support

- **Chrome**: ✅ Latest 2 versions
- **Firefox**: ✅ Latest 2 versions
- **Safari**: ✅ Latest 2 versions
- **Edge**: ✅ Latest 2 versions
- **IE 11**: ❌ Not supported

---

## License

MIT — Feel free to extend and modify.

---

**Questions? Check out the [documentation](DOCUMENTATION.md) or [testing guide](TESTING_GUIDE.md).**
