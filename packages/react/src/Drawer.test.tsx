import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Drawer } from './Drawer';

describe('Drawer', () => {
  it('renders with open state', () => {
    render(
      <Drawer open onClose={() => {}} data-testid="drawer">
        <div>Drawer content</div>
      </Drawer>
    );
    expect(screen.getByText('Drawer content')).toBeInTheDocument();
  });

  it('renders all variants', () => {
    const variants = ['solid', 'soft', 'outlined', 'ghost', 'plain'] as const;
    variants.forEach((variant) => {
      const { unmount } = render(
        <Drawer open onClose={() => {}} variant={variant} data-testid={`drawer-${variant}`}>
          <div data-testid={`drawer-content-${variant}`}>{variant}</div>
        </Drawer>
      );
      expect(screen.getByTestId(`drawer-content-${variant}`)).toBeInTheDocument();
      unmount();
    });
  });

  it('handles open state change', () => {
    const { rerender } = render(
      <Drawer open onClose={() => {}}>
        Drawer content
      </Drawer>
    );

    expect(screen.getByText('Drawer content')).toBeInTheDocument();

    rerender(
      <Drawer open={false} onClose={() => {}}>
        Drawer content
      </Drawer>
    );

    // Component still in DOM for animations, verify it's rendered
    expect(screen.getByText('Drawer content')).toBeInTheDocument();
  });

  it('supports different anchors', () => {
    const anchors = ['left', 'right', 'top', 'bottom'] as const;
    anchors.forEach((anchor) => {
      const { unmount } = render(
        <Drawer open onClose={() => {}} anchor={anchor} data-testid={`drawer-${anchor}`}>
          <div data-testid={`drawer-${anchor}-content`}>{anchor}</div>
        </Drawer>
      );
      expect(screen.getByTestId(`drawer-${anchor}-content`)).toBeInTheDocument();
      unmount();
    });
  });
});
