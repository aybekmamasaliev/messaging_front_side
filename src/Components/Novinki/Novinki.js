import React, { useEffect, useState } from "react";
import styles from "./Novinki.module.css";
import ComponenetBurger from "../ComponentBurger/ComponentBurger";
import { Toaster, toast } from "react-hot-toast";

const Novinki = () => {
  const [burgers, setBurgers] = useState([]);
  const [menu, setMenu] = useState("npizzas");
  const [count, setCount] = useState("npizzas");

  useEffect(() => {
    fetch(`https://sms-h9zb.onrender.com/user`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return alert("error");
        }
      })
      .then((data) => setBurgers(data));
  }, [menu]);

  const good = burgers.filter((item) => item.type === `${menu}`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div className={styles.main}>
        <p className={styles.news}>Новинки</p>
        <div className={styles.novinki}>
          <div className={styles.divofsecondBannerUl}>
            <ul className={styles.secondBannerUl}>
              <li onClick={() => setMenu("npizzas")}>Пицца</li>
              <li onClick={() => setMenu("nburgers")}>Бургер</li>
              <li onClick={() => setMenu("nsushi")}>Суши</li>
              <li onClick={() => setMenu("nrolls")}>Роллы</li>
              <li onClick={() => setMenu("nsalats")}>Салаты</li>
              <li onClick={() => setMenu("ndecerts")}>Десерты</li>
              <li onClick={() => setMenu("ndrinks")}>Напитки</li>
            </ul>
          </div>
          <div className={styles.seconddivofsecondbanner}>
            {good.map((item) => (
              <ComponenetBurger key={item._id} item={item} menu={menu} />
            ))}
          </div>
        </div>
        </div>
    </>
  );
};

export default Novinki;
