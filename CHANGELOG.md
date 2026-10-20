# Changelog

All notable changes to Sun UI are recorded here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Once releases start, Changesets also writes a `CHANGELOG.md` inside each published package.

## [0.1.0] - Unreleased

Nothing has been published to npm yet. This is the first planned release.

### Added

- `@smug-ui/react`: 26 components built on Material UI v7: Alert, Autocomplete, Avatar, Badge, Breadcrumbs, Button, Card, Checkbox, Chip, DatePicker, Dialog, Drawer, Pagination, Popover, Progress, Radio, Rating, Select, Slider, Snackbar, Switch, Table, Tabs, TextField, ToggleButtonGroup and Tooltip.
- A shared `variant` / `color` / `size` API: 5 variants (solid, soft, outlined, ghost, plain) on every component, plus dash and link on Button; 7 colors; 5 sizes.
- `@smug-ui/theme`: `lightTheme` and `darkTheme` for the MUI `ThemeProvider`.
- `@smug-ui/tokens`: color scales, spacing, radius, shadows, z-index, breakpoints, typography and animation tokens.
- `@smug-ui/core`: shared types, variant presets, accessibility helpers and headless state helpers.
- Storybook with 372 stories, deployed at https://sun-ui-brown.vercel.app.
- 417 unit tests and 372 Storybook tests.

### Changed

- Packages build with tsup to ESM and CommonJS with type definitions, and declare `"sideEffects": false`. `@smug-ui/react` carries a `"use client"` directive.
- Material UI, MUI X Date Pickers, Emotion and dayjs are peer dependencies of `@smug-ui/react`. `@smug-ui/theme` accepts React 18 or 19.
- Color tokens: each color's `main` and `dark` now reach 4.5:1 contrast against white and against their text color, and warning uses white text. Solid fills and outlined, plain and link text are darker than before.

### Removed

- The `@smug-ui/tokens/css` export, which pointed at a file the build never produced.
- Storybook from the runtime dependencies of every package.

### Known issues

- Dark mode: outlined, plain and link text does not reach 4.5:1 contrast yet.
- Light theme: ghost and plain hover and pressed tints drop below 4.5:1 for some colors.
- `@smug-ui/icons` is an empty placeholder and is not published.
