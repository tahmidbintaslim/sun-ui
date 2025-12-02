import { Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['solid', 'soft', 'outlined', 'ghost', 'plain'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    args: {
        variant: 'solid',
        children: 'Solid Button',
    },
};

export const Soft: Story = {
    args: {
        variant: 'soft',
        children: 'Soft Button',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: 'Outlined Button',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost Button',
    },
};

export const Plain: Story = {
    args: {
        variant: 'plain',
        children: 'Plain Button',
    },
};

export const Disabled: Story = {
    args: {
        variant: 'solid',
        disabled: true,
        children: 'Disabled Button',
    },
};

export const AllVariants: Story = {
    render: () => (
        <Stack direction="row" spacing={2}>
            <Button variant="solid">Solid</Button>
            <Button variant="soft">Soft</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="plain">Plain</Button>
        </Stack>
    ),
};
