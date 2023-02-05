import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Notif.module.css";

const Notif = () => {
  const [arr, setArr] = useState([]);
  let x;

  useEffect(() => {
    fetch("https://sms-h9zb.onrender.com/orders/")
      .then((res) => res.json())
      .then((data) => setArr(data[data.length-1].ordernumber));
  }, []);

  x = arr;

  return (
    <>
      <div className={s.container}>
        <h1>Пожалуйста подождите чтобы узнать свой номер заказа</h1>
        <h1>Ваш номер заказа - #{x}</h1>
        <div className={s.makro_btn}>
        <NavLink to="/">
          <button className={s.btn}>Вернуться на главную страницу</button>
        </NavLink>
        </div>
       
      </div>
    </>
  );
};

export default Notif;
