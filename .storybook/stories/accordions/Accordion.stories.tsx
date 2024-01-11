import { StoryObj, Meta } from '@storybook/react';
import { Accordion } from '@/ui-kit';

const meta: Meta<typeof Accordion> = {
  title: 'Accordions/Accordion',
  component: Accordion,
  argTypes: {
    isActive: {
      options: [true, false]
    }
  }
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Basic: Story = {
  args: {
    title: "Title",
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  }
}