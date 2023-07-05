import { NavLink } from 'react-router-dom';

import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
           <li>
             <NavLink to="blocks">Bloki</NavLink>
            </li>
           <li>
             <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <NavLink to="CV">CV</NavLink>
            </li>
            <li>
              <NavLink to="Calendar">Calendar</NavLink>
            </li>
    

        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
