import { Box, Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { Tooltip } from './Tooltip';

const meta = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'outlined', 'ghost', 'plain'],
    },
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    title: 'Solid Tooltip',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="soft">Hover me</Button>
    </Tooltip>
  ),
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    title: 'Soft Tooltip',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="soft">Hover me</Button>
    </Tooltip>
  ),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    title: 'Outlined Tooltip',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="soft">Hover me</Button>
    </Tooltip>
  ),
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    title: 'Ghost Tooltip',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="soft">Hover me</Button>
    </Tooltip>
  ),
};

export const Plain: Story = {
  args: {
    variant: 'plain',
    title: 'Plain Tooltip',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="soft">Hover me</Button>
    </Tooltip>
  ),
};

export const WithArrow: Story = {
  args: {
    variant: 'solid',
    title: 'Tooltip with Arrow',
    arrow: true,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="soft">Hover me</Button>
    </Tooltip>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={4}>
      <Tooltip variant="solid" title="Solid">
        <Button variant="soft">Solid</Button>
      </Tooltip>
      <Tooltip variant="soft" title="Soft">
        <Button variant="soft">Soft</Button>
      </Tooltip>
      <Tooltip variant="outlined" title="Outlined">
        <Button variant="soft">Outlined</Button>
      </Tooltip>
      <Tooltip variant="ghost" title="Ghost">
        <Button variant="soft">Ghost</Button>
      </Tooltip>
      <Tooltip variant="plain" title="Plain">
        <Button variant="soft">Plain</Button>
      </Tooltip>
    </Stack>
  ),
};

export const Placements: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4, p: 4 }}>
      <Tooltip variant="solid" title="Top" placement="top">
        <Button variant="soft">Top</Button>
      </Tooltip>
      <Tooltip variant="solid" title="Bottom" placement="bottom">
        <Button variant="soft">Bottom</Button>
      </Tooltip>
      <Tooltip variant="solid" title="Left" placement="left">
        <Button variant="soft">Left</Button>
      </Tooltip>
      <Tooltip variant="solid" title="Right" placement="right">
        <Button variant="soft">Right</Button>
      </Tooltip>
    </Box>
  ),
};
