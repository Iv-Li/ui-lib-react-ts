import { AccordionGroup } from '@/ui-kit';
import { Meta, StoryObj } from '@storybook/react';
import { accordionsItems } from './mockData';

const meta: Meta<typeof AccordionGroup> = {
  title: 'Accordions/AccordionGroup',
  component: AccordionGroup,
  args: {
    items: accordionsItems
  }
}

export default meta

type Story = StoryObj<typeof AccordionGroup>


export const Basic: Story = {}
export const WithOneActive: Story = {
  args: {
    oneActive: true
  }
}