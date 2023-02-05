import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import group from "../media/group.png";
import phone from "../media/vector.svg";
import kolyaska from "../media/kolyaska.svg";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {

  const favorite = useSelector(state => state.favorite);
  // console.log("HEADER", favorite);

  let num;
  let x = JSON.parse(localStorage.getItem("cart"));
  const busketF = () => {
    if (x === null) {
      num = 0;
    } else {
      num = x.length;
    }
  };

  busketF();

  return (
    <div className={style.header}>
      <NavLink to="/">
      <div className={style.left}>
        <img className={style.group} src={group} alt="group" />
        <p className={style.p}>food planet</p>
        <p className={style.nameofsite}>Планета вкусной еды</p>
      </div>
      </NavLink>
      <div className={style.right}>
        <ul className={style.ul}>
          <li>
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
              <a href="tel:+996-0505-66-02-20"><img src={phone} alt="busket" /> 996505660220{" "}</a>
          </li>
          <li>
            <NavLink to="/admin/busket">
              <img src={kolyaska} alt="kolyaska" /> {num}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
