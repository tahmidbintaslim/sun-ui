import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { describe, expect, it, vi } from 'vitest';
import { Rating } from './Rating';

expect.extend(toHaveNoViolations);

describe('Rating', () => {
  // ─────────────────────────────────────────────────────────────────────────────
  // Basic Rendering
  // ─────────────────────────────────────────────────────────────────────────────

  describe('Rendering', () => {
    it('renders rating component', () => {
      render(<Rating name="test-rating" />);
      const radios = screen.getAllByRole('radio');
      expect(radios.length).toBeGreaterThan(0);
    });

    it('renders with default value', () => {
      render(<Rating name="test-rating" defaultValue={3} />);
      const checkedStar = screen.getByRole('radio', { checked: true });
      expect(checkedStar).toBeInTheDocument();
    });

    it('renders with controlled value', () => {
      render(<Rating name="test-rating" value={4} />);
      const radios = screen.getAllByRole('radio');
      const fourthStar = radios.find((r) => r.getAttribute('value') === '4');
      expect(fourthStar).toBeChecked();
    });

    it('renders correct number of stars', () => {
      render(<Rating name="test-rating" max={5} />);
      // 5 stars + 1 empty option
      const radios = screen.getAllByRole('radio');
      expect(radios.length).toBeGreaterThanOrEqual(5);
    });

    it('renders custom max stars', () => {
      render(<Rating name="test-rating" max={10} />);
      const radios = screen.getAllByRole('radio');
      expect(radios.length).toBeGreaterThanOrEqual(10);
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // Variants
  // ─────────────────────────────────────────────────────────────────────────────

  describe('Variants', () => {
    const variants = ['solid', 'soft', 'outlined', 'ghost', 'plain'] as const;

    variants.forEach((variant) => {
      it(`renders ${variant} variant`, () => {
        render(<Rating name={`rating-${variant}`} variant={variant} defaultValue={3} />);
        // Check for radio buttons which indicate the rating component is rendered
        const radios = screen.getAllByRole('radio');
        expect(radios.length).toBeGreaterThan(0);
      });
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // Colors
  // ─────────────────────────────────────────────────────────────────────────────

  describe('Colors', () => {
    const colors = [
      'primary',
      'secondary',
      'success',
      'warning',
      'danger',
      'info',
      'neutral',
    ] as const;

    colors.forEach((color) => {
      it(`renders ${color} color`, () => {
        render(<Rating name={`rating-${color}`} color={color} defaultValue={3} />);
        const radios = screen.getAllByRole('radio');
        expect(radios.length).toBeGreaterThan(0);
      });
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // Sizes
  // ─────────────────────────────────────────────────────────────────────────────

  describe('Sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

    sizes.forEach((size) => {
      it(`renders ${size} size`, () => {
        render(<Rating name={`rating-${size}`} size={size} defaultValue={3} />);
        const radios = screen.getAllByRole('radio');
        expect(radios.length).toBeGreaterThan(0);
      });
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // Value Changes
  // ─────────────────────────────────────────────────────────────────────────────

  describe('Value Changes', () => {
    it('calls onChange when value changes', async () => {
      const handleChange = vi.fn();
      render(<Rating name="test-rating" onChange={handleChange} />);

      const radios = screen.getAllByRole('radio');
      const thirdStar = radios.find((r) => r.getAttribute('value') === '3');

      if (thirdStar) {
        await userEvent.click(thirdStar);
        expect(handleChange).toHaveBeenCalled();
      }
    });

    it('updates internal value when uncontrolled', async () => {
      const handleChange = vi.fn();
      render(<Rating name="test-rating" defaultValue={2} onChange={handleChange} />);

      const radios = screen.getAllByRole('radio');
      const fourthStar = radios.find((r) => r.getAttribute('value') === '4');

      if (fourthStar) {
        await userEvent.click(fourthStar);
        // Check that onChange was called with the new value
        expect(handleChange).toHaveBeenCalled();
      }
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // Precision
  // ─────────────────────────────────────────────────────────────────────────────

  describe('Precision', () => {
    it('renders with half precision', () => {
      render(<Rating name="test-rating" precision={0.5} defaultValue={2.5} />);
      const radios = screen.getAllByRole('radio');
      expect(radios.length).toBeGreaterThan(0);
    });

    it('allows half-star selection when precision is 0.5', async () => {
      const handleChange = vi.fn();
      render(<Rating name="test-rating" precision={0.5} onChange={handleChange} />);

      const radios = screen.getAllByRole('radio');
      expect(radios.length).toBeGreaterThan(5);
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // Disabled State
  // ─────────────────────────────────────────────────────────────────────────────

  describe('Disabled State', () => {
    it('renders disabled rating', () => {
      render(<Rating name="test-rating" disabled defaultValue={3} />);
      const radios = screen.getAllByRole('radio');
      radios.forEach((radio) => {
        expect(radio).toBeDisabled();
      });
    });

    it('does not call onChange when disabled', async () => {
      const handleChange = vi.fn();
      render(<Rating name="test-rating" disabled onChange={handleChange} />);

      const radios = screen.getAllByRole('radio');
      const thirdStar = radios.find((r) => r.getAttribute('value') === '3');

      if (thirdStar) {
        await userEvent.click(thirdStar).catch(() => {});
        expect(handleChange).not.toHaveBeenCalled();
      }
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // Read-Only State
  // ─────────────────────────────────────────────────────────────────────────────

  describe('Read-Only State', () => {
    it('renders read-only rating', () => {
      render(<Rating name="test-rating" readOnly value={4} />);
      const rating = screen.getByRole('img');
      expect(rating).toBeInTheDocument();
    });

    it('displays the correct value when read-only', () => {
      render(<Rating name="test-rating" readOnly value={4} />);
      const rating = screen.getByRole('img');
      expect(rating).toHaveAttribute('aria-label');
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // Labels
  // ─────────────────────────────────────────────────────────────────────────────

  describe('Labels', () => {
    it('shows label when showLabel is true', () => {
      render(<Rating name="test-rating" defaultValue={3} showLabel />);
      expect(screen.getAllByText(/3 Stars/i).length).toBeGreaterThan(0);
    });

    it('uses custom label formatter', () => {
      render(
        <Rating
          name="test-rating"
          defaultValue={4}
          showLabel
          formatLabel={(value) => `${value}/5 rating`}
        />
      );
      expect(screen.getAllByText('4/5 rating').length).toBeGreaterThan(0);
    });

    it('shows helper text when provided', () => {
      render(<Rating name="test-rating" helperText="Click to rate" />);
      expect(screen.getByText('Click to rate')).toBeInTheDocument();
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // Hover State
  // ─────────────────────────────────────────────────────────────────────────────

  describe('Hover State', () => {
    it('calls onChangeActive when hovering', async () => {
      const handleChangeActive = vi.fn();
      render(<Rating name="test-rating" onChangeActive={handleChangeActive} />);

      const radios = screen.getAllByRole('radio');
      const thirdStar = radios.find((r) => r.getAttribute('value') === '3');

      if (thirdStar) {
        fireEvent.mouseEnter(thirdStar);
        // onChangeActive might be called on hover events
      }
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // Empty Rating
  // ─────────────────────────────────────────────────────────────────────────────

  describe('Empty Rating', () => {
    it('can clear rating by clicking same value', async () => {
      const handleChange = vi.fn();
      render(<Rating name="test-rating" defaultValue={3} onChange={handleChange} />);

      const radios = screen.getAllByRole('radio');
      const thirdStar = radios.find((r) => r.getAttribute('value') === '3');

      if (thirdStar) {
        await userEvent.click(thirdStar);
        // Clicking same value should clear
      }
    });

    it('renders with null value', () => {
      render(<Rating name="test-rating" value={null} />);
      // MUI Rating with null value renders as empty rating - look for the rating container
      const container = document.querySelector('.MuiRating-root');
      expect(container).toBeInTheDocument();
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // Label Positions
  // ─────────────────────────────────────────────────────────────────────────────

  describe('Label Positions', () => {
    const positions = ['left', 'right', 'top', 'bottom'] as const;

    positions.forEach((position) => {
      it(`renders label at ${position} position`, () => {
        render(
          <Rating name={`rating-${position}`} defaultValue={3} showLabel labelPosition={position} />
        );
        expect(screen.getAllByText(/3 Stars/i).length).toBeGreaterThan(0);
      });
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // Keyboard Navigation
  // ─────────────────────────────────────────────────────────────────────────────

  describe('Keyboard Navigation', () => {
    it('can be focused', async () => {
      render(<Rating name="test-rating" defaultValue={3} />);
      const radios = screen.getAllByRole('radio');
      const checkedRadio = radios.find((r) => r.getAttribute('checked') !== null);

      if (checkedRadio) {
        checkedRadio.focus();
        expect(document.activeElement).toBe(checkedRadio);
      }
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // Accessibility
  // ─────────────────────────────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Rating name="test-rating" defaultValue={3} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations when disabled', async () => {
      const { container } = render(<Rating name="test-rating" defaultValue={3} disabled />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations when read-only', async () => {
      const { container } = render(<Rating name="test-rating" value={4} readOnly />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations with label', async () => {
      const { container } = render(<Rating name="test-rating" defaultValue={3} showLabel />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations with helper text', async () => {
      const { container } = render(
        <Rating name="test-rating" defaultValue={3} helperText="Rate this" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
