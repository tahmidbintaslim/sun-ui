# Testing & Development Guide

Complete guide for testing, developing, and extending Sun UI.

## Table of Contents

1. [Getting Started with Development](#getting-started-with-development)
2. [Development Setup](#development-setup)
3. [Project Structure](#project-structure)
4. [Testing](#testing)
5. [Running Tests](#running-tests)
6. [Creating Components](#creating-components)
7. [Component Guidelines](#component-guidelines)
8. [Storybook](#storybook)
9. [CI/CD Pipeline](#cicd-pipeline)
10. [Publishing](#publishing)

---

## Getting Started with Development

### Prerequisites

- **Node.js** v20+
- **pnpm** v10+
- **Git** latest version

### Initial Setup

```bash
# Clone repository
git clone https://github.com/tahmidbintaslim/sun-ui.git
cd sun-ui

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Start development
pnpm dev
```

---

## Development Setup

### Environment

Sun UI uses a monorepo structure with TurboRepo and pnpm workspaces.

### Scripts Available

```bash
# Build all packages
pnpm build

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Lint code
pnpm lint

# Type check
pnpm type-check

# Start Storybook
pnpm storybook:dev

# Build Storybook
pnpm storybook:build

# Clean everything
pnpm clean
```

### Monorepo Structure

```
sun-ui/
├── apps/
│   └── docs/                    # Storybook application
│       ├── .storybook/          # Storybook configuration
│       ├── storybook-static/    # Built Storybook
│       └── vitest.config.ts     # Vitest configuration
│
├── packages/
│   ├── core/                    # Headless primitives (future)
│   ├── icons/                   # Icon library (2000+ SVG)
│   ├── react/                   # React components
│   │   ├── src/
│   │   │   ├── Alert.tsx
│   │   │   ├── Alert.test.tsx
│   │   │   ├── Alert.stories.tsx
│   │   │   └── index.ts
│   │   ├── dist/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vitest.config.ts
│   ├── theme/                   # MUI theme configuration
│   ├── tokens/                  # Design tokens
│   └── package.json
│
├── .github/
│   ├── workflows/
│   │   ├── test.yml             # Test on push
│   │   ├── storybook-publish.yml # Publish Storybook to Chromatic
│   │   └── publish.yml          # Publish to npm
│   └── ISSUE_TEMPLATE/
│
├── package.json                 # Root package
├── pnpm-workspace.yaml          # Workspace configuration
├── turbo.json                   # TurboRepo configuration
├── tsconfig.json                # TypeScript configuration
├── vitest.config.ts             # Vitest configuration
└── eslint.config.js             # ESLint configuration
```

---

## Testing

### Test Stack

- **Framework**: Vitest
- **Library**: React Testing Library
- **Browser**: Playwright (for integration tests)
- **Accessibility**: Axe-core

### Test Types

#### Unit Tests

Test individual components in isolation:

```tsx
// Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders with solid variant', () => {
    render(<Button variant="solid">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('supports disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

#### Integration Tests

Test component interactions:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField, Button } from '@sun-ui/react';

describe('Form Integration', () => {
  it('submits form data', async () => {
    const handleSubmit = vi.fn();
    render(
      <form onSubmit={handleSubmit}>
        <TextField label="Name" name="name" />
        <Button type="submit">Submit</Button>
      </form>
    );

    await userEvent.type(screen.getByLabelText('Name'), 'John');
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
```

#### Accessibility Tests

Test for WCAG compliance:

```tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

describe('Button Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

#### Snapshot Tests

Document UI changes:

```tsx
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button Snapshots', () => {
  it('matches snapshot', () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container).toMatchSnapshot();
  });
});
```

### Test Coverage

Run tests with coverage report:

```bash
# Run all tests with coverage
pnpm test:coverage

# Watch specific file
pnpm test packages/react/src/Button.test.tsx --watch
```

---

## Running Tests

### Run All Tests

```bash
pnpm test
```

### Run Tests in Watch Mode

```bash
pnpm test:watch
```

### Run Tests for Specific Package

```bash
pnpm test packages/react
```

### Run Single Test File

```bash
pnpm test packages/react/src/Button.test.tsx
```

### Run Tests with Coverage

```bash
pnpm test:coverage
```

### Run Storybook Tests

```bash
pnpm test:storybook
```

---

## Creating Components

### Component Template

Follow this structure for all new components:

```tsx
// components/MyComponent/MyComponent.tsx
import * as React from 'react';
import { MuiComponent, MuiComponentProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface MyComponentProps extends MuiComponentProps {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}

const StyledComponent = styled(MuiComponent, {
  shouldForwardProp: (prop) => !['variant'].includes(prop as string),
})<MyComponentProps>(({ theme, variant = 'solid' }) => {
  const baseStyles = {
    // Common styles
  };

  const variantStyles = {
    solid: {
      // Solid variant styles
    },
    soft: {
      // Soft variant styles
    },
    outlined: {
      // Outlined variant styles
    },
    ghost: {
      // Ghost variant styles
    },
    plain: {
      // Plain variant styles
    },
  };

  return {
    ...baseStyles,
    ...variantStyles[variant],
  };
});

export const MyComponent = React.forwardRef<HTMLElement, MyComponentProps>(
  ({ variant = 'solid', ...props }, ref) => <StyledComponent ref={ref} {...props} />
);

MyComponent.displayName = 'MyComponent';
```

### Component Test Template

```tsx
// components/MyComponent/MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders', () => {
    render(<MyComponent />);
    // Add assertions
  });

  it('supports all variants', () => {
    const variants = ['solid', 'soft', 'outlined', 'ghost', 'plain'] as const;
    variants.forEach((variant) => {
      render(<MyComponent variant={variant} />);
      // Add variant-specific assertions
    });
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLElement>();
    render(<MyComponent ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
```

### Component Story Template

```tsx
// components/MyComponent/MyComponent.stories.tsx
import { Meta, StoryObj } from '@storybook/react-vite';
import { MyComponent } from './MyComponent';

const meta = {
  title: 'Atoms/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'outlined', 'ghost', 'plain'],
    },
  },
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <MyComponent variant="solid" />
      <MyComponent variant="soft" />
      <MyComponent variant="outlined" />
      <MyComponent variant="ghost" />
      <MyComponent variant="plain" />
    </div>
  ),
};
```

### Steps to Create a Component

1. **Create the component file** with TypeScript
2. **Write unit tests** (.test.tsx)
3. **Create Storybook stories** (.stories.tsx)
4. **Test accessibility** with axe-core
5. **Document the component** in DOCUMENTATION.md
6. **Export from index.ts** for tree-shaking
7. **Update CHANGELOG.md** with the new component

---

## Component Guidelines

### Variant System

All components must support 5 variants:

1. **Solid** — Primary action, highest importance
2. **Soft** — Secondary action, medium importance
3. **Outlined** — Tertiary action, medium-low importance
4. **Ghost** — Low-priority action
5. **Plain** — Minimal action, text-only

### TypeScript

- Use strict TypeScript mode
- Export interfaces for public props
- Use `forwardRef` for ref support
- Set `displayName` for debugging

### Styling

- Use `styled()` from MUI for consistency
- Use `shouldForwardProp` to exclude custom props
- Support `sx` prop for customization
- Ensure dark mode compatibility

### Accessibility

- Use semantic HTML elements
- Support keyboard navigation
- Include ARIA attributes
- Ensure sufficient color contrast
- Test with screen readers

### Performance

- Memoize components if needed
- Avoid inline function creation
- Use CSS-in-JS efficiently
- Tree-shake unused code

---

## Storybook

### Start Storybook

```bash
pnpm storybook:dev
```

Visit: http://localhost:6006

### Build Storybook

```bash
pnpm storybook:build
```

### Story Organization

Stories are organized by component category:

- **Atoms** — Base components (Button, TextField, etc.)
- **Molecules** — Component combinations
- **Organisms** — Complex component groups
- **Pages** — Full page templates
- **Documentation** — Usage guides

### Story Examples

```tsx
// Basic story
export const Solid: Story = {
  args: {
    variant: 'solid',
  },
};

// Story with render function
export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
};

// Story with decorators
export const InCard: Story = {
  decorators: [
    (Story) => (
      <Card>
        <CardContent>
          <Story />
        </CardContent>
      </Card>
    ),
  ],
};
```

### Storybook Features

- **Docs** — Auto-generated documentation
- **Controls** — Interactive prop editing
- **Interactions** — User interaction testing
- **Accessibility** — A11y testing addon
- **Visual tests** — Chromatic integration

---

## CI/CD Pipeline

### GitHub Actions Workflows

#### Test Workflow (test.yml)

Runs on every push and pull request:

1. Install dependencies
2. Run linter (ESLint)
3. Run type checker (tsc)
4. Run tests (vitest)
5. Build packages
6. Build Storybook

#### Storybook Publish (storybook-publish.yml)

Publishes Storybook to Chromatic on push:

1. Install dependencies
2. Build Storybook
3. Publish to Chromatic
4. Report results to GitHub

#### Publish Workflow (publish.yml)

Publishes packages to npm on release:

1. Create release via Changesets
2. Build all packages
3. Publish to npm registry
4. Create GitHub release

### Local CI Check

Run all CI checks locally:

```bash
# Run tests
pnpm test

# Run linter
pnpm lint

# Run type check
pnpm type-check

# Build
pnpm build

# Build Storybook
pnpm storybook:build
```

---

## Publishing

### Using Changesets

Changesets automate version management and publishing:

```bash
# Create a changeset
pnpm changeset

# List pending changesets
pnpm changeset status

# Version bump
pnpm changeset version
```

### Changeset Format

`.changeset/meaningful-name.md`:

```markdown
---
'@sun-ui/react': minor
'@sun-ui/theme': patch
---

Added new Avatar component with 5 variants.
```

### Publishing to npm

```bash
# Build all packages
pnpm build

# Publish to npm (requires authentication)
pnpm publish -r

# Or via CI/CD (automatic on GitHub release)
```

---

## Debugging

### Debug Tests

Run tests with debugging:

```bash
node --inspect-brk ./node_modules/vitest/vitest.mjs
```

Then open `chrome://inspect` in Chrome.

### Debug Storybook

Add debugging to stories:

```tsx
export const Debug: Story = {
  parameters: {
    controls: { expanded: true },
  },
  render: (args) => {
    console.log('Component args:', args);
    return <MyComponent {...args} />;
  },
};
```

### TypeScript Debugging

Enable stricter type checking:

```bash
pnpm type-check
```

Check `tsconfig.json` for strict options.

---

## Best Practices

### Code Style

Follow the ESLint and Prettier configuration:

```bash
# Format code
pnpm format

# Lint and fix
pnpm lint --fix
```

### Commit Messages

Use conventional commits:

```
feat: add new Avatar component
fix: resolve Button hover state issue
docs: update theming guide
test: add Avatar unit tests
chore: update dependencies
```

### Branch Naming

Use descriptive branch names:

```
feat/avatar-component
fix/button-hover-state
docs/theming-guide
refactor/component-structure
```

### Pull Request Template

Reference the PR template in `.github/pull_request_template.md`:

- Title: Clear description of changes
- Description: What and why
- Tests: Added/updated tests
- Related: Link to related issues

---

## Troubleshooting

### Issue: Tests fail to run

```bash
# Clear cache
pnpm clean

# Reinstall
pnpm install

# Try again
pnpm test
```

### Issue: Storybook not starting

```bash
# Clear Storybook cache
rm -rf apps/docs/node_modules/.cache/storybook

# Rebuild
pnpm build

# Try starting
pnpm storybook:dev
```

### Issue: Build fails

```bash
# Clean all builds
pnpm clean

# Rebuild from scratch
pnpm build
```

### Issue: Type errors

```bash
# Run type check
pnpm type-check

# Fix TypeScript issues in files
```

---

## Additional Resources

- [Vitest Documentation](https://vitest.dev)
- [React Testing Library](https://testing-library.com/react)
- [Storybook Guide](https://storybook.js.org)
- [Material-UI Docs](https://mui.com)
- [Changesets Guide](https://github.com/changesets/changesets)

---

**Happy developing! 🚀**
