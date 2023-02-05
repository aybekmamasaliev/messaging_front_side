import React from "react";
import styles from "./ReasonChoise.module.css";
import gruzovik from "../media/gruzovik.svg";
import meal from "../media/meal.svg";
import menu from "../media/menu.svg";
import map from "../media/map.svg";

const ReasonChoise = () => {
  return (
    <>
      <div className={styles.fourthBanner}>
        <div className={styles.features}>
          <p className={styles.reason}>Почему выбирают нас:</p>
          <img className={styles.gruzovik} src={gruzovik} />
          <p className={styles.logistic}>Мгновенная доставка</p>
          <p className={styles.bl}>
            Доставим заказанную вами еду за 30 минут + напиток в подарок{" "}
          </p>
          <p className={styles.reviews}>О нас</p>
        </div>
        <div className={styles.features}>
          <img className={styles.gruzovik} src={meal} />
          <p className={styles.logistic}>Свежие продукты</p>
          <p className={styles.bl}>
            Доставим заказанную вами еду за 30 минут + напиток в подарок{" "}
          </p>
        </div>
        <div className={styles.features}>
          <img className={styles.gruzovik} src={menu} />
          <p className={styles.logistic}>Уникальное меню</p>
          <p className={styles.bl}>
            Доставим заказанную вами еду за 30 минут + напиток в подарок{" "}
          </p>
        </div>
        <div className={styles.features}>
          <img className={styles.gruzovik} src={map} />
          <p className={styles.logistic}>Доставка</p>
          <p className={styles.bl}>
            Доставим заказанную вами еду за 30 минут + напиток в подарок{" "}
          </p>
        </div>
      </div>
      <div className={styles.opisaniye}>
        <p className={styles.pofopisaniye}>
          FoodPlanet - уникальная в своем роде  интернет магазин, которая способна
          совместить в себе скорость, удобство и простоту. Наши клиенты знают,
          что быстро и легко оформить заказ у нас можно в считанные минуты.
          Гораздо сложнее с заказом определиться, ведь мы предлагаем вам выбор
          более чем с 16 разнообразных , вкуснейших блюд . На сайте FoodPlanet
          вы уж точно найдете то, чего пожелает душа - для этого нужно просто
          открыть меню . В несколько кликов оформляется
          заказ. Осуществить это просто такими способами: оформить заказ на
          сайте; оформить заказ по телефону; связаться.
        </p>
      </div>
    </>
  );
};

export default ReasonChoise;
