import { Link, NavLink } from 'react-router-dom';
import { ERoutes } from '@/enums';

import './MenuPanel.scss'

const navList = [
  ERoutes.Accordion,
  ERoutes.Button,
  ERoutes.Modal,
  ERoutes.Select,
]
export const MenuPanel = () => {
  return (
    <nav className="MenuPanel">
      <div className="MenuPanel-Brand">
        <div className="MenuPanel-BrandTitle">
          <Link className="MenuPanel-BrandTitleLink" to={ERoutes.Root}>
            UI
          </Link>
        </div>
        <div className="MenuPanel-BrandVersion">v1.1.0</div>
      </div>
      <div className="MenuPanel-Title">Components</div>
      <div className="MenuPanel-List">
        {navList.map((item: ERoutes) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "MenuPanel-ListItem MenuPanel-ListItem__active" : "MenuPanel-ListItem"
            }
            key={item}
            to={item}
          >
            {item.slice(1)}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
