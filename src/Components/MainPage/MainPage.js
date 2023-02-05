import React from "react";
import styles from "./MainPage.module.css";
import Banner from "../Banner /Banner";
import Novinki from "../Novinki/Novinki";
import Pizzas from "../Pizzas/Pizzas";
import ReasonChoise from "../ReasonChoise/ReasonChoise";
import Reviews from "../Reviews/Reviews";
import Mainmenu from "../Mainmenu/Mainmenu"

const MainPage = () => {

  return (
    <div className={styles.main}>
      <Banner />
      <Mainmenu/>
      {/* <Novinki/>
      <Pizzas/> */}
      <ReasonChoise/>
      <Reviews/>
    </div>
  );
};

export default MainPage;