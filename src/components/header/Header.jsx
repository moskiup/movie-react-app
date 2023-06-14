import "./header.scss";
import { NavLink  } from "react-router-dom";
import { useEffect, useState } from "react";

export function Header() {
  const MenuList = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "TV Series", path: "/series" },
  ];

  const [isSticky , setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbar = document.getElementById('navbar');
      const navbarOffsetTop = navbar.offsetTop;
      if (scrollPosition-100 >= 0) {
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
    <header id="header" className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <nav id="navbar" >
        <h1>🎥 PELICULAS</h1>
        <ul>
          {MenuList.map((x) => {
            return (
              <NavLink  key={x.name} className={({ isActive }) =>  isActive ? "active" : ""} to={x.path}>
              <li key={x.name}>
              
                  {x.name}
              </li>
                </NavLink >
            );
          })}
        </ul>
      </nav>
    </header>
  );
  //TODO:HACER EL MENU MOVIL
}
