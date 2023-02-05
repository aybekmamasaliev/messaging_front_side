import React, { useEffect, useState } from "react";
import styles from "./Pizzas.module.css";
import ComponentPizzas from "../ComponentPizzas/ComponentPizzas";
import ComponenetBurger from "../ComponentBurger/ComponentBurger";
import { Toaster} from "react-hot-toast";

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);
  const [menu, setMenu] = useState("pizza");
  const [sort, setSort]=useState("");

  useEffect(() => {
    fetch(`https://sms-h9zb.onrender.com/user`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          alert("something is wrong" + response.status);
        }
      })
      .then((data) => setPizzas(data));
  }, [menu]);

  const good = pizzas.filter((character) => character.type === `${menu}`);

  useEffect(()=>{
    if(sort === "1"){
     good.sort((a,b)=>{
      return a.price - b.price;
     })

    //  console.log(good)
    setPizzas(good)
    }else if(sort==="2"){
      good.sort((a,b)=>{
        let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase()

        if(fa<fb){
          return -1;
        } else if(fa>fb){
          return 1;
        }
        return 0;
       })
      //  console.log(good)
      setPizzas(good)
    }
  },[sort])

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div className={styles.thirddivofsecondbanner} id="menu">
        <p className={styles.news2}>Меню</p>
        <div className={styles.divofsecondBannerUl2}>
          <ul className={styles.secondBannerUl}>
            <li onClick={() => setMenu("pizza")}>Пицца</li>
            <li onClick={() => setMenu("burgers2")}>Бургер</li>
            <li onClick={() => setMenu("sushi")}>Суши</li>
            <li onClick={() => setMenu("rolls")}>Роллы</li>
            <li onClick={() => setMenu("salats")}>Салаты</li>
            <li onClick={() => setMenu("decerts")}>Десерты</li>
            <li onClick={() => setMenu("drinks")}>Напитки</li>
          </ul>
        </div>
      </div>
      <div className={styles.thirsdbanner}>
        <div className={styles.forChoose}>
          <form className={styles.form}>
            <label className={styles.labell}>Сортировать по:</label>
            <select className={styles.select} value={sort} onChange={(e)=>{setSort(e.target.value)}}>
              <option className={styles.option} value="0" >По умолчанию</option>
              <option className={styles.option} value="1" >по цене</option>
              <option className={styles.option} value="2" >по названию</option>
            </select>
          </form>
        </div>
        <div className={styles.firstdivOfThidrBanner}>
          {good.map((item) => (
                //  <ComponenetBurger key={item._id} item={item} menu={menu} />
            <ComponentPizzas key={item._id} item={item} menu={menu} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pizzas;
