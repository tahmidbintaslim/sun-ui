import { Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from '@storybook/test';
import { Chip } from './Chip';

const meta = {
  title: 'Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: {
    onDelete: fn(),
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'outlined', 'ghost', 'plain'],
    },
    label: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    label: 'Solid Chip',
  },
  play: async ({ canvas }) => {
    const chip = canvas.getByText('Solid Chip');
    await expect(chip).toBeInTheDocument();
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    label: 'Soft Chip',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined Chip',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost Chip',
  },
};

export const Plain: Story = {
  args: {
    variant: 'plain',
    label: 'Plain Chip',
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      <Chip variant="solid" label="Solid" />
      <Chip variant="soft" label="Soft" />
      <Chip variant="outlined" label="Outlined" />
      <Chip variant="ghost" label="Ghost" />
      <Chip variant="plain" label="Plain" />
    </Stack>
  ),
};

export const WithDelete: Story = {
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      <Chip variant="solid" label="Solid" onDelete={() => {}} />
      <Chip variant="soft" label="Soft" onDelete={() => {}} />
      <Chip variant="outlined" label="Outlined" onDelete={() => {}} />
      <Chip variant="ghost" label="Ghost" onDelete={() => {}} />
      <Chip variant="plain" label="Plain" onDelete={() => {}} />
    </Stack>
  ),
  play: async ({ canvas }) => {
    const solidChip = canvas.getByText('Solid');
    const softChip = canvas.getByText('Soft');

    await expect(solidChip).toBeInTheDocument();
    await expect(softChip).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    variant: 'outlined',
    label: 'Disabled Chip',
    disabled: true,
  },
  play: async ({ canvas }) => {
    const chip = canvas.getByText('Disabled Chip');
    await expect(chip).toBeInTheDocument();
  },
};
