import './AccordionGroup.scss'
import { IAccordionProps } from '@/ui-kit/components/Accordion/Accordion.tsx';
import { type ReactNode, useState, type MouseEventHandler } from 'react';
import { Accordion } from '@/ui-kit';
import cls from 'classnames'


export interface IAccordionItem extends Pick<IAccordionProps, 'title' | 'isActive'> {
  content: ReactNode,
  id: string
  children?: IAccordionItem[]
}
interface IAccordionGroup {
  className?: string
  title: string,
  items: IAccordionItem[]
  oneActive?: boolean
}

const AccordionGroup = ({ title, items, className, oneActive = false }: IAccordionGroup) => {
  const [list, setList] = useState<IAccordionItem[]>(items)

  const toggleChildItem = (list: IAccordionItem[], activeId: string): IAccordionItem[] => {
    const newList = list.map(item => ({
      ...item,
      isActive: item.id === activeId ? !item.isActive : false
    }))
    console.log("newList", newList)
    return newList
  }

  const handleClick: MouseEventHandler<HTMLElement> = (e) => {
    e.nativeEvent.stopPropagation()
    if (!(e.target instanceof HTMLElement)) return

    const accordionItem: HTMLElement | null = e.target?.closest('.Accordion')
    if (accordionItem) {
      const activeId = accordionItem.dataset.id
      console.log({activeId})
      activeId && setList(prev => toggleChildItem(prev, activeId))
    }
  }

  return (
    <div className={cls("AccordionGroup", [className])}>
      <p className="AccordionGroup-Title">{title}</p>
      <div onClickCapture={oneActive ? handleClick : undefined}>
        {list?.map(item => (
          <Accordion title={item.title} key={item.id} isActive={item.isActive} id={item.id}>{item.content}</Accordion>
        ))}
      </div>
    </div>
  )
}

export default AccordionGroup