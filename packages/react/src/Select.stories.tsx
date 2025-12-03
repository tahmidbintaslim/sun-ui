import { FormControl, InputLabel } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from '@storybook/test';
import { MenuItem, Select } from './Select';

const meta = {
  title: 'Atoms/Select',
  component: Select,
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
  decorators: [
    (Story) => (
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Select option</InputLabel>
        <Story />
      </FormControl>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    defaultValue: 'option1',
    children: (
      <>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </>
    ),
  },
  play: async ({ canvas }) => {
    const select = canvas.getByRole('combobox');
    await expect(select).toBeInTheDocument();

    // Verify select element is accessible
    await expect(select).not.toBeDisabled();
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    defaultValue: 'option1',
    children: (
      <>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    defaultValue: 'option1',
    children: (
      <>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </>
    ),
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    defaultValue: 'option1',
    children: (
      <>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </>
    ),
  },
};

export const Plain: Story = {
  args: {
    variant: 'plain',
    defaultValue: 'option1',
    children: (
      <>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    variant: 'outlined',
    disabled: true,
    defaultValue: 'option1',
    children: (
      <>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
      </>
    ),
  },
  play: async ({ canvas }) => {
    const select = canvas.getByRole('combobox');

    // MUI Select wraps the actual input, so we check the parent for disabled state
    const disabled = select.closest('[aria-disabled="true"]') || select.hasAttribute('disabled');
    await expect(disabled).toBeTruthy();
  },
};
