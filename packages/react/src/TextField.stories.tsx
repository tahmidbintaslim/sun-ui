import { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from './TextField';

const meta = {
    title: 'Atoms/TextField',
    component: TextField,
    tags: ['autodocs'],
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
};

export const Error: Story = {
    args: {
        variant: 'outlined',
        label: 'Error',
        error: true,
        helperText: 'This field has an error',
    },
};
