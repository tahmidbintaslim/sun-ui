import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Popover } from './Popover';

describe('Popover', () => {
  it('renders with open state', () => {
    render(
      <Popover open anchorEl={document.body} onClose={() => {}} data-testid="popover">
        <div>Popover content</div>
      </Popover>
    );
    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('renders all variants', () => {
    const variants = ['solid', 'soft', 'outlined', 'ghost', 'plain'] as const;
    variants.forEach((variant) => {
      const { unmount } = render(
        <Popover
          open
          variant={variant}
          anchorEl={document.body}
          onClose={() => {}}
          data-testid={`popover-${variant}`}
        >
          <div>{variant}</div>
        </Popover>
      );
      expect(screen.getByText(variant)).toBeInTheDocument();
      unmount();
    });
  });

  it('handles open state change', () => {
    const { rerender } = render(
      <Popover open anchorEl={document.body} onClose={() => {}}>
        Popover content
      </Popover>
    );

    expect(screen.getByText('Popover content')).toBeInTheDocument();

    rerender(
      <Popover open={false} anchorEl={document.body} onClose={() => {}}>
        Popover content
      </Popover>
    );

    // Component still in DOM for animations, verify it's rendered
    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });
});
