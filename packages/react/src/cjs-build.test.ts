// @vitest-environment node
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

// Loads the built CommonJS bundle with Node's own require(), the way a CJS or Jest
// consumer would. These components default-import MUI subpaths
// (`import Box from '@mui/material/Box'`), which broke in the CJS build when the
// package was "type": "module". CI builds the packages before the unit tests;
// locally, run `pnpm build:packages` first or this suite is skipped.
const distEntry = fileURLToPath(new URL('../dist/index.js', import.meta.url));

describe.skipIf(!existsSync(distEntry))('CommonJS build', () => {
  const require = createRequire(distEntry);
  const { createElement: h } = require('react');
  const { renderToString } = require('react-dom/server');
  const ui = require(distEntry);

  const cases: Record<string, () => unknown> = {
    Progress: () => h(ui.Progress, { value: 40 }),
    'Progress (circular)': () => h(ui.Progress, { type: 'circular', value: 40 }),
    Rating: () => h(ui.Rating, { value: 3 }),
    Slider: () => h(ui.Slider, { value: 3 }),
    ToggleButtonGroup: () =>
      h(ui.ToggleButtonGroup, { value: 'a' }, h(ui.ToggleButton, { value: 'a' }, 'A')),
  };

  it.each(Object.keys(cases))('server-renders %s through require()', (name) => {
    const html: string = renderToString(cases[name]());
    expect(html).toMatch(/^</);
  });
});
