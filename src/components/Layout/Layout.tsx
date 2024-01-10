import { PropsWithChildren, FC } from 'react'
const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="Layout">
      <div className="Layout-Container">{children}</div>
    </div>
  )
}

export default Layout
