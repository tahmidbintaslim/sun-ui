import { CardContent, CardHeader, Stack, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from '@storybook/test';
import { Card } from './Card';

const meta = {
  title: 'Atoms/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'outlined', 'ghost', 'plain'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 400 }}>
      <CardHeader title="Solid Card" />
      <CardContent>
        <Typography>This is a solid card with primary background.</Typography>
      </CardContent>
    </Card>
  ),
  play: async ({ canvas }) => {
    const cardTitle = canvas.getByText('Solid Card');
    await expect(cardTitle).toBeInTheDocument();

    const cardContent = canvas.getByText('This is a solid card with primary background.');
    await expect(cardContent).toBeInTheDocument();
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
  },
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 400 }}>
      <CardHeader title="Soft Card" />
      <CardContent>
        <Typography>This is a soft card with light background.</Typography>
      </CardContent>
    </Card>
  ),
  play: async ({ canvas }) => {
    const cardTitle = canvas.getByText('Soft Card');
    await expect(cardTitle).toBeInTheDocument();
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 400 }}>
      <CardHeader title="Outlined Card" />
      <CardContent>
        <Typography>This is an outlined card with border.</Typography>
      </CardContent>
    </Card>
  ),
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 400 }}>
      <CardHeader title="Ghost Card" />
      <CardContent>
        <Typography>This is a ghost card with minimal styling.</Typography>
      </CardContent>
    </Card>
  ),
};

export const Plain: Story = {
  args: {
    variant: 'plain',
  },
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 400 }}>
      <CardHeader title="Plain Card" />
      <CardContent>
        <Typography>This is a plain card without shadows or borders.</Typography>
      </CardContent>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Card variant="solid" sx={{ maxWidth: 400 }}>
        <CardHeader title="Solid" />
        <CardContent>
          <Typography variant="body2">Solid variant</Typography>
        </CardContent>
      </Card>
      <Card variant="soft" sx={{ maxWidth: 400 }}>
        <CardHeader title="Soft" />
        <CardContent>
          <Typography variant="body2">Soft variant</Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ maxWidth: 400 }}>
        <CardHeader title="Outlined" />
        <CardContent>
          <Typography variant="body2">Outlined variant</Typography>
        </CardContent>
      </Card>
      <Card variant="ghost" sx={{ maxWidth: 400 }}>
        <CardHeader title="Ghost" />
        <CardContent>
          <Typography variant="body2">Ghost variant</Typography>
        </CardContent>
      </Card>
      <Card variant="plain" sx={{ maxWidth: 400 }}>
        <CardHeader title="Plain" />
        <CardContent>
          <Typography variant="body2">Plain variant</Typography>
        </CardContent>
      </Card>
    </Stack>
  ),
};
