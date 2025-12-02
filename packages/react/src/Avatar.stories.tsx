import { Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta = {
    title: 'Atoms/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['solid', 'soft', 'outlined', 'ghost', 'plain'],
        },
        alt: {
            control: { type: 'text' },
        },
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    args: {
        variant: 'solid',
        children: 'JD',
        alt: 'John Doe',
    },
};

export const Soft: Story = {
    args: {
        variant: 'soft',
        children: 'AB',
        alt: 'Alice Brown',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: 'CR',
        alt: 'Charlie Rose',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'DM',
        alt: 'Diana Miller',
    },
};

export const Plain: Story = {
    args: {
        variant: 'plain',
        children: 'EW',
        alt: 'Emma Watson',
    },
};

export const AllVariants: Story = {
    render: () => (
        <Stack direction="row" spacing={2} alignItems="center">
            <Avatar variant="solid">JD</Avatar>
            <Avatar variant="soft">AB</Avatar>
            <Avatar variant="outlined">CR</Avatar>
            <Avatar variant="ghost">DM</Avatar>
            <Avatar variant="plain">EW</Avatar>
        </Stack>
    ),
};

export const Sizes: Story = {
    render: () => (
        <Stack direction="row" spacing={2} alignItems="center">
            <Avatar variant="solid" sx={{ width: 32, height: 32 }}>
                S
            </Avatar>
            <Avatar variant="solid">M</Avatar>
            <Avatar variant="solid" sx={{ width: 56, height: 56 }}>
                L
            </Avatar>
        </Stack>
    ),
};
