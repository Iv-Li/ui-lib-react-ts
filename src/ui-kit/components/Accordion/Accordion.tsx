import { PropsWithChildren, useRef, useState, useEffect, type ReactNode } from 'react';
import cls from 'classnames'

import { Icon } from '@/ui-kit';
import './Accordion.scss'

export interface IAccordionProps {
  className?: string
  title: string | ReactNode
  isActive?: boolean
  id?: string
}
export const Accordion = ({ className, title, children, isActive = false, id }: PropsWithChildren<IAccordionProps>) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isOpened, setOpened] = useState(isActive)

  const toggle = () =>  setOpened(prev => !prev)

  useEffect(() => {
    setOpened(isActive)
  }, [isActive]);

  return (
    <div className={cls("Accordion", [className], {
      Accordion__active: isOpened,
    })}
      data-id={id}
    >
      <div className="Accordion-Header" onClick={toggle}>
        <div className="Accordion-HeaderTitle">{title}</div>
        <Icon className="Accordion-HeaderIcon" type="ArrowDown"/>
      </div>
      <div
        className="Accordion-ContentWrapper"
        aria-hidden={isOpened}
        style={{ maxHeight: isOpened ? ref.current?.scrollHeight : 0 }}
        ref={ref}
      >
        <div className="Accordion-Content">{children}</div>
      </div>
    </div>
  )
}

Accordion.displayName = 'Accordion'