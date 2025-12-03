import { Stack } from '@mui/material';
import { Meta, StoryObj } from 'storybook/react';
import { expect } from 'storybook/test';
import { useState } from 'react';
import { Button } from './Button';
import { Dialog, DialogActions, DialogContent, DialogTitle } from './Dialog';

const meta = {
  title: 'Molecules/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'outlined', 'ghost', 'plain'],
    },
    maxWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

function DialogExample({
  variant,
}: {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant="soft">
        Open Dialog
      </Button>
      <Dialog open={open} onClose={handleClose} variant={variant} maxWidth="sm">
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent sx={{ py: 2 }}>
          This is a dialog with {variant} variant. It provides focused interaction with the user.
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClose} variant="ghost">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="solid">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export const Solid: Story = {
  render: () => <DialogExample variant="solid" />,
  play: async ({ canvas }) => {
    const openButton = canvas.getByRole('button', { name: /open dialog/i });
    await expect(openButton).toBeInTheDocument();
  },
};

export const Soft: Story = {
  render: () => <DialogExample variant="soft" />,
};

export const Outlined: Story = {
  render: () => <DialogExample variant="outlined" />,
};

export const Ghost: Story = {
  render: () => <DialogExample variant="ghost" />,
};

export const Plain: Story = {
  render: () => <DialogExample variant="plain" />,
};

export const AllVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <DialogExample variant="solid" />
      <DialogExample variant="soft" />
      <DialogExample variant="outlined" />
      <DialogExample variant="ghost" />
      <DialogExample variant="plain" />
    </Stack>
  ),
  play: async ({ canvas }) => {
    const buttons = canvas.getAllByRole('button', { name: /open dialog/i });
    await expect(buttons).toHaveLength(5);
  },
};

export const FullWidth: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <>
        <Button onClick={handleOpen} variant="soft">
          Open Full Width Dialog
        </Button>
        <Dialog open={open} onClose={handleClose} variant="solid" fullWidth maxWidth="md">
          <DialogTitle>Full Width Dialog</DialogTitle>
          <DialogContent sx={{ py: 2 }}>
            This dialog takes the full width of the screen (constrained by maxWidth).
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button onClick={handleClose} variant="ghost">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

export const Scrollable: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <>
        <Button onClick={handleOpen} variant="soft">
          Open Scrollable Dialog
        </Button>
        <Dialog open={open} onClose={handleClose} variant="solid" maxWidth="sm">
          <DialogTitle>Scrollable Dialog</DialogTitle>
          <DialogContent dividers sx={{ py: 2 }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i}>Line {i + 1}</div>
            ))}
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button onClick={handleClose} variant="ghost">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};
