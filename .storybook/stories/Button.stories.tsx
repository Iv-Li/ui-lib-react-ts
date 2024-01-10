import { Button } from '@/ui-kit';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: "Button"
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {}
export const Disabled: Story = {
  args: {
    disabled: true
  }
}

