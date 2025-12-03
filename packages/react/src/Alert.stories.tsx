import { Stack } from '@mui/material';
import { Meta, StoryObj } from 'storybook/react';
import { expect, fn, userEvent } from 'storybook/test';
import { Alert } from './Alert';

const meta = {
  title: 'Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    onClose: fn(),
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'outlined', 'ghost', 'plain'],
    },
    severity: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'error'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    severity: 'success',
    children: 'This is a solid success alert!',
  },
  play: async ({ canvas }) => {
    const alert = canvas.getByRole('alert');
    await expect(alert).toBeInTheDocument();
    await expect(alert).toHaveClass('MuiAlert-root');
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    severity: 'info',
    children: 'This is a soft info alert!',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    severity: 'warning',
    children: 'This is an outlined warning alert!',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    severity: 'error',
    children: 'This is a ghost error alert!',
  },
};

export const Plain: Story = {
  args: {
    variant: 'plain',
    severity: 'info',
    children: 'This is a plain info alert!',
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert variant="solid" severity="success">
        Solid Success Alert
      </Alert>
      <Alert variant="soft" severity="info">
        Soft Info Alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        Outlined Warning Alert
      </Alert>
      <Alert variant="ghost" severity="error">
        Ghost Error Alert
      </Alert>
      <Alert variant="plain" severity="success">
        Plain Success Alert
      </Alert>
    </Stack>
  ),
};

export const AllSeverities: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert variant="soft" severity="success">
        Success Alert
      </Alert>
      <Alert variant="soft" severity="info">
        Info Alert
      </Alert>
      <Alert variant="soft" severity="warning">
        Warning Alert
      </Alert>
      <Alert variant="soft" severity="error">
        Error Alert
      </Alert>
    </Stack>
  ),
};

export const Closeable: Story = {
  args: {
    variant: 'outlined',
    severity: 'warning',
    onClose: fn(),
    children: 'This is a closeable alert!',
  },
  play: async ({ args, canvas }) => {
    const alert = canvas.getByRole('alert');

    // Verify alert is present
    await expect(alert).toBeInTheDocument();

    // Find and click the close button
    const closeButton = alert.querySelector('button[aria-label="Close"]');
    if (closeButton) {
      await userEvent.click(closeButton);
      await expect(args.onClose).toHaveBeenCalled();
    }
  },
};
