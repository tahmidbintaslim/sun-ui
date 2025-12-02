import { FormControl, InputLabel } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { MenuItem, Select } from './Select';

const meta = {
    component: Select,
    tags: ['autodocs'],
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
};
