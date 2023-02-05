import React from "react";
import style from "./Footer.module.css";
import group from "../media/fork.svg";
import phone from "../media/vector.svg";
import { NavLink } from "react-router-dom";

const Footer = (prop) => {
  return (
    <div style={{ backgroundColor: "#254F4C" }}>
      <div className={style.footer} style={{color:"white"}}>
      
        <div className={style.left}>
        
          <img className={style.group} src={group} />
          <p className={style.p}>food planet</p>
          <p className={style.nameofsite}>Планета вкусной еды</p>
    
        </div>
      

        <div className={style.right}>
          <ul className={style.ul}>
            <li style={{ color: "black" }}>
              <NavLink to="/">Главная</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Меню</NavLink>
            </li>
            <li>
              <NavLink to="/reason">O нас</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Отзывы</NavLink>
            </li>
            <li>
              <img src={phone} alt="busket" /> 996500405988{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
