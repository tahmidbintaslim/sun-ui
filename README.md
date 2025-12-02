# Sun UI v1.0.0 — Universal Design System

> Launching **January 1, 2026**

---

## 📦 Monorepo Structure (TurboRepo + pnpm)

```
sun-ui/
├── apps/
│   └── docs/                  → Storybook
├── packages/
│   ├── tokens/                → Design tokens (CSS + JS)
│   ├── theme/                 → MUI createTheme + module augmentation
│   ├── icons/                 → Icon library (2000+ SVG)
│   ├── react/                 → All React components (@sun-ui/react)
│   └── core/                  → Headless primitives (future)
├── .github/workflows/
│   └── release.yml            → Automated Changesets publish
├── turbo.json                 → Turborepo config
├── pnpm-workspace.yaml        → Workspace config
└── package.json               → Root config
```

---

## 🎨 Components Shipped (Day 1)

✅ **6 Components** with full Sun UI quality:

- ✨ `Button` — 5 variants (solid, soft, outlined, ghost, plain)
- 📝 `TextField` — All 5 variants + states
- 🎯 `Select` — Multi-select ready
- ☑️ `Checkbox` — Full variant coverage
- 🔘 `Radio` — Radio groups supported
- 🔘 `Switch` — Toggle ready

### Each Component Includes:
- ✅ **5 Mandatory Variants**: solid | soft | outlined | ghost | plain
- ✅ **Full TypeScript** with strict mode
- ✅ **Storybook Stories** (.stories.tsx)
- ✅ **RTL Tests** (.test.tsx) with Vitest
- ✅ **Tree-shakable** exports
- ✅ **forwardRef + displayName** pattern
- ✅ **Dark mode support** via @sun-ui/theme

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
pnpm install
```

### 2. Build all packages
```bash
pnpm build
```

### 3. Run tests
```bash
pnpm test
```

### 4. Start Storybook (soon)
```bash
cd apps/docs
pnpm storybook
```

---

## 📚 Design System Foundation

### **@sun-ui/tokens**
Pure design tokens (no runtime):
- **Palette**: primary, neutral, success, warning, danger + alpha values
- **Radius scale**: xs(4), sm(8), md(12), lg(16), xl(24)
- **Spacing scale**: xs, sm, md, lg, xl, xxl

### **@sun-ui/theme**
MUI v5 integration:
- `createTheme()` with Sun UI defaults
- Module augmentation for new variants
- Light + Dark theme support
- Automatic dark mode via `theme.palette.mode`

### **@sun-ui/react**
Ship-ready components:
- Thin, smart MUI v5 wrappers
- Uses `styled()` with `shouldForwardProp`
- Zero runtime when tree-shaken
- Exports barrel: `import { Button, TextField } from '@sun-ui/react'`

---

## 🔄 Release Process

Powered by **Changesets + GitHub Actions**:

1. Create `.changeset/*.md` files with version bumps
2. GitHub Actions auto-creates release PR
3. Merge PR → auto-publish to npm
4. All @sun-ui/* packages update together

---

## 📋 Testing

```bash
# Run all tests
pnpm test

# Watch mode
pnpm test:watch

# Coverage
pnpm test:coverage
```

Tests include:
- ✅ RTL (React Testing Library)
- ✅ a11y checks
- ✅ Snapshot tests
- ✅ Variant coverage
- ✅ Disabled states

---

## 🛠️ Development

### Add a new component:

1. **Create** `packages/react/src/MyComponent.tsx`
2. **Test** `packages/react/src/MyComponent.test.tsx`
3. **Story** `packages/react/src/MyComponent.stories.tsx`
4. **Export** in `packages/react/src/index.ts`

Use the **Button pattern** as your template:
```tsx
import * as React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sunPalette } from '@sun-ui/tokens';

export interface ButtonProps extends MuiButtonProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => !['variant'].includes(prop as string),
})<ButtonProps>(({ theme, variant = 'solid' }) => ({
  // 5 variants here
}));

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <StyledButton ref={ref} {...props} />
);
Button.displayName = 'Button';
```

---

## 📦 Publishing

```bash
# Bump versions via Changesets
pnpm changeset

# Build everything
pnpm build

# Publish (manual or via CI)
pnpm publish -r
```

---

## 🎯 Next Steps (Coming Soon)

- **Day 2–10**: Alert, Badge, Card, Tooltip, Modal, Drawer, Tabs, Accordion, Breadcrumb, Pagination
- **Day 11–20**: Avatar, Chip, Progress, Skeleton, Spinner, Divider, List, Table, Stepper, Rating
- **Day 21–30**: Form validation, Drag/Drop, Calendar, Carousel, Video player, Analytics, A/B testing

---

## 📄 License

MIT — Feel free to extend, modify, and ship.

---

## 🚢 SHIP DATE

**January 1, 2026** — Sun UI v1.0.0 goes live.

---

**Built with ☀️ by the Sun UI team**  
**30 days. 100+ components. Zero compromises.**
