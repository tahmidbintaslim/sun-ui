# Contributing to Sun UI

First off, thank you for considering a contribution to Sun UI! It's people like you that make Sun UI such a great tool.

This document provides guidelines and instructions for contributing to Sun UI.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)
- [Style Guide](#style-guide)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please read and adhere to our Code of Conduct:

- Be respectful of differing opinions, viewpoints, and experiences
- Give and gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the maintainers. All complaints will be reviewed and investigated.

---

## Getting Started

### Prerequisites

- **Node.js**: v20 or higher
- **pnpm**: v10 or higher
- **Git**: Latest version

### Fork & Clone

```bash
# 1. Fork the repository on GitHub
# Visit: https://github.com/tahmidbintaslim/sun-ui/fork

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/sun-ui.git
cd sun-ui

# 3. Add upstream remote
git remote add upstream https://github.com/tahmidbintaslim/sun-ui.git

# 4. Keep your fork updated
git fetch upstream
```

---

## Development Setup

### Install Dependencies

```bash
pnpm install
```

### Build Packages

```bash
pnpm build
```

### Start Development

```bash
# Start Storybook in watch mode
pnpm dev

# Or manually:
cd apps/docs
pnpm storybook
```

Visit: **http://localhost:6006**

### Run Tests

```bash
# Run all tests
pnpm test

# Watch mode
pnpm test:watch

# Watch specific package
pnpm test packages/react --watch
```

---

## Making Changes

### Create a Feature Branch

```bash
git checkout -b feat/your-feature-name

# Or for bug fixes:
git checkout -b fix/bug-description

# Or for documentation:
git checkout -b docs/what-you-improved
```

### Branch Naming Convention

- `feat/` — New feature
- `fix/` — Bug fix
- `docs/` — Documentation
- `style/` — Code style (formatting, missing semicolons, etc.)
- `refactor/` — Code refactoring without feature changes
- `perf/` — Performance improvements
- `test/` — Adding tests
- `chore/` — Maintenance, dependencies, tooling

### Make Your Changes

#### Adding a New Component

1. **Create component file**

   ```bash
   packages/react/src/MyComponent.tsx
   ```

2. **Create test file**

   ```bash
   packages/react/src/MyComponent.test.tsx
   ```

3. **Create story file**

   ```bash
   packages/react/src/MyComponent.stories.tsx
   ```

4. **Export in index**

   ```bash
   packages/react/src/index.ts
   ```

5. **Use Button as a template** — Follow the same pattern for consistency

#### Modifying Existing Code

1. Make your changes
2. Update related tests
3. Update TypeScript types if needed
4. Run tests: `pnpm test`
5. Check Storybook: `pnpm dev`

#### Adding Tests

Every feature should have corresponding tests:

```typescript
// Use RTL for unit tests
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('should render', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should handle click', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);

    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
```

#### Adding Stories

Create interactive stories in Storybook:

```typescript
// MyComponent.stories.tsx
import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent } from '@storybook/test';
import { MyComponent } from './MyComponent';

const meta = {
  title: 'Atoms/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'solid',
    children: 'Click me',
  },
};

export const Interactive: Story = {
  args: {
    variant: 'solid',
  },
  play: async ({ args, canvas }) => {
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
```

---

## Commit Guidelines

### Conventional Commits

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat` — A new feature
- `fix` — A bug fix
- `docs` — Documentation only changes
- `style` — Changes that do not affect the meaning of the code
- `refactor` — A code change that neither fixes a bug nor adds a feature
- `perf` — A code change that improves performance
- `test` — Adding missing tests
- `chore` — Changes to build process, dependencies, tooling, etc.

### Examples

```bash
git commit -m "feat(button): add loading state"
git commit -m "fix(checkbox): correct disabled styling"
git commit -m "docs: update component API guide"
git commit -m "test(select): add dropdown interaction tests"
```

### Writing Good Commit Messages

- Use imperative mood ("add feature" not "added feature")
- Don't capitalize first letter
- No period (.) at the end
- Limit subject to 50 characters
- Reference issues when applicable: "fixes #123"

---

## Pull Request Process

### Before Submitting

1. **Sync with main**

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run tests**

   ```bash
   pnpm test
   ```

3. **Check TypeScript**

   ```bash
   pnpm type-check
   ```

4. **Lint code**

   ```bash
   pnpm lint
   ```

5. **Build packages**
   ```bash
   pnpm build
   ```

### Creating a Pull Request

1. **Push to your fork**

   ```bash
   git push origin feat/your-feature-name
   ```

2. **Create PR on GitHub**
   - Provide a clear title
   - Reference related issues: "Fixes #123"
   - Describe your changes in detail
   - Include screenshots/GIFs if UI changes

3. **PR Template**

   ```markdown
   ## Description

   Brief description of changes.

   ## Type of Change

   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation
   - [ ] Refactoring

   ## Related Issues

   Fixes #123

   ## Changes Made

   - Change 1
   - Change 2
   - Change 3

   ## Testing

   - [ ] Unit tests pass
   - [ ] Interaction tests pass
   - [ ] No console errors
   - [ ] Verified in Storybook

   ## Screenshots (if applicable)

   <!-- Add screenshots of UI changes -->
   ```

### Review Process

- At least one maintainer review required
- All checks must pass (tests, linting, build)
- Discussions will happen inline
- Squash and merge to main

### After Merge

Your changes will be:

1. Included in the next release
2. Added to CHANGELOG.md
3. Published to npm

---

## Reporting Bugs

### Before Reporting

- Check if issue already exists
- Update to latest version
- Check documentation
- Search closed issues

### Report a Bug

[Create bug report →](https://github.com/tahmidbintaslim/sun-ui/issues/new?template=bug_report.md)

**Include:**

- Clear, descriptive title
- Detailed description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment (OS, browser, versions)
- Code example or CodeSandbox
- Screenshots/GIFs if applicable

---

## Requesting Features

### Before Requesting

- Check if feature already requested
- Review roadmap
- Verify it aligns with project goals

### Request a Feature

[Start discussion →](https://github.com/tahmidbintaslim/sun-ui/discussions/new?category=ideas)

**Describe:**

- What problem it solves
- How it should work
- Example usage
- Why it's important
- Alternatives considered

---

## Style Guide

### TypeScript

- Use strict mode
- Always provide types
- Avoid `any` type
- Use interfaces for props
- Export types that are used externally

```typescript
// Good
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'soft' | 'outlined';
  loading?: boolean;
}

// Avoid
interface ButtonProps {
  [key: string]: any;
}
```

### React

- Use functional components
- Use `forwardRef` for component refs
- Add `displayName`
- Use proper TypeScript props
- Prop spreading should be explicit

```typescript
// Good
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'solid', ...rest }, ref) => (
    <MuiButton ref={ref} {...rest} />
  )
);
Button.displayName = 'Button';

// Avoid
export function Button(props: any) {
  return <button {...props} />;
}
```

### Testing

- Write meaningful test descriptions
- Test behavior, not implementation
- Use semantic queries (getByRole, getByLabelText)
- Cover happy path and edge cases

```typescript
// Good
it('should disable button when loading prop is true', () => {
  render(<Button loading>Submit</Button>);
  expect(screen.getByRole('button')).toBeDisabled();
});

// Avoid
it('should work', () => {
  // ...
});
```

### Stories

- One story per key state
- Use meaningful story names
- Include play functions for interactions
- Document props with argTypes

```typescript
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  play: async ({ canvas }) => {
    expect(canvas.getByRole('button')).toBeDisabled();
  },
};
```

### Naming

- Components: PascalCase (`Button`, `TextField`)
- Files: PascalCase matching component (`Button.tsx`)
- Variables/functions: camelCase (`buttonClick`, `handleChange`)
- Constants: UPPER_SNAKE_CASE (`MAX_LENGTH`, `DEFAULT_SIZE`)

---

## Resources

- **[Storybook Docs](https://storybook.js.org/docs)** — Component documentation
- **[React Docs](https://react.dev)** — React patterns
- **[TypeScript Docs](https://www.typescriptlang.org/docs)** — Type definitions
- **[MUI Docs](https://mui.com)** — Material-UI reference
- **[Testing Library](https://testing-library.com)** — Testing patterns

---

## Questions?

- **[GitHub Discussions](https://github.com/tahmidbintaslim/sun-ui/discussions)** — Ask questions
- **[GitHub Issues](https://github.com/tahmidbintaslim/sun-ui/issues)** — Report problems
- **Email**: hello@tahmir.dev

---

## License

By contributing to Sun UI, you agree that your contributions will be licensed under its MIT License.

---

<div align="center">

**Thank you for contributing to Sun UI! 🌞**

Every contribution makes Sun UI better for everyone.

</div>
