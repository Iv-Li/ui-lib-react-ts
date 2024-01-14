import { Select } from '@/ui-kit';
import { Meta, StoryObj } from '@storybook/react';
import { options } from '@/pages/ProductPage/ProductPage';

const meta: Meta<typeof Select> =  {
  title: 'Select',
  component: Select,
  /*argTypes: {
    onChange: { action: 'change'}
  },*/
  args: {
    options,
    value: options[0],
  }
}

export default meta

type Story = StoryObj<typeof Select>

export const Basis: Story = {}