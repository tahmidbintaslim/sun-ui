<div align="center">

# 🌞 Sun UI

### MUI Components, Reimagined.

**7 design variants. Zero config. 100% TypeScript. Full MUI ecosystem.**

[![npm version](https://img.shields.io/npm/v/@sun-ui/react?style=flat-square&color=ff6b35)](https://www.npmjs.com/package/@sun-ui/react)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@sun-ui/react?style=flat-square&color=4ecdc4)](https://bundlephobia.com/package/@sun-ui/react)
[![Tests](https://img.shields.io/badge/tests-124%20passing-brightgreen?style=flat-square)](https://github.com/tahmidbintaslim/sun-ui/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue?style=flat-square)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[**Live Demo**](https://sun-ui.vercel.app) · [**Documentation**](https://sun-ui.vercel.app) · [**Storybook**](https://sun-ui.vercel.app)

<br />

</div>

---

## 🎯 The Problem We Solve

**Building with Material-UI is powerful, but painful:**

| Pain Point | How Sun UI Fixes It |
|------------|---------------------|
| 😤 MUI's default variants are limited (3 options) | ✅ **7 beautiful variants** out of the box |
| 🎨 Spending hours on consistent styling | ✅ **Production-ready design tokens** included |
| 🔧 Complex theme customization | ✅ **Beautiful defaults** that just work |
| 📚 Steep learning curve for teams | ✅ **Intuitive API** — same props across all components |
| ♿ Accessibility as afterthought | ✅ **WCAG 2.1 AA compliant** by default |

> **Sun UI is for teams who love MUI's power but want beautiful, opinionated defaults without starting from scratch.**

---

## ⚡ Quick Start

```bash
npm install @sun-ui/react @mui/material @emotion/react @emotion/styled
```

```tsx
import { Button } from '@sun-ui/react';

// 7 variants × 7 colors × 5 sizes = Infinite possibilities
<Button variant="solid" color="primary">Get Started</Button>
<Button variant="soft" color="success">Save Changes</Button>
<Button variant="ghost" color="danger">Delete</Button>
<Button variant="dash" color="info">Upload File</Button>
```

**That's it.** No theme setup required. Beautiful by default.

---

## 🎨 7 Design Variants

Every Sun UI component supports **7 design variants** for maximum flexibility:

| Variant | Use Case | Preview |
|---------|----------|---------|
| `solid` | Primary actions, CTAs | Filled background, high contrast |
| `soft` | Secondary actions | Subtle tinted background |
| `outlined` | Tertiary actions | Border with transparent background |
| `dash` | Upload zones, placeholders | Dashed border style |
| `ghost` | Minimal actions | Shows color on hover |
| `plain` | Text-only actions | No background or border |
| `link` | Inline links | Underlined, hyperlink style |

```tsx
<Button variant="solid">Solid</Button>
<Button variant="soft">Soft</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="dash">Dash</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="plain">Plain</Button>
<Button variant="link">Link</Button>
```

---

## 🆚 Why Sun UI Over Alternatives?

| Feature | Sun UI | Raw MUI | Chakra UI | Mantine | daisyUI |
|---------|--------|---------|-----------|---------|---------|
| **React Required** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Design Variants** | **7** | 3 | 4 | 4 | 10+ |
| **MUI Ecosystem** | ✅ Full | ✅ Full | ❌ | ❌ | ❌ |
| **Design Tokens** | ✅ Built-in | Manual | ✅ | ✅ | Via Tailwind |
| **TypeScript** | 100% Strict | ✅ | ✅ | ✅ | N/A |
| **Zero Config** | ✅ | ❌ | ✅ | ✅ | ✅ |
| **Learning Curve** | Low (if know MUI) | Medium | Low | Low | Very Low |

### The Sweet Spot

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

## 📦 Packages

| Package | Description | Install |
|---------|-------------|---------|
| [`@sun-ui/react`](packages/react) | React component library | `npm i @sun-ui/react` |
| [`@sun-ui/theme`](packages/theme) | MUI v5 theme configuration | `npm i @sun-ui/theme` |
| [`@sun-ui/tokens`](packages/tokens) | Design tokens (colors, spacing) | `npm i @sun-ui/tokens` |
| [`@sun-ui/icons`](packages/icons) | Icon library (2000+ SVG) | `npm i @sun-ui/icons` |
| [`@sun-ui/core`](packages/core) | Headless primitives | 🚧 Coming soon |

---

## 🧩 Components

### 14 Production-Ready Components

#### Form Controls
- ✨ **Button** — 7 variants, loading states, icons
- 📝 **TextField** — Validation, multiline, icons
- 🎯 **Select** — Single & multi-select
- ☑️ **Checkbox** — Indeterminate support
- 🔘 **Radio** — Radio groups
- 🔘 **Switch** — Toggle switch

#### Feedback
- ⚠️ **Alert** — Notifications with actions
- 🍞 **Snackbar** — Toast notifications
- 💬 **Tooltip** — Helpful hints
- 📦 **Dialog** — Modal dialogs
- 📥 **Drawer** — Side panels
- 🎈 **Popover** — Floating content

#### Data Display
- 👤 **Avatar** — User profiles
- 🏷️ **Badge** — Status indicators
- 💳 **Card** — Content containers
- 🏷️ **Chip** — Tags & filters

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **7 Design Variants** | solid, soft, outlined, dash, ghost, plain, link |
| 🎯 **7 Color Schemes** | primary, secondary, success, warning, danger, info, neutral |
| 📐 **5 Sizes** | xs, sm, md, lg, xl |
| 🌙 **Dark Mode** | Automatic light/dark theme support |
| ♿ **Accessible** | WCAG 2.1 AA compliant, keyboard navigation |
| 📦 **Tree-Shakeable** | Import only what you use |
| 🔧 **TypeScript** | 100% type-safe with strict mode |
| 🧪 **Tested** | 124 tests passing, real browser testing |
| 📚 **Documented** | Storybook with live examples |

---

## 🚀 Full Example

```tsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from '@sun-ui/theme';
import { Button, TextField, Card, Alert } from '@sun-ui/react';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      
      <Card variant="soft">
        <Alert variant="solid" color="success">
          Welcome to Sun UI!
        </Alert>
        
        <TextField 
          variant="outlined" 
          label="Email" 
          fullWidth 
        />
        
        <Button variant="solid" color="primary" fullWidth>
          Get Started
        </Button>
      </Card>
    </ThemeProvider>
  );
}
```

---

## 📖 Documentation

| Resource | Description |
|----------|-------------|
| [📚 Documentation](DOCUMENTATION.md) | Complete usage guide |
| [🎨 Storybook](https://sun-ui.vercel.app) | Interactive component explorer |
| [🏗️ Architecture](API_ARCHITECTURE.md) | Technical deep-dive |
| [🧪 Testing Guide](TESTING_GUIDE.md) | Testing patterns |
| [🤝 Contributing](CONTRIBUTING.md) | How to contribute |

---

## 🛠️ Development

```bash
# Clone & install
git clone https://github.com/tahmidbintaslim/sun-ui.git
cd sun-ui && pnpm install

# Development
pnpm dev              # Start Storybook
pnpm build            # Build all packages
pnpm test             # Run tests
pnpm lint             # Lint code
```

### Project Structure

```
sun-ui/
├── apps/docs/         → Storybook documentation
├── packages/
│   ├── react/         → React components
│   ├── theme/         → MUI theme configuration
│   ├── tokens/        → Design tokens
│   ├── icons/         → Icon library
│   └── core/          → Headless primitives
└── ...
```

---

## 🗺️ Roadmap

### ✅ v1.0 — Foundation (Current)
- [x] 14 core components with 7 variants
- [x] Comprehensive test suite (124 tests)
- [x] Full TypeScript support
- [x] Dark mode
- [x] Storybook documentation

### 🚧 v1.1 — Expansion (Q1 2026)
- [ ] 5 additional components (Table, Tabs, Accordion, Stepper, Menu)
- [ ] Theme builder UI
- [ ] Figma design kit
- [ ] CLI scaffolding tool

### 🔮 v2.0 — Headless (Q2 2026)
- [ ] `@sun-ui/core` headless primitives
- [ ] Framework-agnostic tokens
- [ ] Animation library
- [ ] Advanced theming system

---

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md).

```bash
# Quick contribution workflow
git checkout -b feat/your-feature
pnpm test && pnpm lint
git commit -m "feat: add awesome feature"
git push origin feat/your-feature
```

---

## 📊 Stats

<div align="center">

| 📦 Components | 🎨 Variants | 🧪 Tests | ♿ Accessibility | 📚 Stories |
|:-------------:|:-----------:|:--------:|:----------------:|:----------:|
| **14** | **7** | **124** | **WCAG 2.1 AA** | **82** |

</div>

---

## 🙏 Credits

Built with:
- [Material-UI (MUI)](https://mui.com) — Component foundation
- [React 19](https://react.dev) — UI library
- [TypeScript 5](https://www.typescriptlang.org) — Type safety
- [Vitest](https://vitest.dev) — Testing
- [Storybook 10](https://storybook.js.org) — Documentation
- [TurboRepo](https://turbo.build) — Monorepo management

---

## 👨‍💻 Author

**Tahmid Bin Taslim**

- GitHub: [@tahmidbintaslim](https://github.com/tahmidbintaslim)
- Portfolio: [tahmir.dev](https://tahmir.dev)

---

## 📄 License

[MIT](LICENSE) © 2026 Tahmid Bin Taslim

---

<div align="center">

**Made with ☀️ by the Sun UI team**

[⭐ Star us on GitHub](https://github.com/tahmidbintaslim/sun-ui) — it means everything!

[Report Bug](https://github.com/tahmidbintaslim/sun-ui/issues/new?template=bug_report.md) · [Request Feature](https://github.com/tahmidbintaslim/sun-ui/discussions/new?category=ideas) · [Contribute](CONTRIBUTING.md)

</div>
