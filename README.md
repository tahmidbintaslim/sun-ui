# Sun UI

React components built on Material UI v7, with one `variant`, `color` and `size` API across 26 components, plus design tokens and light and dark themes.

**[Storybook](https://sun-ui-brown.vercel.app)** (working demo): every component with live controls, 372 stories in all.

**Status: in development.** Version 0.1.0 is not on npm yet. To try it today, run it from source (see [Development](#development)).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## What it is

Sun UI wraps Material UI (MUI) v7 components with Emotion `styled()` and gives them a shared set of props:

| Prop      | Values                                                                         |
| --------- | ------------------------------------------------------------------------------ |
| `variant` | `solid`, `soft`, `outlined`, `ghost`, `plain` (Button also has `dash`, `link`) |
| `color`   | `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `neutral`      |
| `size`    | `xs`, `sm`, `md`, `lg`, `xl`                                                   |

Each component still takes the props of the MUI component it wraps, except the ones Sun UI replaces, so the `sx` prop and your MUI theme keep working.

Sun UI is a good fit if you already use Material UI and MUI X and want soft, ghost and plain styles with one prop API. If you are not on MUI, a library built for your stack will serve you better.

## Packages

The npm packages use the `@smug-ui` scope.

| Package           | Contents                                                                                                       |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| `@smug-ui/react`  | The 26 components                                                                                              |
| `@smug-ui/theme`  | `lightTheme` and `darkTheme` (MUI `createTheme`) built from the tokens                                         |
| `@smug-ui/tokens` | Colors (7 scales with alpha steps), spacing, radius, shadows, z-index, breakpoints, typography and animations  |
| `@smug-ui/core`   | Shared types, variant presets, accessibility helpers and headless state helpers (Progress and Rating use them) |
| `@smug-ui/icons`  | Empty placeholder. Private, not published                                                                      |

Each published package ships ESM and CommonJS builds with TypeScript types, and `@smug-ui/react` starts with a `"use client"` directive.

## Install

Once 0.1.0 is published:

```bash
npm install @smug-ui/react @smug-ui/theme \
  @mui/material @mui/icons-material @mui/x-date-pickers \
  @emotion/react @emotion/styled dayjs
```

Material UI, MUI X Date Pickers, Emotion and dayjs are peer dependencies, so your app keeps a single copy of each. `@smug-ui/react` needs React 19, Material UI 7 and MUI X Date Pickers 8. `@smug-ui/theme` works with React 18 or 19.

## Usage

```tsx
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Alert, Button, TextField } from '@smug-ui/react';
import { lightTheme } from '@smug-ui/theme';

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Alert variant="soft" color="success">
        Changes saved
      </Alert>
      <TextField variant="outlined" label="Email" />
      <Button variant="solid" color="primary">
        Continue
      </Button>
      <Button variant="dash" color="info">
        Upload file
      </Button>
    </ThemeProvider>
  );
}
```

Use `darkTheme` for dark mode. More examples are in [DOCUMENTATION.md](DOCUMENTATION.md) and in the [Storybook](https://sun-ui-brown.vercel.app).

## Components

All components take the 7 colors and the 5 sizes above. Autocomplete and DatePicker name the red color `error` instead of `danger`.

| Component         | `variant` values                                | Notes                                                           |
| ----------------- | ----------------------------------------------- | --------------------------------------------------------------- |
| Alert             | solid, soft, outlined, ghost, plain             |                                                                 |
| Autocomplete      | solid, soft, outlined, ghost, plain             | Uses `error` instead of `danger`                                |
| Avatar            | solid, soft, outlined, ghost, plain             | Optional `status` dot                                           |
| Badge             | solid, soft, outlined, ghost, plain             |                                                                 |
| Breadcrumbs       | solid, soft, outlined, ghost, plain             |                                                                 |
| Button            | solid, soft, outlined, dash, ghost, plain, link | `loading`, `shape`, start and end icons                         |
| Card              | solid, soft, outlined, ghost, plain             |                                                                 |
| Checkbox          | solid, soft, outlined, ghost, plain             | `label` prop                                                    |
| Chip              | solid, soft, outlined, ghost, plain             |                                                                 |
| DatePicker        | solid, soft, outlined, ghost, plain             | MUI X Date Pickers with dayjs; uses `error`; re-exports `dayjs` |
| Dialog            | solid, soft, outlined, ghost, plain             | Also exports DialogTitle, DialogContent, DialogActions          |
| Drawer            | solid, soft, outlined, ghost, plain             |                                                                 |
| Pagination        | solid, soft, outlined, ghost, plain             |                                                                 |
| Popover           | solid, soft, outlined, ghost, plain             |                                                                 |
| Progress          | solid, soft, outlined, ghost, plain             | Linear and circular                                             |
| Radio             | solid, soft, outlined, ghost, plain             | `label` prop                                                    |
| Rating            | solid, soft, outlined, ghost, plain             |                                                                 |
| Select            | solid, soft, outlined, ghost, plain             | Also exports MenuItem                                           |
| Slider            | solid, soft, outlined, ghost, plain             |                                                                 |
| Snackbar          | solid, soft, outlined, ghost, plain             | Also exports SnackbarContent                                    |
| Switch            | solid, soft, outlined, ghost, plain             |                                                                 |
| Table             | solid, soft, outlined, ghost, plain             | Sorting, row selection, pagination, sticky header               |
| Tabs              | solid, soft, outlined, ghost, plain             | Horizontal or vertical, optional panels                         |
| TextField         | solid, soft, outlined, ghost, plain             |                                                                 |
| ToggleButtonGroup | solid, soft, outlined, ghost, plain             | Also exports ToggleButton                                       |
| Tooltip           | solid, soft, outlined, ghost, plain             |                                                                 |

## Accessibility

- In the light theme, each color's tokens reach 4.5:1 text contrast (the WCAG 2.1 AA level for normal text) in the resting state of the solid, soft, outlined, plain and link variants. A unit test in `packages/tokens` checks those pairs.
- Some hover and pressed states fall short: ghost and plain variants put `main` text on an 8% or 16% tint, which drops below 4.5:1 for some colors (danger and neutral on hover).
- Dark mode does not reach 4.5:1 yet: outlined, plain and link variants use the same `main` color as text on dark surfaces.
- Components rely on the keyboard and ARIA behavior of the MUI components they wrap. Six component test files run jest-axe, and Storybook includes the a11y addon, but the library has not had a full accessibility audit.

## Tests

- 422 unit tests in 28 files (Vitest, Testing Library, jsdom): 376 for the components, 5 that load the built CommonJS bundle with `require()`, and 41 contrast checks for the tokens.
- 372 Storybook stories, each run as a test in headless Chromium through Vitest browser mode, including 128 interaction (`play`) functions.
- CI runs lint, type-check, both test suites and a full build on every push and pull request to `main`.

## Development

Requires Node 22 and pnpm (run `corepack enable` once; the pnpm version comes from `packageManager`).

```bash
git clone https://github.com/tahmidbintaslim/sun-ui.git
cd sun-ui
pnpm install

pnpm build:packages      # build tokens, theme, core and react (tsup)
pnpm storybook:dev       # Storybook on http://localhost:6006
pnpm test:ci             # unit tests
pnpm test:storybook:ci   # Storybook tests (first run: pnpm exec playwright install chromium)
pnpm lint
pnpm type-check
pnpm build               # packages, Storybook and the web demo
```

```
sun-ui/
├── apps/
│   ├── docs/        Storybook (deployed to Vercel)
│   └── web/         Landing page demo (not deployed)
└── packages/
    ├── react/       Components, tests and stories
    ├── theme/       MUI themes
    ├── tokens/      Design tokens and the contrast test
    ├── core/        Shared types and helpers
    └── icons/       Empty placeholder
```

## Known gaps

- Not published to npm yet.
- Dark-mode text contrast for outlined, plain and link variants, and some hover and pressed states (see [Accessibility](#accessibility)).
- `@smug-ui/icons` is empty.
- The packed packages have been imported and server-rendered from Node (ESM and CommonJS), but not yet tested inside a Next.js or Vite app.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Bugs and ideas go in [GitHub issues](https://github.com/tahmidbintaslim/sun-ui/issues). For security problems, follow [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE). Copyright 2026 Tahmid Bin Taslim Rafi ([@tahmidbintaslim](https://github.com/tahmidbintaslim)) and Sun UI contributors.

Sun UI is not affiliated with or endorsed by MUI (Material UI SAS).
