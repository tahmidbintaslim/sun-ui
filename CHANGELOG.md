# Changelog

All notable changes to Sun UI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned for v1.1

- [ ] Additional components (Drawer, Modal, Tooltip, Progress, Skeleton)
- [ ] Theme builder UI
- [ ] Design token customization
- [ ] Figma design kit
- [ ] Enhanced documentation

---

## [1.0.0] - 2026-01-01

### Added - Initial Release 🎉

#### Components (11 Total)

- ✨ **Button** — 5 variants (solid, soft, outlined, ghost, plain)
- 📝 **TextField** — Text input with validation states
- 🎯 **Select** — Dropdown with multi-select support
- ☑️ **Checkbox** — Form control with states
- 🔘 **Radio** — Radio groups
- 🔘 **Switch** — Toggle switch
- ⚠️ **Alert** — System notifications
- 👤 **Avatar** — User profiles
- 🏷️ **Badge** — Status indicators
- 💳 **Card** — Content containers
- 🏷️ **Chip** — Compact elements

#### Packages

- `@sun-ui/react` — React component library
- `@sun-ui/theme` — MUI v5 theme configuration
- `@sun-ui/tokens` — Design tokens (colors, spacing, radius)
- `@sun-ui/icons` — Icon library (2000+ SVG icons)
- `@sun-ui/core` — Headless primitives (foundation)

#### Testing

- 124/124 tests passing (100% success rate)
- Unit tests with React Testing Library
- Interaction tests with Storybook
- Accessibility tests (WCAG 2.1 AA)
- Visual tests with Vitest
- Real browser testing with Chromium

#### Documentation

- 82 Storybook stories
- Component API documentation
- Theming & customization guides
- Testing guide with patterns
- Interactive playground

#### Developer Experience

- TypeScript with strict mode
- 5 design variants per component
- Dark mode support
- Tree-shakeable modules
- Comprehensive prop types
- Full keyboard navigation

#### Infrastructure

- TurboRepo for monorepo management
- pnpm workspace
- GitHub Actions CI/CD
- Automated testing on push
- Automated publishing to npm
- Changesets for versioning

#### Features

- ✅ Production-ready
- ✅ WCAG 2.1 AA compliant
- ✅ Type-safe React components
- ✅ Zero external dependencies (peer deps only)
- ✅ Modern dark mode support
- ✅ Customizable design tokens
- ✅ Comprehensive test coverage

---

## Version Guide

### What's New?

New features, components, and improvements.

### What's Fixed?

Bug fixes and stability improvements.

### What's Changed?

Breaking changes and migration guides.

### What's Deprecated?

APIs that will be removed in future versions.

### Security

Security updates and vulnerability fixes.

---

## Upgrade Guide

### From v1.0 to v1.1

No breaking changes. Installation upgrade only:

```bash
pnpm up @sun-ui/react@latest
```

---

## Support

- **Current**: v1.0.0 — Fully supported
- **Maintenance**: Updates and fixes provided
- **EOL**: Support ends when v2.0.0 released

---

## Release Checklist

When releasing a new version:

- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md`
- [ ] Create GitHub release
- [ ] Update documentation
- [ ] Announce on social media
- [ ] Update roadmap if needed

---

## Previous Versions

### Beta Phase (Pre-Release)

- Multiple iterations and refinements
- Community feedback incorporated
- Testing infrastructure established
- Documentation completed

---

<div align="center">

**See [Releases](https://github.com/tahmidbintaslim/sun-ui/releases) for all versions**

</div>
