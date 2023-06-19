import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.scss';
import logo from './../../../public/logo.png';

export function Header() {
  const MenuList = [
    { name: 'Home', path: '/' },
    { name: 'Movies', path: '/movies' },
    { name: 'TV Series', path: '/series' },
  ];

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbar = document.getElementById('navbar');
      const navbarOffsetTop = navbar.offsetTop;
      if (scrollPosition - 100 >= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="logo-container-mobile">
        <img src={logo} className="logo" />
        <h1>mDb</h1>
      </div>
      <header id="header" className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <nav id="navbar">
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
