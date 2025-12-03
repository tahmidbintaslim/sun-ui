# Sun UI Documentation

Complete guide for using, customizing, and extending Sun UI.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [Basic Usage](#basic-usage)
4. [Components](#components)
5. [Theming](#theming)
6. [Design Tokens](#design-tokens)
7. [Customization](#customization)
8. [Dark Mode](#dark-mode)
9. [Advanced Usage](#advanced-usage)
10. [API Reference](#api-reference)

---

## Getting Started

Sun UI is a modern, accessible design system built on Material-UI v5. It provides:

- **11 Production-Ready Components** with 5 design variants each
- **TypeScript First** with full type safety
- **Zero Dependencies** (peer dependencies only)
- **Dark Mode Support** out of the box
- **Accessible** — WCAG 2.1 AA compliant
- **Tree-Shakeable** — import only what you need

### Packages

Sun UI is organized into several packages:

| Package          | Purpose                         | Import                                                  |
| ---------------- | ------------------------------- | ------------------------------------------------------- |
| `@sun-ui/react`  | React components                | `import { Button } from '@sun-ui/react'`                |
| `@sun-ui/theme`  | MUI theme configuration         | `import { lightTheme, darkTheme } from '@sun-ui/theme'` |
| `@sun-ui/tokens` | Design tokens (colors, spacing) | `import { sunPalette } from '@sun-ui/tokens'`           |
| `@sun-ui/icons`  | Icon library                    | `import { ChevronDown } from '@sun-ui/icons'`           |
| `@sun-ui/core`   | Headless primitives             | (Coming soon)                                           |

---

## Installation

### Install via npm

```bash
npm install @sun-ui/react @sun-ui/theme
```

### Install via pnpm (recommended)

```bash
pnpm add @sun-ui/react @sun-ui/theme
```

### Install via yarn

```bash
yarn add @sun-ui/react @sun-ui/theme
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom @mui/material @emotion/react @emotion/styled
```

---

## Basic Usage

### Setup Theme Provider

Wrap your app with the `ThemeProvider` to apply Sun UI theming:

```tsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from '@sun-ui/theme';
import { Button } from '@sun-ui/react';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Button variant="solid">Click me</Button>
    </ThemeProvider>
  );
}
```

### Using Components

All Sun UI components support the same pattern with 5 variants:

```tsx
import { Button, TextField, Select } from '@sun-ui/react';

export function MyForm() {
  return (
    <>
      <Button variant="solid">Solid</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="plain">Plain</Button>

      <TextField variant="solid" label="Name" />
      <Select variant="soft" label="Option" />
    </>
  );
}
```

---

## Components

Sun UI ships with 11 components, each with 5 design variants.

### Form Components

#### Button

Trigger actions with visual feedback.

```tsx
import { Button, Stack } from '@sun-ui/react';

export function ButtonDemo() {
  return (
    <Stack spacing={2}>
      <Button variant="solid" size="small">
        Small Solid
      </Button>
      <Button variant="soft" size="medium">
        Medium Soft
      </Button>
      <Button variant="outlined" size="large">
        Large Outlined
      </Button>
      <Button variant="ghost" disabled>
        Disabled Ghost
      </Button>
      <Button variant="plain" fullWidth>
        Full Width Plain
      </Button>
    </Stack>
  );
}
```

**Props:**

- `variant`: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain'
- `size`: 'small' | 'medium' | 'large'
- `color`: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
- `disabled`: boolean
- `fullWidth`: boolean

#### TextField

Collect text input from users.

```tsx
import { TextField } from '@sun-ui/react';

export function FormDemo() {
  return (
    <>
      <TextField variant="solid" label="Email" type="email" placeholder="you@example.com" />
      <TextField
        variant="soft"
        label="Message"
        multiline
        rows={4}
        error
        helperText="This field is required"
      />
    </>
  );
}
```

**Props:**

- `variant`: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain'
- `label`: string
- `type`: 'text' | 'email' | 'password' | 'number' | etc.
- `multiline`: boolean
- `rows`: number
- `error`: boolean
- `helperText`: string

#### Select

Choose from a list of options.

```tsx
import { Select } from '@sun-ui/react';

export function SelectDemo() {
  return (
    <Select variant="solid" label="Choose option" defaultValue="option1">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </Select>
  );
}
```

#### Checkbox

Toggle boolean values in forms.

```tsx
import { Checkbox, FormControlLabel } from '@sun-ui/react';

export function CheckboxDemo() {
  return (
    <>
      <FormControlLabel control={<Checkbox variant="solid" />} label="I agree to the terms" />
      <FormControlLabel
        control={<Checkbox variant="soft" defaultChecked />}
        label="Subscribe to newsletter"
      />
    </>
  );
}
```

#### Radio

Select one option from a group.

```tsx
import { Radio, RadioGroup, FormControlLabel } from '@sun-ui/react';

export function RadioDemo() {
  return (
    <RadioGroup defaultValue="option1">
      <FormControlLabel value="option1" control={<Radio variant="solid" />} label="Option 1" />
      <FormControlLabel value="option2" control={<Radio variant="solid" />} label="Option 2" />
    </RadioGroup>
  );
}
```

#### Switch

Toggle between two states.

```tsx
import { Switch, FormControlLabel } from '@sun-ui/react';

export function SwitchDemo() {
  return <FormControlLabel control={<Switch variant="solid" defaultChecked />} label="Dark mode" />;
}
```

### Display Components

#### Alert

Display system messages and notifications.

```tsx
import { Alert, AlertTitle } from '@sun-ui/react';

export function AlertDemo() {
  return (
    <>
      <Alert variant="solid" severity="success">
        <AlertTitle>Success!</AlertTitle>
        Your changes have been saved.
      </Alert>
      <Alert variant="soft" severity="warning">
        Warning: This action cannot be undone.
      </Alert>
      <Alert variant="outlined" severity="error">
        Error: Something went wrong.
      </Alert>
    </>
  );
}
```

**Props:**

- `variant`: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain'
- `severity`: 'success' | 'info' | 'warning' | 'error'

#### Avatar

Display user avatars and profile images.

```tsx
import { Avatar } from '@sun-ui/react';

export function AvatarDemo() {
  return (
    <>
      <Avatar variant="solid">JD</Avatar>
      <Avatar variant="soft" src="/path/to/image.jpg" alt="John Doe" />
      <Avatar variant="outlined">AB</Avatar>
    </>
  );
}
```

**Props:**

- `variant`: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain'
- `src`: string (image URL)
- `alt`: string (alt text)

#### Badge

Display status indicators.

```tsx
import { Badge, Avatar } from '@sun-ui/react';

export function BadgeDemo() {
  return (
    <>
      <Badge variant="solid" badgeContent={4}>
        <Avatar>JD</Avatar>
      </Badge>
      <Badge variant="dot" overlap="circular">
        <Avatar>AB</Avatar>
      </Badge>
    </>
  );
}
```

#### Card

Container for content grouping.

```tsx
import { Card, CardContent, CardHeader, CardActions, Button } from '@sun-ui/react';

export function CardDemo() {
  return (
    <Card variant="solid">
      <CardHeader title="Card Title" />
      <CardContent>
        <p>This is the card content.</p>
      </CardContent>
      <CardActions>
        <Button>Action</Button>
      </CardActions>
    </Card>
  );
}
```

#### Chip

Compact element for tags, filters, and categories.

```tsx
import { Chip } from '@sun-ui/react';

export function ChipDemo() {
  return (
    <>
      <Chip variant="solid" label="Tag" />
      <Chip variant="soft" label="Filter" onDelete={() => {}} />
      <Chip variant="outlined" label="Category" />
    </>
  );
}
```

---

## Theming

### Using the Light Theme

```tsx
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@sun-ui/theme';

export function App() {
  return <ThemeProvider theme={lightTheme}>{/* Your app */}</ThemeProvider>;
}
```

### Using the Dark Theme

```tsx
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '@sun-ui/theme';

export function App() {
  return <ThemeProvider theme={darkTheme}>{/* Your app */}</ThemeProvider>;
}
```

### Toggling Between Themes

```tsx
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@sun-ui/theme';
import { Button } from '@sun-ui/react';

export function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Button onClick={() => setIsDark(!isDark)}>Toggle Theme</Button>
    </ThemeProvider>
  );
}
```

### Theme Structure

Sun UI themes include:

- **Palette**: Colors for all semantic purposes (primary, secondary, error, warning, info, success)
- **Typography**: Font sizes, weights, and families
- **Spacing**: Standardized spacing scale
- **Shape**: Border radius values
- **Component defaults**: Pre-configured component styles

---

## Design Tokens

Design tokens are the building blocks of the design system. Access them via the `@sun-ui/tokens` package.

### Color Tokens

```tsx
import { sunPalette } from '@sun-ui/tokens';

// Usage
const buttonColor = sunPalette.primary.main;
const bgColor = sunPalette.neutral[100];
const accentColor = sunPalette.success[500];
```

**Available Colors:**

- `primary` — Primary brand color
- `secondary` — Secondary accent color
- `neutral` — Neutral grays
- `success` — Success state (green)
- `warning` — Warning state (yellow)
- `error` — Error state (red)
- `info` — Information state (blue)

Each color includes:

- `50, 100, 200, 300, 400, 500, 600, 700, 800, 900` — Numbered shades
- `main` — Primary shade
- `dark` — Darkest shade
- `light` — Lightest shade

### Spacing Scale

```tsx
// Spacing values in pixels
const xs = 4; // Extra small
const sm = 8; // Small
const md = 16; // Medium
const lg = 24; // Large
const xl = 32; // Extra large
const xxl = 48; // Extra extra large
```

### Border Radius

```tsx
// Border radius values in pixels
const xs = 4;
const sm = 8;
const md = 12;
const lg = 16;
const xl = 24;
```

---

## Customization

### Extending the Theme

Create a custom theme by extending the base theme:

```tsx
import { createTheme } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';

const customTheme = createTheme({
  palette: {
    primary: {
      main: sunPalette.primary.main,
    },
    secondary: {
      main: sunPalette.secondary.main,
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
  },
});
```

### Overriding Component Styles

Use the `sx` prop to override styles:

```tsx
import { Button } from '@sun-ui/react';

export function CustomButton() {
  return (
    <Button
      variant="solid"
      sx={{
        backgroundColor: 'purple',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      }}
    >
      Custom Button
    </Button>
  );
}
```

### Creating Custom Components

Build custom components using Sun UI as a foundation:

```tsx
import { Button, ButtonProps } from '@sun-ui/react';
import { styled } from '@mui/material/styles';

const PrimaryButton = styled(Button)({
  textTransform: 'uppercase',
  letterSpacing: 1,
});

export function MyButton(props: ButtonProps) {
  return <PrimaryButton variant="solid" {...props} />;
}
```

---

## Dark Mode

### Automatic Dark Mode

Sun UI includes a dark theme that automatically adapts to the system preference:

```tsx
import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@sun-ui/theme';

export function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>{/* Your app */}</ThemeProvider>
  );
}
```

### Responsive Dark Mode

Implement user-controlled dark mode with localStorage:

```tsx
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@sun-ui/theme';

export function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('isDark');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark]);

  return <ThemeProvider theme={isDark ? darkTheme : lightTheme}>{/* Your app */}</ThemeProvider>;
}
```

---

## Advanced Usage

### Composing Components

Build complex layouts by combining components:

```tsx
import { Card, CardHeader, CardContent, Button, Stack, TextField } from '@sun-ui/react';

export function LoginForm() {
  return (
    <Card variant="solid" sx={{ maxWidth: 400, margin: 'auto' }}>
      <CardHeader title="Sign In" />
      <CardContent>
        <Stack spacing={2}>
          <TextField variant="soft" label="Email" fullWidth />
          <TextField variant="soft" label="Password" type="password" fullWidth />
          <Button variant="solid" fullWidth>
            Sign In
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
```

### Responsive Design

Use MUI's Box and Stack components with breakpoints:

```tsx
import { Stack, Box } from '@mui/material';
import { Button } from '@sun-ui/react';

export function ResponsiveLayout() {
  return (
    <Stack direction={{ xs: 'column', sm: 'row', md: 'row-reverse' }} spacing={2}>
      <Box flex={1}>Content</Box>
      <Box flex={1}>Sidebar</Box>
    </Stack>
  );
}
```

### Conditional Styling

Apply styles based on state:

```tsx
import { Button } from '@sun-ui/react';

export function ConditionalButton() {
  const isActive = true;

  return (
    <Button
      variant={isActive ? 'solid' : 'ghost'}
      sx={{
        opacity: isActive ? 1 : 0.5,
      }}
    >
      Button
    </Button>
  );
}
```

---

## API Reference

### Button

```tsx
interface ButtonProps extends MuiButtonProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}
```

### TextField

```tsx
interface TextFieldProps extends MuiTextFieldProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}
```

### Select

```tsx
interface SelectProps extends MuiSelectProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}
```

### Alert

```tsx
interface AlertProps extends MuiAlertProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
  severity?: 'success' | 'info' | 'warning' | 'error';
}
```

### Avatar

```tsx
interface AvatarProps extends MuiAvatarProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}
```

### Badge

```tsx
interface BadgeProps extends MuiBadgeProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}
```

### Card

```tsx
interface CardProps extends MuiCardProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}
```

### Checkbox

```tsx
interface CheckboxProps extends MuiCheckboxProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}
```

### Radio

```tsx
interface RadioProps extends MuiRadioProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}
```

### Switch

```tsx
interface SwitchProps extends MuiSwitchProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}
```

### Chip

```tsx
interface ChipProps extends MuiChipProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}
```

---

## Best Practices

### 1. Use Semantic Variants

Choose variants based on the action importance:

- `solid` — Primary, important actions
- `soft` — Secondary actions
- `outlined` — Tertiary actions
- `ghost` — Low-priority actions
- `plain` — Minimal, text-only actions

### 2. Maintain Consistency

Use the same variant for similar components throughout your app.

### 3. Accessibility

All components are WCAG 2.1 AA compliant:

- Keyboard navigation
- Screen reader support
- Color contrast
- Focus indicators

### 4. Performance

Tree-shake unused components:

```tsx
// ✅ Good - tree-shakeable
import { Button } from '@sun-ui/react';

// ❌ Avoid - may include unused components
import * as SunUI from '@sun-ui/react';
```

### 5. Type Safety

Always use TypeScript for better developer experience:

```tsx
import { ButtonProps } from '@sun-ui/react';

interface MyButtonProps extends ButtonProps {
  customProp?: string;
}

export function MyButton({ customProp, ...props }: MyButtonProps) {
  return <Button {...props} />;
}
```

---

## Troubleshooting

### Issue: Styles not applying

**Solution:** Ensure `ThemeProvider` and `CssBaseline` are wrapped around your app:

```tsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from '@sun-ui/theme';

<ThemeProvider theme={lightTheme}>
  <CssBaseline />
  {/* Your app */}
</ThemeProvider>;
```

### Issue: Dark mode not working

**Solution:** Make sure the theme is properly applied:

```tsx
const [isDark, setIsDark] = useState(false);
<ThemeProvider theme={isDark ? darkTheme : lightTheme}>{/* Your app */}</ThemeProvider>;
```

### Issue: Component not responding to props

**Solution:** Check that you're using the correct component import:

```tsx
// ✅ Correct
import { Button } from '@sun-ui/react';

// ❌ Incorrect
import { Button } from '@mui/material';
```

---

## Additional Resources

- [Storybook Playground](http://localhost:6006) — Interactive component explorer
- [GitHub Repository](https://github.com/tahmidbintaslim/sun-ui) — Source code and issues
- [Material-UI Documentation](https://mui.com/material-ui/getting-started/) — Base library docs
- [Contributing Guide](CONTRIBUTING.md) — How to contribute

---

**Happy coding with Sun UI! ☀️**
