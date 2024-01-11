import { Icon } from '@/ui-kit';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: "Button"
  }
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Pdf: Story = {
  args: {
    type: 'Pdf'
  }
}
