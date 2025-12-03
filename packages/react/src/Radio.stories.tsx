import { FormControlLabel, RadioGroup, Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent } from '@storybook/test';
import { Radio } from './Radio';

const meta = {
  title: 'Atoms/Radio',
  component: Radio,
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  render: (args) => (
    <RadioGroup>
      <FormControlLabel value="option1" control={<Radio {...args} />} label="Solid Option 1" />
      <FormControlLabel value="option2" control={<Radio {...args} />} label="Solid Option 2" />
    </RadioGroup>
  ),
  args: {
    variant: 'solid',
  },
  play: async ({ canvas }) => {
    const radios = canvas.getAllByRole('radio');
    await expect(radios).toHaveLength(2);
    await expect(radios[0]).not.toBeChecked();

    await userEvent.click(radios[0]);
    await expect(radios[0]).toBeChecked();
    await expect(radios[1]).not.toBeChecked();
  },
};

export const Soft: Story = {
  render: (args) => (
    <RadioGroup>
      <FormControlLabel value="option1" control={<Radio {...args} />} label="Soft Option 1" />
      <FormControlLabel value="option2" control={<Radio {...args} />} label="Soft Option 2" />
    </RadioGroup>
  ),
  args: {
    variant: 'soft',
  },
};

export const Outlined: Story = {
  render: (args) => (
    <RadioGroup>
      <FormControlLabel value="option1" control={<Radio {...args} />} label="Outlined Option 1" />
      <FormControlLabel value="option2" control={<Radio {...args} />} label="Outlined Option 2" />
    </RadioGroup>
  ),
  args: {
    variant: 'outlined',
  },
};

export const Ghost: Story = {
  render: (args) => (
    <RadioGroup>
      <FormControlLabel value="option1" control={<Radio {...args} />} label="Ghost Option 1" />
      <FormControlLabel value="option2" control={<Radio {...args} />} label="Ghost Option 2" />
    </RadioGroup>
  ),
  args: {
    variant: 'ghost',
  },
};

export const Plain: Story = {
  render: (args) => (
    <RadioGroup>
      <FormControlLabel value="option1" control={<Radio {...args} />} label="Plain Option 1" />
      <FormControlLabel value="option2" control={<Radio {...args} />} label="Plain Option 2" />
    </RadioGroup>
  ),
  args: {
    variant: 'plain',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup>
      <FormControlLabel value="option1" control={<Radio {...args} />} label="Disabled Option" />
    </RadioGroup>
  ),
  args: {
    variant: 'outlined',
    disabled: true,
  },
  play: async ({ canvas }) => {
    const radio = canvas.getByRole('radio');
    await expect(radio).toBeDisabled();
    await expect(radio).toHaveAttribute('disabled');
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <RadioGroup>
        <FormControlLabel value="solid" control={<Radio variant="solid" />} label="Solid" />
      </RadioGroup>
      <RadioGroup>
        <FormControlLabel value="soft" control={<Radio variant="soft" />} label="Soft" />
      </RadioGroup>
      <RadioGroup>
        <FormControlLabel
          value="outlined"
          control={<Radio variant="outlined" />}
          label="Outlined"
        />
      </RadioGroup>
      <RadioGroup>
        <FormControlLabel value="ghost" control={<Radio variant="ghost" />} label="Ghost" />
      </RadioGroup>
      <RadioGroup>
        <FormControlLabel value="plain" control={<Radio variant="plain" />} label="Plain" />
      </RadioGroup>
    </Stack>
  ),
};
