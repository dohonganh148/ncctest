import React, { useState } from "react";
import s from "./Sidebar.module.scss";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const items = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "News",
      link: "/news",
    },
    {
      label: "Blog",
      link: "/blog",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <div className={s.sidebar}>
        {items.map((item, index) => (
          <Link to={item.link} key={index}>
            <div className={`${s.content} ${location.pathname === item.link ? s.active : ''}`}>{item.label}</div>
          </Link>
        ))}
      </div>
      <div className={s.navbarMobile}>
        <button className={s.menuBtn} onClick={() => setIsOpen(!isOpen)}>
          <span className={s.menuIconClose}></span>
        </button>
        {isOpen && (
          <div className={s.nav}>
            {items.map((item, index) => (
              <Link to={item.link} key={index}>
                <div className={s.content}>{item.label}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
