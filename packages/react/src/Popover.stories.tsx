import { Box, Stack, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from './Button';
import { Popover } from './Popover';

const meta = {
  title: 'Molecules/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'outlined', 'ghost', 'plain'],
    },
    anchorOrigin: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

function PopoverExample({
  variant,
}: {
  variant?: 'solid' | 'soft' | 'outlined' | 'ghost' | 'plain';
}) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popover' : undefined;

  return (
    <>
      <Button aria-describedby={id} onClick={handleClick} variant="soft">
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        variant={variant}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ p: 2, maxWidth: 300 }}>
          <Typography variant="body2">This is a popover with {variant} variant</Typography>
        </Box>
      </Popover>
    </>
  );
}

export const Solid: Story = {
  render: () => <PopoverExample variant="solid" />,
};

export const Soft: Story = {
  render: () => <PopoverExample variant="soft" />,
};

export const Outlined: Story = {
  render: () => <PopoverExample variant="outlined" />,
};

export const Ghost: Story = {
  render: () => <PopoverExample variant="ghost" />,
};

export const Plain: Story = {
  render: () => <PopoverExample variant="plain" />,
};

export const AllVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <PopoverExample variant="solid" />
      <PopoverExample variant="soft" />
      <PopoverExample variant="outlined" />
      <PopoverExample variant="ghost" />
      <PopoverExample variant="plain" />
    </Stack>
  ),
};

export const Positioning: Story = {
  render: () => {
    const positions = [
      { vertical: 'top', horizontal: 'left' },
      { vertical: 'top', horizontal: 'right' },
      { vertical: 'bottom', horizontal: 'left' },
      { vertical: 'bottom', horizontal: 'right' },
    ] as const;

    function PositionExample({
      vertical,
      horizontal,
    }: {
      vertical: 'top' | 'bottom';
      horizontal: 'left' | 'right';
    }) {
      const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

      const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

      const open = Boolean(anchorEl);
      const id = open ? 'popover' : undefined;

      return (
        <>
          <Button aria-describedby={id} onClick={handleClick} variant="soft">
            {vertical}-{horizontal}
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            variant="solid"
            anchorOrigin={{ vertical, horizontal }}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="caption">
                {vertical} {horizontal}
              </Typography>
            </Box>
          </Popover>
        </>
      );
    }

    return (
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 4, p: 4 }}>
        {positions.map(({ vertical, horizontal }, idx) => (
          <PositionExample key={idx} vertical={vertical} horizontal={horizontal} />
        ))}
      </Box>
    );
  },
};
