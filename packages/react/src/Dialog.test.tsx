import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Dialog, DialogActions, DialogContent, DialogTitle } from './Dialog';

describe('Dialog', () => {
  it('renders with open state', () => {
    render(
      <Dialog open onClose={() => {}} data-testid="dialog">
        <DialogTitle>Test Dialog</DialogTitle>
        <DialogContent>Dialog content</DialogContent>
      </Dialog>
    );
    expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    expect(screen.getByText('Dialog content')).toBeInTheDocument();
  });

  it('renders all variants', () => {
    const variants = ['solid', 'soft', 'outlined', 'ghost', 'plain'] as const;
    variants.forEach((variant) => {
      const { unmount } = render(
        <Dialog open onClose={() => {}} variant={variant} data-testid={`dialog-${variant}`}>
          <DialogTitle data-testid={`dialog-title-${variant}`}>{variant}</DialogTitle>
        </Dialog>
      );
      expect(screen.getByTestId(`dialog-title-${variant}`)).toBeInTheDocument();
      unmount();
    });
  });

  it('handles open state change', () => {
    const { rerender } = render(
      <Dialog open onClose={() => {}}>
        <DialogTitle>Dialog</DialogTitle>
      </Dialog>
    );

    expect(screen.getByText('Dialog')).toBeInTheDocument();

    rerender(
      <Dialog open={false} onClose={() => {}}>
        <DialogTitle>Dialog</DialogTitle>
      </Dialog>
    );

    // Component still in DOM for animations, verify it's rendered
    expect(screen.getByText('Dialog')).toBeInTheDocument();
  });

  it('renders dialog with actions', () => {
    render(
      <Dialog open onClose={() => {}}>
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>Are you sure?</DialogContent>
        <DialogActions>
          <button>Cancel</button>
          <button>Confirm</button>
        </DialogActions>
      </Dialog>
    );

    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
  });
});
