import { FormControlLabel, RadioGroup } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders radio button', () => {
    render(<Radio />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(
      <RadioGroup>
        <FormControlLabel control={<Radio />} label="Test" value="test" />
      </RadioGroup>
    );
    expect(screen.getByLabelText('Test')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Radio disabled />);
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('renders all variants', () => {
    const variants = ['solid', 'soft', 'outlined', 'ghost', 'plain'] as const;
    variants.forEach((variant) => {
      const { unmount } = render(<Radio variant={variant} data-testid={`radio-${variant}`} />);
      expect(screen.getByTestId(`radio-${variant}`)).toBeInTheDocument();
      unmount();
    });
  });
});
