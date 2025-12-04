# 🌞 Sun UI Documentation

> **MUI Components, Reimagined.** Beautiful defaults. Full MUI ecosystem. Zero config.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Quick Start](#quick-start)
3. [Core Concepts](#core-concepts)
4. [Components](#components)
5. [Design Tokens](#design-tokens)
6. [Theming](#theming)
7. [Dark Mode](#dark-mode)
8. [Customization](#customization)
9. [Best Practices](#best-practices)
10. [API Reference](#api-reference)
11. [Troubleshooting](#troubleshooting)

---

## Introduction

### What is Sun UI?

**Sun UI** is a React component library built on top of Material-UI (MUI) v7 that provides:

- **7 Design Variants** — solid, soft, outlined, dash, ghost, plain, link
- **7 Color Schemes** — primary, secondary, success, warning, danger, info, neutral
- **5 Sizes** — xs, sm, md, lg, xl
- **Production-Ready** — 62 tests passing, WCAG 2.1 AA compliant
- **Zero Config** — Beautiful defaults that just work

### Who is Sun UI For?

| If you are...                                 | Sun UI helps you...                     |
| --------------------------------------------- | --------------------------------------- |
| **MUI user frustrated with limited variants** | Get 7 beautiful variants out of the box |
| **Team needing consistent design**            | Use production-ready design tokens      |
| **Developer wanting type safety**             | Enjoy 100% TypeScript with strict mode  |
| **Building accessible products**              | Ship WCAG 2.1 AA compliant components   |

### The Problem We Solve

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   Raw MUI ←────────── Sun UI ──────────→ Opinionated Systems        │
│   (Flexible           (Best of          (Chakra, Mantine —          │
│    but verbose)        both worlds)       locked ecosystem)         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Sun UI gives you:**

- 🎨 Beautiful defaults (like Chakra/Mantine)
- 🔌 Full MUI ecosystem access (600+ components)
- 🛠️ Complete customization (it's still MUI under the hood)

---

## Quick Start

### Installation

```bash
# npm
npm install @sun-ui/react @mui/material @emotion/react @emotion/styled

# pnpm (recommended)
pnpm add @sun-ui/react @mui/material @emotion/react @emotion/styled

# yarn
yarn add @sun-ui/react @mui/material @emotion/react @emotion/styled
```

### Basic Usage

```tsx
import { Button, TextField, Alert } from '@sun-ui/react';

export default function App() {
  return (
    <div>
      <Alert variant="soft" color="info">
        Welcome to Sun UI!
      </Alert>

      <TextField variant="outlined" label="Email" />

      <Button variant="solid" color="primary">
        Get Started
      </Button>
    </div>
  );
}
```

**That's it!** No ThemeProvider required for basic usage.

### With Theme Provider (Recommended)

For full theming support including dark mode:

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

---

## Core Concepts

### 7 Design Variants

Every Sun UI component supports the same 7 variants:

| Variant    | Use Case                   | Appearance                         |
| ---------- | -------------------------- | ---------------------------------- |
| `solid`    | Primary actions, CTAs      | Filled background, high contrast   |
| `soft`     | Secondary actions          | Subtle tinted background           |
| `outlined` | Tertiary actions           | Border with transparent background |
| `dash`     | Upload zones, placeholders | Dashed border style                |
| `ghost`    | Minimal actions            | Shows color on hover only          |
| `plain`    | Text-only actions          | No background or border            |
| `link`     | Inline links               | Underlined, hyperlink style        |

```tsx
<Button variant="solid">Primary Action</Button>
<Button variant="soft">Secondary Action</Button>
<Button variant="outlined">Tertiary Action</Button>
<Button variant="dash">Upload File</Button>
<Button variant="ghost">Cancel</Button>
<Button variant="plain">Learn more</Button>
<Button variant="link">View details</Button>
```

### 7 Color Schemes

All components support 7 semantic colors:

| Color       | Use Case                        |
| ----------- | ------------------------------- |
| `primary`   | Brand color, main actions       |
| `secondary` | Secondary brand color           |
| `success`   | Positive actions, confirmations |
| `warning`   | Caution, attention needed       |
| `danger`    | Destructive actions, errors     |
| `info`      | Informational content           |
| `neutral`   | Neutral, subdued actions        |

```tsx
<Button color="primary">Primary</Button>
<Button color="success">Success</Button>
<Button color="danger">Delete</Button>
```

### 5 Sizes

Components come in 5 sizes:

| Size | Use Case            |
| ---- | ------------------- |
| `xs` | Compact UIs, tables |
| `sm` | Secondary actions   |
| `md` | Default size        |
| `lg` | Primary CTAs        |
| `xl` | Hero sections       |

```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

---

## Components

### Form Controls

#### Button

```tsx
import { Button } from '@sun-ui/react';

// Basic usage
<Button variant="solid" color="primary">
  Click me
</Button>

// With loading state
<Button variant="solid" loading>
  Saving...
</Button>

// With icons
<Button variant="soft" startIcon={<SaveIcon />}>
  Save
</Button>

// Different shapes
<Button shape="circle"><AddIcon /></Button>
<Button shape="square"><MenuIcon /></Button>
<Button shape="wide">Wide Button</Button>
<Button shape="block">Full Width</Button>
```

#### TextField

```tsx
import { TextField } from '@sun-ui/react';

// Basic
<TextField variant="outlined" label="Email" />

// With validation
<TextField
  variant="solid"
  label="Password"
  type="password"
  error
  helperText="Password is required"
/>

// Multiline
<TextField
  variant="soft"
  label="Message"
  multiline
  rows={4}
/>
```

#### Select

```tsx
import { Select } from '@sun-ui/react';

<Select variant="outlined" label="Country">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
</Select>;
```

#### Checkbox, Radio, Switch

```tsx
import { Checkbox, Radio, Switch } from '@sun-ui/react';

<Checkbox variant="solid" label="I agree" />
<Radio variant="soft" label="Option A" />
<Switch variant="solid" label="Dark mode" />
```

### Feedback Components

#### Alert

```tsx
import { Alert } from '@sun-ui/react';

<Alert variant="solid" color="success">
  Changes saved successfully!
</Alert>

<Alert variant="soft" color="warning" onClose={() => {}}>
  Your session will expire soon.
</Alert>
```

#### Snackbar

```tsx
import { Snackbar } from '@sun-ui/react';

<Snackbar
  open={open}
  onClose={handleClose}
  message="Item deleted"
  action={<Button size="sm">Undo</Button>}
/>;
```

#### Dialog

```tsx
import { Dialog } from '@sun-ui/react';

<Dialog open={open} onClose={handleClose} title="Confirm">
  Are you sure you want to delete this item?
</Dialog>;
```

#### Tooltip & Popover

```tsx
import { Tooltip, Popover } from '@sun-ui/react';

<Tooltip title="Save changes">
  <Button>Save</Button>
</Tooltip>

<Popover content={<MenuContent />}>
  <Button>Open Menu</Button>
</Popover>
```

### Data Display

#### Card

```tsx
import { Card } from '@sun-ui/react';

<Card variant="soft">
  <Card.Header title="Card Title" subtitle="Subtitle" />
  <Card.Content>Card content goes here.</Card.Content>
  <Card.Actions>
    <Button>Action</Button>
  </Card.Actions>
</Card>;
```

#### Avatar & Badge

```tsx
import { Avatar, Badge } from '@sun-ui/react';

<Badge badgeContent={4} color="danger">
  <Avatar src="/avatar.jpg" alt="John Doe" />
</Badge>

<Avatar variant="soft" color="primary">JD</Avatar>
```

#### Chip

```tsx
import { Chip } from '@sun-ui/react';

<Chip variant="solid" label="Active" color="success" />
<Chip variant="soft" label="Pending" onDelete={() => {}} />
```

---

## Design Tokens

Sun UI includes a comprehensive design token system via `@sun-ui/tokens`:

```bash
npm install @sun-ui/tokens
```

### Colors

```tsx
import { colors } from '@sun-ui/tokens';

// Full color palette
colors.primary.main; // #3b82f6
colors.primary.light; // #60a5fa
colors.primary.dark; // #2563eb
colors.primary[500]; // #3b82f6
colors.primary.alpha20; // rgba(59, 130, 246, 0.2)

// Semantic colors
colors.success.main;
colors.warning.main;
colors.danger.main;
colors.info.main;
colors.neutral[500];
```

### Spacing

```tsx
import { spacing } from '@sun-ui/tokens';

spacing.xs; // 4px
spacing.sm; // 8px
spacing.md; // 16px
spacing.lg; // 24px
spacing.xl; // 32px
spacing.xxl; // 48px
```

### Typography

```tsx
import { typography } from '@sun-ui/tokens';

typography.fontSize.xs; // 12px
typography.fontSize.sm; // 14px
typography.fontSize.base; // 16px
typography.fontSize.lg; // 18px
typography.fontSize.xl; // 20px

typography.fontWeight.normal; // 400
typography.fontWeight.medium; // 500
typography.fontWeight.semibold; // 600
typography.fontWeight.bold; // 700
```

### Radius

```tsx
import { radius } from '@sun-ui/tokens';

radius.none; // 0
radius.sm; // 4px
radius.md; // 8px
radius.lg; // 12px
radius.xl; // 16px
radius.full; // 9999px
```

---

## Theming

### Using Pre-built Themes

```tsx
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@sun-ui/theme';

// Light theme
<ThemeProvider theme={lightTheme}>
  <App />
</ThemeProvider>

// Dark theme
<ThemeProvider theme={darkTheme}>
  <App />
</ThemeProvider>
```

### Creating Custom Themes

```tsx
import { createTheme } from '@mui/material/styles';
import { colors } from '@sun-ui/tokens';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#your-brand-color',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
});
```

---

## Dark Mode

### Automatic (System Preference)

```tsx
import { useMediaQuery } from '@mui/material';
import { lightTheme, darkTheme } from '@sun-ui/theme';

function App() {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <ThemeProvider theme={prefersDark ? darkTheme : lightTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Manual Toggle

```tsx
import { useState } from 'react';
import { lightTheme, darkTheme } from '@sun-ui/theme';
import { Switch } from '@sun-ui/react';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Switch checked={isDark} onChange={() => setIsDark(!isDark)} label="Dark mode" />
      <YourApp />
    </ThemeProvider>
  );
}
```

---

## Customization

### Using the `sx` Prop

```tsx
<Button
  variant="solid"
  sx={{
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: 2,
  }}
>
  Custom Button
</Button>
```

### Styled Components

```tsx
import { styled } from '@mui/material/styles';
import { Button } from '@sun-ui/react';

const GradientButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  color: 'white',
  padding: '0 30px',
});

<GradientButton variant="solid">Gradient</GradientButton>;
```

---

## Best Practices

### 1. Use Semantic Variants

```tsx
// ✅ Good - Clear visual hierarchy
<Button variant="solid">Save</Button>      // Primary action
<Button variant="soft">Cancel</Button>     // Secondary
<Button variant="ghost">Skip</Button>      // Tertiary

// ❌ Avoid - All same emphasis
<Button variant="solid">Save</Button>
<Button variant="solid">Cancel</Button>
<Button variant="solid">Skip</Button>
```

### 2. Be Consistent

Use the same variant for similar actions across your app.

### 3. Tree-shake Imports

```tsx
// ✅ Good - Tree-shakeable
import { Button, TextField } from '@sun-ui/react';

// ❌ Avoid - May include unused code
import * as SunUI from '@sun-ui/react';
```

### 4. Leverage TypeScript

```tsx
import { ButtonProps } from '@sun-ui/react';

interface MyButtonProps extends ButtonProps {
  analyticsId?: string;
}
```

---

## API Reference

### Common Props (All Components)

| Prop       | Type                                                                                    | Default     | Description    |
| ---------- | --------------------------------------------------------------------------------------- | ----------- | -------------- |
| `variant`  | `'solid' \| 'soft' \| 'outlined' \| 'dash' \| 'ghost' \| 'plain' \| 'link'`             | `'solid'`   | Visual style   |
| `color`    | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'neutral'` | `'primary'` | Color scheme   |
| `size`     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                  | `'md'`      | Component size |
| `disabled` | `boolean`                                                                               | `false`     | Disabled state |

### Button Props

| Prop              | Type                                                     | Default     | Description          |
| ----------------- | -------------------------------------------------------- | ----------- | -------------------- |
| `loading`         | `boolean`                                                | `false`     | Show loading spinner |
| `loadingPosition` | `'start' \| 'end' \| 'center'`                           | `'center'`  | Spinner position     |
| `startIcon`       | `ReactNode`                                              | -           | Icon before text     |
| `endIcon`         | `ReactNode`                                              | -           | Icon after text      |
| `shape`           | `'default' \| 'wide' \| 'block' \| 'square' \| 'circle'` | `'default'` | Button shape         |

---

## Troubleshooting

### Styles Not Applying

Ensure you have peer dependencies installed:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

### Dark Mode Not Working

Wrap your app with `ThemeProvider`:

```tsx
<ThemeProvider theme={darkTheme}>
  <CssBaseline />
  <App />
</ThemeProvider>
```

### TypeScript Errors

Make sure you're using TypeScript 4.7+ and have `@types/react` installed.

---

## Resources

- [🎨 Live Demo](https://sun-ui.vercel.app)
- [📖 Storybook](https://sun-ui.vercel.app)
- [🐙 GitHub](https://github.com/tahmidbintaslim/sun-ui)
- [📦 npm](https://www.npmjs.com/package/@sun-ui/react)

---

**Happy building with Sun UI! ☀️**
