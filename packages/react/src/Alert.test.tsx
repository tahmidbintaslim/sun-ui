import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders alert with children', () => {
    render(<Alert data-testid="alert">Alert message</Alert>);
    expect(screen.getByText('Alert message')).toBeInTheDocument();
  });

  it('renders alert with different severities', () => {
    const severities = ['success', 'info', 'warning', 'error'] as const;
    severities.forEach((severity) => {
      const { unmount } = render(
        <Alert severity={severity} data-testid={`alert-${severity}`}>
          {severity} alert
        </Alert>
      );
      expect(screen.getByTestId(`alert-${severity}`)).toBeInTheDocument();
      unmount();
    });
  });

  it('renders all variants', () => {
    const variants = ['solid', 'soft', 'outlined', 'ghost', 'plain'] as const;
    variants.forEach((variant) => {
      const { unmount } = render(
        <Alert variant={variant} data-testid={`alert-${variant}`}>
          {variant} alert
        </Alert>
      );
      expect(screen.getByTestId(`alert-${variant}`)).toBeInTheDocument();
      unmount();
    });
  });

  it('renders alert with action button', () => {
    render(
      <Alert data-testid="alert-action" action={<button>Close</button>}>
        Alert with action
      </Alert>
    );
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });
});
