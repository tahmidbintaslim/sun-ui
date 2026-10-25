# Changelog

All notable changes to Sun UI are recorded here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Once releases start, Changesets also writes a `CHANGELOG.md` inside each published package.

## [0.1.0] - Unreleased

Nothing has been published to npm yet. This is the first planned release. Before it, every package was numbered 1.0.0 without ever being published; this version lowers them all to 0.1.0.

### Added

- `@smug-ui/react`: 26 components built on Material UI v7: Alert, Autocomplete, Avatar, Badge, Breadcrumbs, Button, Card, Checkbox, Chip, DatePicker, Dialog, Drawer, Pagination, Popover, Progress, Radio, Rating, Select, Slider, Snackbar, Switch, Table, Tabs, TextField, ToggleButtonGroup and Tooltip.
- A shared `variant` / `color` / `size` API: 5 variants (solid, soft, outlined, ghost, plain) on every component, plus dash and link on Button; 5 sizes; 7 colors, with three exceptions listed under Known issues (Autocomplete, DatePicker and Drawer).
- `@smug-ui/theme`: `lightTheme` and `darkTheme` for the MUI `ThemeProvider`.
- `@smug-ui/tokens`: color scales, spacing, radius, shadows, z-index, breakpoints, typography and animation tokens.
- `textColorsForMode` in `@smug-ui/tokens`: returns `textColors.light` or `textColors.dark` for the current mode.
- `@smug-ui/core`: shared types, variant presets, accessibility helpers and headless state helpers.
- Storybook with 372 stories, deployed at https://sun-ui-brown.vercel.app.
- 505 unit tests and 372 Storybook tests (54 with a `play` function).

### Changed

- Versions: every package goes from 1.0.0 (never published) to 0.1.0.
- Packages build with tsup to ESM and CommonJS with type definitions, and declare `"sideEffects": false`. `@smug-ui/react` carries a `"use client"` directive.
- Material UI, MUI X Date Pickers, Emotion and dayjs are peer dependencies of `@smug-ui/react`. `@smug-ui/theme` accepts React 18 or 19.
- Color tokens: each color's `main` and `dark` now reach 4.5:1 contrast against white and against their text color, and warning uses white text. In the light theme, solid fills and outlined, plain and link text are darker than before.
- Dark mode keeps the lighter shades: components pick their color scale with `colorScaleForMode` (new in `@smug-ui/tokens`, with `darkModeColorPalette`), and `darkTheme` uses the 500 shades for MUI's primary, success, warning and error. This covers Avatar's status dots and Tooltip, whose color scale now follows the MUI theme mode (its neutral surfaces still follow `data-theme="dark"`). Dark mode renders as it did before the light-theme change.
- `getColorScale`, `getVariantStyles` and `getVariantCss` in `@smug-ui/core` take an optional `isDark` argument (default `false`) and return the dark-mode shades when it is `true`.

### Fixed

- Dark mode: Checkbox, Radio and Switch labels used the light theme's text color (`#0f172a`), about 1:1 on the dark page. They now use the dark text colors (`#f8fafc`, 17:1 on the page; disabled `#64748b`).
- Dark mode: unselected ToggleButtonGroup text used `#475569` (2.4:1 on the dark page) and now uses `#cbd5e1` (12:1). The solid hover tint and the soft and plain fills behind that text switch to dark shades too, so it stays readable on hover.
- Dark mode: the Slider value label (`valueLabelPosition="bottom"`) and min/max labels set no color and fell back to the page's inherited color, near-black unless the app sets a body color. Dark mode now sets the dark text colors on them.
- The light theme renders as before: the same CSS for every variant and color of these five components.

### Removed

- The `@smug-ui/tokens/css` export, which pointed at a file the build never produced.
- Storybook from the runtime dependencies of every package.

### Known issues

- Dark mode: solid fills (white on the 500 shades) are below 4.5:1 for most colors, and so are neutral text and secondary, danger and neutral text on the paper surface.
- Light theme: ghost and plain hover and pressed tints drop below 4.5:1 for some colors.
- Autocomplete and DatePicker name the red color `error` instead of `danger`. DatePicker and the Autocomplete input field ignore the `color` prop: their styles read `--sun-color-*` CSS variables that nothing defines, so they render in MUI's default blue. Autocomplete's multi-select tags do follow `color` (they pass it to MUI `Chip`).
- Drawer accepts the `color` prop but never reads it.
- `@smug-ui/icons` is an empty placeholder and is not published.
