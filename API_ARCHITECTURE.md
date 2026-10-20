# Sun UI architecture

How the packages fit together and how a component is put together. For usage, see [DOCUMENTATION.md](DOCUMENTATION.md). For tests and the release flow, see [TESTING_GUIDE.md](TESTING_GUIDE.md).

## Packages

Sun UI is a pnpm workspace run with Turborepo. The npm packages use the `@smug-ui` scope.

| Package           | Source            | What it holds                                                                                                         |
| ----------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| `@smug-ui/react`  | `packages/react`  | The 26 components, their unit tests and their Storybook stories                                                       |
| `@smug-ui/theme`  | `packages/theme`  | `lightTheme` and `darkTheme` (MUI `createTheme`) and MUI module augmentation for the Sun UI variant names             |
| `@smug-ui/tokens` | `packages/tokens` | Color scales, sizing, typography and animation tokens, plus the contrast test                                         |
| `@smug-ui/core`   | `packages/core`   | Shared `SunVariant` / `SunColor` / `SunSize` types, variant presets, accessibility helpers and headless state helpers |
| `@smug-ui/icons`  | `packages/icons`  | Empty placeholder, private                                                                                            |
| `docs` (private)  | `apps/docs`       | Storybook 10, deployed to Vercel                                                                                      |
| `web` (private)   | `apps/web`        | Vite landing page demo, not deployed                                                                                  |

Dependencies between them:

```
@smug-ui/react
├── @smug-ui/core   ── @smug-ui/tokens
├── @smug-ui/theme  ── @smug-ui/tokens
└── @smug-ui/tokens

peer dependencies of @smug-ui/react:
react, react-dom, @mui/material, @mui/icons-material, @mui/x-date-pickers,
@emotion/react, @emotion/styled, dayjs
```

`@smug-ui/core` is used at runtime by Progress and Rating; Slider and ToggleButtonGroup import only its types.

## Build

Each package builds with [tsup](https://tsup.egoist.dev) (`packages/*/tsup.config.ts`):

- one entry, `src/index.ts`
- ESM (`dist/index.js`) and CommonJS (`dist/index.cjs`), each with its own type file (`index.d.ts`, `index.d.cts`) and a source map
- dependencies and peer dependencies stay external
- `@smug-ui/react` starts with a `"use client"` banner, because every component uses MUI `styled()` and React hooks

`package.json` `exports` maps `import` and `require` to those files, and every package declares `"sideEffects": false`.

Inside the workspace, packages import each other from `dist/`, so `pnpm build:packages` must run before tests, type-check or Storybook. Turborepo handles this for `build`, `type-check` and `test` through `dependsOn: ["^build"]`.

## Components

Every component in `packages/react/src` follows the same shape:

1. A props interface that extends the MUI component's props, with `variant`, `color` and `size` replaced by the Sun UI unions:

   ```ts
   type SunVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
   type SunColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
   type SunSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

   export interface ChipProps extends Omit<MuiChipProps, 'variant' | 'size' | 'color'> {
     variant?: SunVariant;
     color?: SunColor;
     size?: SunSize;
   }
   ```

   Button adds `dash` and `link` to its variants. Autocomplete and DatePicker name the red color `error`.

2. A `styled()` wrapper around the MUI component. The Sun UI props travel as styled-only props (for example `$variant` and `$color`, or `sunVariant` and `sunColor`) that `shouldForwardProp` keeps off the DOM.

3. Styles that take the variant colors from `@smug-ui/tokens` (`colors[color]` or `colors.semantic[color]`) and read `theme.palette.mode` to pick light or dark values. Changing `palette.primary` in your MUI theme does not change them.

4. A `React.forwardRef` export with a `displayName`.

Each component has a `*.test.tsx` file (Vitest, Testing Library, jsdom) and a `*.stories.tsx` file next to it.

## Tokens and themes

`@smug-ui/tokens` exports each color as a scale (`50` to `900`) with `main`, `light`, `dark`, `contrastText` and alpha steps (`alpha8` to `alpha40`). Components use `main` both as a solid background under `contrastText` and as text on light surfaces, so `main` and `dark` are chosen to reach 4.5:1 against white and against `contrastText`. `src/contrast.test.ts` checks those pairs and fails the unit test run if a change breaks one.

`sunPalette` is a second, smaller palette that feeds `@smug-ui/theme`. The themes set MUI's `primary`, `secondary`, `success`, `warning` and `error` from it, which affects plain MUI components rendered inside the provider.

## Extending

- Pass `sx` or wrap a component with MUI's `styled()`; both work because Sun UI components are MUI components underneath.
- Extend a theme with `createTheme(lightTheme, { ... })`.
- Prop types are exported (`ButtonProps`, `TableProps`, and so on) for your own wrappers.

## Known limits

- Dark mode text contrast for outlined, plain and link variants is below 4.5:1, because they use the same `main` color on dark surfaces.
- In the light theme, ghost and plain hover and pressed tints drop below 4.5:1 for some colors.
- Each component declares its own copy of the variant, color and size unions instead of importing them from `@smug-ui/core`, except Progress, Rating, Slider and ToggleButtonGroup.
