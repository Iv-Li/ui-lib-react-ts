import Pdf from '@/ui-kit/assets/icons/pdf.svg?react'
import { v4 as uuid } from 'uuid'
import { DOMAttributes, ReactNode } from 'react';
import cls from 'classnames'
import './Icon.scss'

export type IconType = 'Pdf'

const icons: Map<IconType, ReactNode> = new Map([
  ['Pdf', <Pdf key={uuid()}/>]
])

const getIcon = (type: IconType): ReactNode => {
  return icons.get(type) as ReactNode
}

interface IIconProps extends DOMAttributes<HTMLDivElement> {
  className?: string
  type: IconType
}
export const Icon = ({type, className}: IIconProps) => {
  return (
    <div className={cls('Icon', [className])}>
      {getIcon(type)}
    </div>
  )
}