import { FormControlLabel, Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta = {
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['solid', 'soft', 'outlined', 'ghost', 'plain'],
        },
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    render: (args) => <Checkbox {...args} />,
    args: {
        variant: 'solid',
    },
};

export const SolidLabel: Story = {
    render: (args) => (
        <FormControlLabel control={<Checkbox {...args} />} label="Solid" />
    ),
    args: {
        variant: 'solid',
    },
};

export const Soft: Story = {
    render: (args) => (
        <FormControlLabel control={<Checkbox {...args} />} label="Soft" />
    ),
    args: {
        variant: 'soft',
    },
};

export const Outlined: Story = {
    render: (args) => (
        <FormControlLabel control={<Checkbox {...args} />} label="Outlined" />
    ),
    args: {
        variant: 'outlined',
    },
};

export const Ghost: Story = {
    render: (args) => (
        <FormControlLabel control={<Checkbox {...args} />} label="Ghost" />
    ),
    args: {
        variant: 'ghost',
    },
};

export const Plain: Story = {
    render: (args) => (
        <FormControlLabel control={<Checkbox {...args} />} label="Plain" />
    ),
    args: {
        variant: 'plain',
    },
};

export const Disabled: Story = {
    render: (args) => (
        <FormControlLabel control={<Checkbox {...args} />} label="Disabled" />
    ),
    args: {
        variant: 'outlined',
        disabled: true,
    },
};

export const AllVariants: Story = {
    render: () => (
        <Stack spacing={2}>
            <FormControlLabel
                control={<Checkbox variant="solid" />}
                label="Solid"
            />
            <FormControlLabel
                control={<Checkbox variant="soft" />}
                label="Soft"
            />
            <FormControlLabel
                control={<Checkbox variant="outlined" />}
                label="Outlined"
            />
            <FormControlLabel
                control={<Checkbox variant="ghost" />}
                label="Ghost"
            />
            <FormControlLabel
                control={<Checkbox variant="plain" />}
                label="Plain"
            />
        </Stack>
    ),
};
