import { Meta, Decorator, StoryObj } from '@storybook/react';
import { Button, Modal, type IModalProps, type IModalHeaderProps, type IModalContentProps, type IModalFooterProps } from '@/ui-kit';
import { useArgs } from '@storybook/preview-api';
import { PropsWithChildren } from 'react';


const createModalStory = ({args, headerArgs = {}, contentArgs = {}, footerArgs = {}}:
  {
     args: PropsWithChildren<IModalProps >,
    headerArgs?: PropsWithChildren<IModalHeaderProps>,
    contentArgs?: PropsWithChildren<IModalContentProps>,
    footerArgs?: PropsWithChildren<IModalFooterProps>
}) => {
  const [, updateArgs] = useArgs()
  const closeModal = () => {
    updateArgs({ ...args, open: false });
  }

  return <Modal open={args.open} onClose={closeModal}>
    <Modal.Header {...headerArgs}>Modal Header</Modal.Header>
    <Modal.Content {...contentArgs}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.\n' +
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n'
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim i
    </Modal.Content>
    <Modal.Footer {...footerArgs}>Modal Footer</Modal.Footer>
  </Modal>
}

const withModalBtn: Decorator = (Story) => {
  const [{open}, updateArgs] = useArgs()

  const openModal = () => updateArgs({ open: true })

  return (
    <>
      <p>Modal</p>
      <Button onClick={openModal}>Open modal</Button>
      <Story open={open} />
    </>
  )
}

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
  decorators: [withModalBtn],
  argTypes: {
    onClose: {
      action: 'clklklkick'
    },
  }
}

export default meta

type Story = StoryObj<typeof Modal>

export const Basic: Story = {
  render: (args) => createModalStory({ args })
}

const WithStartHeader: Story = {
  render: (args) => (
    <>
      <h3>With header at start</h3>
      {createModalStory({ args, headerArgs: { align: 'start'}})}
    </>
  )
}

export const WithEndHeader: Story = {
  render: (args) => (
    <>
      <h3>With header at start</h3>
      {createModalStory({ args, headerArgs: { align: 'end'}})}
    </>
  )
}

export const WithCenterHeader: Story = {
  render: (args) => (
    <>
      <h3>With header at start</h3>
      {createModalStory({ args, headerArgs: { align: 'center'}})}
    </>
  )
}

export const WithJustifyHeader: Story = {
  render: (args) => (
    <>
      <h3>With header at start</h3>
      {createModalStory({ args, headerArgs: { align: 'justify'}})}
    </>
  )
}

