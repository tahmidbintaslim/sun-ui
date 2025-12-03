import { Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from './Button';
import { Snackbar } from './Snackbar';

const meta = {
  title: 'Molecules/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'outlined', 'ghost', 'plain'],
    },
    vertical: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
    },
    horizontal: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

function SnackbarExample({
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
        Show Snackbar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        variant={variant}
        message={`This is a ${variant} snackbar`}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      />
    </>
  );
}

export const Solid: Story = {
  render: () => <SnackbarExample variant="solid" />,
};

export const Soft: Story = {
  render: () => <SnackbarExample variant="soft" />,
};

export const Outlined: Story = {
  render: () => <SnackbarExample variant="outlined" />,
};

export const Ghost: Story = {
  render: () => <SnackbarExample variant="ghost" />,
};

export const Plain: Story = {
  render: () => <SnackbarExample variant="plain" />,
};

export const AllVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <SnackbarExample variant="solid" />
      <SnackbarExample variant="soft" />
      <SnackbarExample variant="outlined" />
      <SnackbarExample variant="ghost" />
      <SnackbarExample variant="plain" />
    </Stack>
  ),
};

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <>
        <Button onClick={handleOpen} variant="soft">
          Show Snackbar with Action
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          variant="solid"
          message="Message sent successfully"
          action={
            <Button
              color="inherit"
              size="small"
              variant="plain"
              onClick={handleClose}
              sx={{ ml: 1 }}
            >
              Undo
            </Button>
          }
        />
      </>
    );
  },
};

export const Positions: Story = {
  render: () => {
    const positions = [
      { vertical: 'top', horizontal: 'left' },
      { vertical: 'top', horizontal: 'center' },
      { vertical: 'top', horizontal: 'right' },
      { vertical: 'bottom', horizontal: 'left' },
      { vertical: 'bottom', horizontal: 'center' },
      { vertical: 'bottom', horizontal: 'right' },
    ] as const;

    function PositionExample({
      vertical,
      horizontal,
    }: {
      vertical: 'top' | 'bottom';
      horizontal: 'left' | 'center' | 'right';
    }) {
      const [open, setOpen] = useState(false);

      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      return (
        <>
          <Button onClick={handleOpen} variant="soft" size="small">
            {vertical}-{horizontal}
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            variant="solid"
            message={`${vertical} ${horizontal}`}
            anchorOrigin={{ vertical, horizontal }}
          />
        </>
      );
    }

    return (
      <Stack direction="row" spacing={2} sx={{ p: 2, flexWrap: 'wrap' }}>
        {positions.map(({ vertical, horizontal }, idx) => (
          <PositionExample key={idx} vertical={vertical} horizontal={horizontal} />
        ))}
      </Stack>
    );
  },
};

export const AutoHideDuration: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <>
        <Button onClick={handleOpen} variant="soft">
          Show Snackbar (8 seconds)
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={8000}
          onClose={handleClose}
          variant="soft"
          message="This snackbar will auto-hide after 8 seconds"
        />
      </>
    );
  },
};
