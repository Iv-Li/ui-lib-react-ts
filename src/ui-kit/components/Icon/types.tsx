import { ReactNode } from 'react';
import Pdf from '@/ui-kit/assets/icons/pdf.svg?react'
import ArrowDown from '@/ui-kit/assets/icons/arrow-down.svg?react'
import Close from '@/ui-kit/assets/icons/close.svg?react'
import { v4 as uuid } from 'uuid';

export type IconType = 'Pdf' | 'ArrowDown' | 'Close'

export const icons: Map<IconType, ReactNode> = new Map([
  ['Pdf', <Pdf key={uuid()}/>],
  ['ArrowDown', <ArrowDown key={uuid()}/>],
  ['Close', <Close key={uuid()}/>],
])