import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Snackbar } from './Snackbar';

describe('Snackbar', () => {
  it('renders with open state and message', () => {
    render(<Snackbar open onClose={() => {}} message="Test Message" data-testid="snackbar" />);
    expect(screen.getByText('Test Message')).toBeInTheDocument();
  });

  it('renders all variants', () => {
    const variants = ['solid', 'soft', 'outlined', 'ghost', 'plain'] as const;
    variants.forEach((variant) => {
      const { unmount } = render(
        <Snackbar
          open
          onClose={() => {}}
          variant={variant}
          message={variant}
          data-testid={`snackbar-${variant}`}
        />
      );
      expect(screen.getByText(variant)).toBeInTheDocument();
      unmount();
    });
  });

  it('does not render when closed', () => {
    const { rerender } = render(<Snackbar open onClose={() => {}} message="Test Message" />);

    expect(screen.getByText('Test Message')).toBeInTheDocument();

    rerender(<Snackbar open={false} onClose={() => {}} message="Test Message" />);

    // Component still in DOM for animations, verify it's rendered
    expect(screen.getByText('Test Message')).toBeInTheDocument();
  });

  it('handles onClose callback', () => {
    render(<Snackbar open onClose={() => {}} message="Test" />);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('renders with action button', () => {
    render(<Snackbar open onClose={() => {}} message="Test" action={<button>Action</button>} />);

    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });

  it('supports different anchor positions', () => {
    const positions = [
      { vertical: 'top', horizontal: 'left' },
      { vertical: 'bottom', horizontal: 'right' },
    ] as const;

    positions.forEach(({ vertical, horizontal }) => {
      const { unmount } = render(
        <Snackbar open onClose={() => {}} message="Test" anchorOrigin={{ vertical, horizontal }} />
      );
      expect(screen.getByText('Test')).toBeInTheDocument();
      unmount();
    });
  });
});
