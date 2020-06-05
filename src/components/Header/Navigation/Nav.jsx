import React from "react";
import style from "./nav.module.scss";
import Burger from "./BurgerMenu/Burger";
import { Link } from "react-scroll";

const Navigation = props => {
  return (
    <nav className={style.nav}>
      <ul className={style.menuList}>
        <li className={style.menuItem}>
          <Link
            to="mainPage"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass={style.activeLink}
          >
            Главная
          </Link>
        </li>
        <li className={style.menuItem}>
          <Link
            to="aboutMe"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass={style.activeLink}
          >
            О себе
          </Link>
        </li>
        <li className={style.menuItem}>
          <Link
            to="myResume"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass={style.activeLink}
          >
            Резюме
          </Link>
        </li>
        <li className={style.menuItem}>
          <Link
            to="myWorks"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass={style.activeLink}
          >
            Работы
          </Link>
        </li>
      </ul>
      <Burger />
    </nav>
  );
};

export default Navigation;
