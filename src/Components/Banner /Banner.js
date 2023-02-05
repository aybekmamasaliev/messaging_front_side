import React from "react";
import styles from "./Banner.module.css";
import burger from "../media/burger.svg";
import { Link } from "react-router-dom";

const Banner = () => {

 
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.left}>
          <div className={styles.leftInsideTop}>
            <p className={styles.topP}>
              Доставка вкусной еды до 30 минут + напиток в подарок!
            </p>
          </div>
          <div className={styles.leftInsideCenter}>
            <p className={styles.bottomP}>
              Доставим заказ вовремя и можете рассчитывать, что еда будет
              доставлен всегда горячим и ароматным.
            </p>
          </div>
          <Link to="/menu">
            <button className={styles.leftInsideButton}>Перейти в меню</button>
          </Link>
        </div>

        <div className={styles.right}>
          <img className={styles.rightImg} src={burger} />
        </div>
      </div>
    </>
  );
};

export default Banner;
