import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
    it('renders button with text', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('renders all variants', () => {
        const variants = ['solid', 'soft', 'outlined', 'ghost', 'plain'] as const;
        variants.forEach((variant) => {
            const { unmount } = render(
                <Button variant={variant} data-testid={`button-${variant}`}>
                    {variant}
                </Button>
            );
            expect(screen.getByTestId(`button-${variant}`)).toBeInTheDocument();
            unmount();
        });
    });

    it('handles disabled state', () => {
        render(<Button disabled>Disabled</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });
});
