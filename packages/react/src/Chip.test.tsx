import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Chip } from './Chip';

describe('Chip', () => {
    it('renders chip with label', () => {
        render(<Chip label="Test Chip" data-testid="chip" />);
        expect(screen.getByText('Test Chip')).toBeInTheDocument();
    });

    it('renders all variants', () => {
        const variants = ['solid', 'soft', 'outlined', 'ghost', 'plain'] as const;
        variants.forEach((variant) => {
            const { unmount } = render(
                <Chip variant={variant} label={variant} data-testid={`chip-${variant}`} />
            );
            expect(screen.getByTestId(`chip-${variant}`)).toBeInTheDocument();
            unmount();
        });
    });

    it('handles disabled state', () => {
        render(<Chip label="Disabled" disabled data-testid="chip-disabled" />);
        expect(screen.getByTestId('chip-disabled')).toHaveClass('Mui-disabled');
    });

    it('calls onDelete when delete button is clicked', () => {
        const handleDelete = vi.fn();
        render(
            <Chip
                label="Deletable"
                onDelete={handleDelete}
                data-testid="chip-deletable"
            />
        );
        expect(screen.getByTestId('chip-deletable')).toBeInTheDocument();
    });
});
