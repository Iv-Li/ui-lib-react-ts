import Button from '@/ui-kit/components/Button';
import Icon from '@/ui-kit/components/Icon';
import Accordion from '@/ui-kit/components/Accordion';
import AccordionGroup from '@/ui-kit/components/Accordion/AccordionGroup/AccordionGroup.tsx';
import Select from '@/ui-kit/components/Select';
import Modal from '@/ui-kit/components/Modal';

export type IAccordionItem = import('@/ui-kit/components/Accordion/AccordionGroup/AccordionGroup.tsx').IAccordionItem
export type ISelectOption = import('@/ui-kit/components/Select/types.tsx').ISelectOption
export type OnChangeSelect = import('@/ui-kit/components/Select/types.tsx').OnChangeSelect
export type IModalProps = import('@/ui-kit/components/Modal/Modal.tsx').IModalProps
export type IModalHeaderProps = import('@/ui-kit/components/Modal/Modal.tsx').IModalHeaderProps
export type IModalFooterProps = import('@/ui-kit/components/Modal/Modal.tsx').IModalFooterProps
export type IModalContentProps = import('@/ui-kit/components/Modal/Modal.tsx').IModalContentProps

export {
  Button,
  Icon,
  Accordion,
  AccordionGroup,
  Modal,
  Select
}