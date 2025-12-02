import { FormControlLabel } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
    it('renders checkbox', () => {
        render(<Checkbox />);
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('renders with label', () => {
        render(<FormControlLabel control={<Checkbox />} label="Test" />);
        expect(screen.getByLabelText('Test')).toBeInTheDocument();
    });

    it('handles disabled state', () => {
        render(<Checkbox disabled />);
        expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('renders all variants', () => {
        const variants = ['solid', 'soft', 'outlined', 'ghost', 'plain'] as const;
        variants.forEach((variant) => {
            const { unmount } = render(
                <Checkbox variant={variant} data-testid={`checkbox-${variant}`} />
            );
            expect(screen.getByTestId(`checkbox-${variant}`)).toBeInTheDocument();
            unmount();
        });
    });
});
