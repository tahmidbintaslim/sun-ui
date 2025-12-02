import { FormControlLabel } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Switch } from './Switch';

describe('Switch', () => {
    it('renders switch', () => {
        render(<Switch />);
        expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('renders with label', () => {
        render(
            <FormControlLabel
                control={<Switch />}
                label="Test Switch"
            />
        );
        expect(screen.getByLabelText('Test Switch')).toBeInTheDocument();
    });

    it('handles disabled state', () => {
        render(<Switch disabled />);
        expect(screen.getByRole('switch')).toBeDisabled();
    });

    it('renders all variants', () => {
        const variants = ['solid', 'soft', 'outlined', 'ghost', 'plain'] as const;
        variants.forEach((variant) => {
            const { unmount } = render(
                <Switch variant={variant} data-testid={`switch-${variant}`} />
            );
            expect(screen.getByTestId(`switch-${variant}`)).toBeInTheDocument();
            unmount();
        });
    });
});
