import { useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.scss';
import logo from '@/public/logo.png';
import { useStickyNav } from '@/hooks/useStickyNav';

export function Header() {
  const MenuList = [
    { name: 'Home', path: '/' },
    { name: 'Movies', path: '/movies' },
    { name: 'TV Series', path: '/series' },
  ];
  const refElem = useRef(null);
  const { isSticky } = useStickyNav(refElem);

  return (
    <>
      <div className="logo-container-mobile">
        <img src={logo} className="logo" />
        <h1>mDb</h1>
      </div>
      <header id="header" className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <nav id="navbar" ref={refElem}>
          <Link to="/">
            <div className="logo-container">
              <img src={logo} className="logo" />
              <h1>mDb</h1>
            </div>
          </Link>
          <ul>
            {MenuList.map((x) => {
              return (
                <NavLink
                  key={x.name}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to={x.path}
                >
                  <li key={x.name}>{x.name}</li>
                </NavLink>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
  //TODO:HACER EL MENU MOVIL
}
