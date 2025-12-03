import { Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'outlined', 'ghost', 'plain'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Solid Button',
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    children: 'Soft Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Plain: Story = {
  args: {
    variant: 'plain',
    children: 'Plain Button',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'solid',
    disabled: true,
    children: 'Disabled Button',
  },
  play: async ({ args, canvas }) => {
    const button = canvas.getByRole('button', { name: /disabled button/i });

    // Verify button is disabled
    await expect(button).toBeDisabled();

    // Verify onClick was not called (button can't be clicked when disabled)
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const Clickable: Story = {
  args: {
    variant: 'solid',
    children: 'Click Me',
  },
  play: async ({ args, canvas }) => {
    const button = canvas.getByRole('button', { name: /click me/i });

    // Verify button is enabled
    await expect(button).not.toBeDisabled();

    // Click the button
    await userEvent.click(button);

    // Verify onClick was called
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const AllVariants: Story = {
  args: {
    variant: 'plain',
    size: 'large',
  },

  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="solid">Solid</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="plain">Plain</Button>
    </Stack>
  ),
};

// Mobile responsive story - locked to mobile viewport
export const MobileResponsive: Story = {
  args: {
    variant: 'solid',
    children: 'Mobile Button',
    fullWidth: true,
  },
  globals: {
    viewport: {
      value: 'iphone12',
    },
  },
};

// Tablet responsive story - locked to tablet viewport
export const TabletResponsive: Story = {
  args: {
    variant: 'outlined',
    children: 'Tablet Button',
  },
  globals: {
    viewport: {
      value: 'ipad',
    },
  },
};

// Desktop responsive story - locked to desktop viewport
export const DesktopResponsive: Story = {
  args: {
    variant: 'soft',
    children: 'Desktop Button',
    size: 'large',
  },
  globals: {
    viewport: {
      value: 'xl',
    },
  },
};
