import { icons, type IconType } from '@/ui-kit/components/Icon/types.tsx';
import { DOMAttributes, ReactNode } from 'react';
import cls from 'classnames'
import './Icon.scss'

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