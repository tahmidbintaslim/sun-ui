import { FormControlLabel, Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent } from '@storybook/test';
import { Switch } from './Switch';

const meta = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'outlined', 'ghost', 'plain'],
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  render: (args) => <FormControlLabel control={<Switch {...args} />} label="Solid" />,
  args: {
    variant: 'solid',
  },
  play: async ({ canvas }) => {
    const switchElement = canvas.getByRole('switch');
    await expect(switchElement).not.toBeChecked();

    await userEvent.click(switchElement);
    await expect(switchElement).toBeChecked();
  },
};

export const Soft: Story = {
  render: (args) => <FormControlLabel control={<Switch {...args} />} label="Soft" />,
  args: {
    variant: 'soft',
  },
};

export const Outlined: Story = {
  render: (args) => <FormControlLabel control={<Switch {...args} />} label="Outlined" />,
  args: {
    variant: 'outlined',
  },
};

export const Ghost: Story = {
  render: (args) => <FormControlLabel control={<Switch {...args} />} label="Ghost" />,
  args: {
    variant: 'ghost',
  },
};

export const Plain: Story = {
  render: (args) => <FormControlLabel control={<Switch {...args} />} label="Plain" />,
  args: {
    variant: 'plain',
  },
};

export const Disabled: Story = {
  render: (args) => <FormControlLabel control={<Switch {...args} />} label="Disabled" />,
  args: {
    variant: 'outlined',
    disabled: true,
  },
  play: async ({ canvas }) => {
    const switchElement = canvas.getByRole('switch');
    await expect(switchElement).toBeDisabled();
    await expect(switchElement).toHaveAttribute('disabled');
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <FormControlLabel control={<Switch variant="solid" />} label="Solid" />
      <FormControlLabel control={<Switch variant="soft" />} label="Soft" />
      <FormControlLabel control={<Switch variant="outlined" />} label="Outlined" />
      <FormControlLabel control={<Switch variant="ghost" />} label="Ghost" />
      <FormControlLabel control={<Switch variant="plain" />} label="Plain" />
    </Stack>
  ),
};
