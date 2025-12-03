# 🌞 Sun UI — Universal Design System

[![GitHub Release](https://img.shields.io/github/v/release/tahmidbintaslim/sun-ui)](https://github.com/tahmidbintaslim/sun-ui/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub Tests](https://github.com/tahmidbintaslim/sun-ui/workflows/CI/badge.svg)](https://github.com/tahmidbintaslim/sun-ui/actions/workflows/test.yml)
[![npm version](https://img.shields.io/npm/v/@sun-ui/react)](https://www.npmjs.com/package/@sun-ui/react)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> **A modern, accessible, and extensible design system built on Material-UI v5**  
> Ship beautiful products faster with Sun UI's component library, design tokens, and comprehensive documentation.

---

## 🚀 Quick Start

### Installation

```bash
# npm
npm install @sun-ui/react

# pnpm
pnpm add @sun-ui/react

# yarn
yarn add @sun-ui/react
```

### Basic Usage

```tsx
import { Button, TextField, Checkbox } from '@sun-ui/react';

export default function App() {
  return (
    <div>
      <Button variant="solid">Click me</Button>
      <TextField label="Name" />
      <Checkbox />
    </div>
  );
}
```

---

## 📦 Packages

Sun UI is organized as a monorepo with the following packages:

| Package                             | Purpose                    | Status         |
| ----------------------------------- | -------------------------- | -------------- |
| [`@sun-ui/react`](packages/react)   | React component library    | ✅ Available   |
| [`@sun-ui/theme`](packages/theme)   | MUI v5 theme configuration | ✅ Available   |
| [`@sun-ui/tokens`](packages/tokens) | Design tokens              | ✅ Available   |
| [`@sun-ui/icons`](packages/icons)   | Icon library (2000+ SVG)   | ✅ Available   |
| [`@sun-ui/core`](packages/core)     | Headless primitives        | 🚧 In Progress |

---

## 🎨 Components

Sun UI ships with **11 production-ready components**, each with **5 design variants**:

### Form Components

- ✨ **Button** — Solid, soft, outlined, ghost, plain
- 📝 **TextField** — Text input with validation states
- 🎯 **Select** — Dropdown with multi-select support
- ☑️ **Checkbox** — Form control with states
- 🔘 **Radio** — Radio groups
- 🔘 **Switch** — Toggle switch

### Display Components

- ⚠️ **Alert** — System notifications
- 👤 **Avatar** — User profiles
- 🏷️ **Badge** — Status indicators
- 💳 **Card** — Content containers
- 🏷️ **Chip** — Compact elements

### Design Variants

All components support 5 design variants:

```tsx
<Button variant="solid">Solid</Button>
<Button variant="soft">Soft</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="plain">Plain</Button>
```

---

## ✨ Features

✅ **Production-Ready**

- 124/124 tests passing (100% success rate)
- Real browser testing with Chromium
- Comprehensive test coverage

✅ **Type-Safe**

- 100% TypeScript with strict mode
- Full prop type definitions
- Autocomplete support

✅ **Accessible**

- WCAG 2.1 AA compliant
- ARIA labels and semantic HTML
- Keyboard navigation built-in
- Integrated accessibility testing

✅ **Dark Mode**

- Automatic light/dark theme support
- MUI theme integration
- Customizable color schemes

✅ **Developer Experience**

- Storybook interactive documentation
- Live code examples
- Component playground
- Comprehensive guides

✅ **Tree-Shakeable**

- ESM modules with named exports
- Minimal bundle size
- Zero unused code

---

## 📚 Documentation

### Getting Started

- [Installation & Setup](docs/GETTING_STARTED.md)
- [Component Library](http://localhost:6006) (Storybook)
- [Theming & Customization](docs/THEMING.md)
- [Testing Guide](TESTING_GUIDE.md)

### View in Storybook

```bash
cd apps/docs
pnpm storybook
```

Then visit: **http://localhost:6006**

Browse:

- Component stories with live previews
- Design token documentation
- Accessibility features
- Test results

---

## 🧪 Testing

Sun UI includes comprehensive testing:

- **Unit Tests** — Component behavior with React Testing Library
- **Interaction Tests** — User interactions with Storybook
- **Accessibility Tests** — WCAG compliance with a11y addon
- **Visual Tests** — Render verification with Vitest

```bash
# Run all tests
pnpm test

# Watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

**Test Results**

```
✓ Test Files: 11 passed (11)
✓ Tests: 124 passed (124)
✓ Coverage: Ready for generation
```

See [Testing Guide](TESTING_GUIDE.md) for detailed testing patterns.

---

## 🛠️ Development

### Prerequisites

- Node.js 20+
- pnpm 10+

### Setup

```bash
# Clone the repository
git clone https://github.com/tahmidbintaslim/sun-ui.git
cd sun-ui

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Start Storybook
cd apps/docs
pnpm storybook
```

### Project Structure

```
sun-ui/
├── apps/
│   └── docs/                  → Storybook documentation
├── packages/
│   ├── tokens/                → Design tokens
│   ├── theme/                 → MUI v5 theme
│   ├── icons/                 → SVG icon library
│   ├── react/                 → React components
│   └── core/                  → Headless primitives
├── .github/workflows/
│   ├── test.yml              → Automated testing
│   └── publish.yml           → Release automation
├── docs/                      → Documentation
├── CONTRIBUTING.md            → Contribution guidelines
├── LICENSE                    → MIT License
└── package.json               → Root configuration
```

### Common Commands

```bash
# Development
pnpm dev              # Start Storybook in watch mode
pnpm build            # Build all packages
pnpm test             # Run all tests
pnpm test:watch       # Tests in watch mode
pnpm lint             # Lint code
pnpm type-check       # TypeScript validation

# Monorepo (with Turbo caching)
pnpm turbo run build  # Build with caching
pnpm turbo run test   # Test with caching
pnpm clean            # Remove all artifacts
```

### Adding a New Component

1. **Create component file**: `packages/react/src/MyComponent.tsx`
2. **Add tests**: `packages/react/src/MyComponent.test.tsx`
3. **Create stories**: `packages/react/src/MyComponent.stories.tsx`
4. **Export**: Add to `packages/react/src/index.ts`

Use the [Button](packages/react/src/Button.tsx) as a template.

---

## 🤝 Contributing

We ❤️ contributions! Whether it's bugs, features, or documentation, we'd love your help.

### Quick Start

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/sun-ui.git`
3. **Install**: `pnpm install`
4. **Create branch**: `git checkout -b feat/my-feature`
5. **Make changes** and test: `pnpm test`
6. **Commit**: `git commit -m "feat: add new feature"`
7. **Push**: `git push origin feat/my-feature`
8. **Create Pull Request**

See [CONTRIBUTING.md](CONTRIBUTING.md) for complete guidelines.

### Types of Contributions

- 🐛 **Bug Reports** — Found an issue? [Report it](https://github.com/tahmidbintaslim/sun-ui/issues/new?template=bug_report.md)
- ✨ **Features** — Have an idea? [Discuss it](https://github.com/tahmidbintaslim/sun-ui/discussions/new)
- 📖 **Documentation** — Improve docs and guides
- ♿ **Accessibility** — Enhance a11y compliance
- 🧪 **Tests** — Add test coverage
- 🐚 **Code Quality** — Refactor and optimize

---

## 🐛 Issues & Bug Reports

### Report a Bug

[Create bug report →](https://github.com/tahmidbintaslim/sun-ui/issues/new?template=bug_report.md)

Include:

- Detailed description
- Steps to reproduce
- Expected vs. actual behavior
- Environment (OS, browser, versions)
- Code example or CodeSandbox link

### Request a Feature

[Start a discussion →](https://github.com/tahmidbintaslim/sun-ui/discussions/new?category=ideas)

---

## 🔒 Security

### Reporting Vulnerabilities

**Do not** report security vulnerabilities via GitHub issues.

📧 **Email**: security@sun-ui.dev

Your report will be handled privately and we'll work with you to fix it.

See [SECURITY.md](SECURITY.md) for complete security policy.

---

## 📝 License

Sun UI is licensed under the [MIT License](LICENSE).

See [LICENSE](LICENSE) for full terms.

---

## 🗺️ Roadmap

### v1.0 (January 2026) ✅

- [x] 11 core components
- [x] Comprehensive tests
- [x] Storybook documentation
- [x] Dark mode support
- [x] Initial release
- [x] Automated publishing

### v1.1 (Q1 2026)

- [ ] 5 additional components
- [ ] Theme builder UI
- [ ] Design token customization
- [ ] Figma design kit

### v2.0 (Q2 2026+)

- [ ] Headless core package
- [ ] Mobile-optimized components
- [ ] Animation library
- [ ] Advanced theming system

---

## 🤳 Community

- **[GitHub Discussions](https://github.com/tahmidbintaslim/sun-ui/discussions)** — Ask questions & share ideas
- **[GitHub Issues](https://github.com/tahmidbintaslim/sun-ui/issues)** — Report bugs & request features
- **[Storybook](http://localhost:6006)** — View components & documentation

---

## 📊 Stats

- 📦 **11** core components
- 🎨 **5** design variants per component
- 📖 **82** Storybook stories
- ✅ **124** passing tests (100%)
- ♿ **WCAG 2.1 AA** compliant
- 🌍 **Peer deps only** — zero external dependencies

---

## 🙏 Credits

Sun UI is built on:

- [Material-UI (MUI)](https://mui.com) — Component base
- [React](https://react.dev) — UI library
- [TypeScript](https://www.typescriptlang.org) — Type safety
- [Vitest](https://vitest.dev) — Testing framework
- [Storybook](https://storybook.js.org) — Documentation
- [TurboRepo](https://turbo.build) — Monorepo management
- [pnpm](https://pnpm.io) — Package management

---

## 👨‍💼 Author

**Tahmir Bin Taslim**

- GitHub: [@tahmidbintaslim](https://github.com/tahmidbintaslim)
- Portfolio: [tahmir.dev](https://tahmir.dev)
- Email: hello@tahmir.dev

---

## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md) for detailed release history and breaking changes.

---

<div align="center">

**Made with ❤️ by the Sun UI team**

[⭐ Star us on GitHub](https://github.com/tahmidbintaslim/sun-ui) — Your support means everything!

[Report Bug](https://github.com/tahmidbintaslim/sun-ui/issues/new?template=bug_report.md) · [Request Feature](https://github.com/tahmidbintaslim/sun-ui/discussions/new?category=ideas) · [Contribute](CONTRIBUTING.md)

</div>
