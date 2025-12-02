import { Avatar, Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
    title: 'Atoms/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['solid', 'soft', 'outlined', 'ghost', 'plain'],
        },
        badgeContent: {
            control: { type: 'number' },
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    args: {
        variant: 'solid',
        badgeContent: 4,
    },
    render: (args) => (
        <Badge {...args}>
            <Avatar>JD</Avatar>
        </Badge>
    ),
};

export const Soft: Story = {
    args: {
        variant: 'soft',
        badgeContent: 2,
    },
    render: (args) => (
        <Badge {...args}>
            <Avatar>AB</Avatar>
        </Badge>
    ),
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        badgeContent: 1,
    },
    render: (args) => (
        <Badge {...args}>
            <Avatar>CR</Avatar>
        </Badge>
    ),
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        badgeContent: 3,
    },
    render: (args) => (
        <Badge {...args}>
            <Avatar>DM</Avatar>
        </Badge>
    ),
};

export const Plain: Story = {
    args: {
        variant: 'plain',
        badgeContent: 5,
    },
    render: (args) => (
        <Badge {...args}>
            <Avatar>EW</Avatar>
        </Badge>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <Stack direction="row" spacing={3}>
            <Badge variant="solid" badgeContent={4}>
                <Avatar>S</Avatar>
            </Badge>
            <Badge variant="soft" badgeContent={2}>
                <Avatar>So</Avatar>
            </Badge>
            <Badge variant="outlined" badgeContent={1}>
                <Avatar>O</Avatar>
            </Badge>
            <Badge variant="ghost" badgeContent={3}>
                <Avatar>G</Avatar>
            </Badge>
            <Badge variant="plain" badgeContent={5}>
                <Avatar>P</Avatar>
            </Badge>
        </Stack>
    ),
};

export const Dot: Story = {
    args: {
        variant: 'solid',
        overlap: 'circular',
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
        variant: 'dot',
    },
    render: (args) => (
        <Badge {...args}>
            <Avatar>JD</Avatar>
        </Badge>
    ),
};
