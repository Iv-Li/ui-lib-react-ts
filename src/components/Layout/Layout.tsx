import { MenuPanel, Header } from '@/components';
import { Outlet } from 'react-router-dom';
import './Layout.scss'
const Layout = () => {
  return (
    <div className="Layout">
      <MenuPanel />
      <div className="Layout-Container">
        <Header/>
        <main>
          <Outlet/>
        </main>
      </div>

    </div>
  )
}

export default Layout
