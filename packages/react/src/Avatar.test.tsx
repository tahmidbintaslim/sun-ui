import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Avatar } from './Avatar';

describe('Avatar', () => {
    it('renders avatar with initials', () => {
        render(<Avatar data-testid="avatar">JD</Avatar>);
        expect(screen.getByTestId('avatar')).toHaveTextContent('JD');
    });

    it('renders avatar with alt text', () => {
        const { container } = render(<Avatar alt="John Doe" data-testid="avatar">JD</Avatar>);
        const avatar = screen.getByTestId('avatar');
        expect(avatar).toBeInTheDocument();
    });

    it('renders all variants', () => {
        const variants = ['solid', 'soft', 'outlined', 'ghost', 'plain'] as const;
        variants.forEach((variant) => {
            const { unmount } = render(
                <Avatar variant={variant} data-testid={`avatar-${variant}`}>
                    {variant[0].toUpperCase()}
                </Avatar>
            );
            expect(screen.getByTestId(`avatar-${variant}`)).toBeInTheDocument();
            unmount();
        });
    });

    it('accepts custom sx props', () => {
        render(
            <Avatar
                variant="solid"
                sx={{ width: 64, height: 64 }}
                data-testid="avatar-custom"
            >
                AB
            </Avatar>
        );
        expect(screen.getByTestId('avatar-custom')).toBeInTheDocument();
    });
});
