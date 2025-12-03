import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent } from '@storybook/test';
import { TextField } from './TextField';

const meta = {
  title: 'Atoms/TextField',
  component: TextField,
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
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    label: 'Solid',
    placeholder: 'Enter text',
  },
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAttribute('placeholder', 'Enter text');

    await userEvent.type(input, 'Test input');
    await expect(input).toHaveValue('Test input');
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    label: 'Soft',
    placeholder: 'Enter text',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined',
    placeholder: 'Enter text',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost',
    placeholder: 'Enter text',
  },
};

export const Plain: Story = {
  args: {
    variant: 'plain',
    label: 'Plain',
    placeholder: 'Enter text',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'outlined',
    label: 'Disabled',
    disabled: true,
    value: 'Disabled text',
  },
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toBeDisabled();
    await expect(input).toHaveValue('Disabled text');
  },
};

export const Error: Story = {
  args: {
    variant: 'outlined',
    label: 'Error',
    error: true,
    helperText: 'This field has an error',
  },
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toBeInTheDocument();

    const errorText = canvas.getByText('This field has an error');
    await expect(errorText).toBeInTheDocument();
  },
};
