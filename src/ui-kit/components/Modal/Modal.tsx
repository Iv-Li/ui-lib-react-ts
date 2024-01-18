import { PropsWithChildren, useEffect, useMemo, useState, FC } from 'react';
import { Modal as ReactModal, ModalProps } from 'react-responsive-modal'
import { Icon } from '@/ui-kit';
import cls from 'classnames'
import 'react-responsive-modal/styles.css';
import './Modal.scss'

type FCWithChildren<T> = FC<PropsWithChildren<T>>

type ModalSize = 'small' | 'medium' | 'big'
export interface IModalProps extends ModalProps {
  className?: string
  size?: ModalSize
}

interface IModal extends FCWithChildren<IModalProps> {
  Header: FCWithChildren<IModalHeaderProps>
  Footer: FCWithChildren<IModalFooterProps>
  Content: FCWithChildren<IModalContentProps>
}
export const Modal: IModal = ({ children, open, onClose, className, size = 'medium', ...rest }) => {
  const [_styles, setStyles] = useState({})
  const classNames = useMemo(() => {
    const sizes: Record<ModalSize, string> = {
      'small': 'Modal__small',
      'medium': 'Modal__medium',
      'big': 'Modal__medium'
    }
    return {
      modal: cls('Modal__default', [sizes[size]], {
        'Modal__open': open
      }),
      closeButton: 'Modal_CloseButton',
      className
    }
  }, [size, className, open])

  useEffect(() => {
    //Remove Lib`s jumping Glitch on close
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

    if(open && scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`
      setStyles({
        modal: {
          marginRight: `${scrollBarWidth + 16}px`
        }
      })
    }

    return () => {
      setStyles({});
      document.body.style.removeProperty("padding-right");
      document.body.classList.remove("Modal__open");
    }
  }, [open])

  return (
    <ReactModal
      open={open}
      onClose={onClose}
      closeIcon={<Icon type='Close'/>}
      closeOnEsc
      classNames={classNames}
      center
      {...rest}
      styles={_styles}
    >
      <div className={'Modal_inner'}>
        {children}
      </div>
    </ReactModal>
  )
}


type HeaderAlign = 'start' | 'center' | 'end' | 'justify'
export interface IModalHeaderProps {
  className?: string
  align?: HeaderAlign
}
const Header: FCWithChildren<IModalHeaderProps> = ({ className, children, align = 'start' }) => {
  const alignClasses: Record<HeaderAlign, string> = {
    'start': 'Modal_Header__start',
    'center': 'Modal_Header__center',
    'end': 'Modal_Header__end',
    'justify': 'Modal_Header__justify',
  }

  return (
    <div className={cls('Modal_Header', [className, alignClasses[align]])}>
      {children}
    </div>
  )
}


export interface IModalContentProps {
  className?: string
}
const Content: FCWithChildren<IModalContentProps> = ({ className, children }) => {
  return (
    <div className={cls('Modal_Content', [className])}>
      {children}
    </div>
  )
}


export interface IModalFooterProps {
  className?: string
}
const Footer: FCWithChildren<IModalFooterProps> = ({ className, children }) => {
  return (
    <div className={cls('Modal_Footer', [className])}>
      {children}
    </div>
  )
}

Header.displayName = 'Modal.Header'
Content.displayName = 'Modal.Content'
Footer.displayName = 'Modal.Footer'
Modal.Footer = Footer
Modal.Header = Header
Modal.Content = Content


