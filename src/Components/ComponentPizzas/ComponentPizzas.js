import React, { useState } from "react";
import styles from "../ComponentPizzas/ComponentPizzas.module.css";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {favoriteSlice} from "../../index"

const ComponentPizzas = (props) => {

  const dispatch = useDispatch();
  let x = JSON.parse(localStorage.getItem("cart"));


  let menu = props.menu;
  const item = props.item;

  const addToBusket = (data) => {
    const id = data._id;
    data.count2 = count;


    dispatch(favoriteSlice.actions.set(Math.random()));
    
    const basketStr = localStorage.getItem(`cart`);
    let basket = [];
    if (basketStr) {
      basket = JSON.parse(basketStr);

      const isExist = basket.map((item) => item._id).includes(id);
      if (isExist) {
        for (const item of basket) {
          if (item._id === id) {
            toast.error("товар уже выбран");
          }
        }
      } else {
        basket.push(data);
        toast.success("Товар успешно добавлен");
      }
    } else {
      basket.push(data);
      toast.success("Товар успешно добавлен");
    }
    localStorage.setItem(`cart`, JSON.stringify(basket));
  };

  const [count, setCount] = useState(1);

  const minisF = () => {
    if (count > 1) {
      setCount(count - 1);
    } else if (count <= 0) {
      return;
    }
  };

  return (
    <>
      <div className={styles.listOfPizzas}z>
        <img src={item.img} className={styles.firstPizza} />
        {/* <button className={styles.buttonOfMexican}></button> */}
        <div className={styles.mexican}>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <h4>{item.price}сом</h4>
          <div className={styles.divofcount}>
            <button
              style={{ fontSize: "20px"}}
              className={styles.minusbutton}
              onClick={minisF}
            >
              -
            </button>
            <p style={{ fontSize: "22px" }} className={styles.count}>
              {count}
            </p>
            <button
              style={{ fontSize: "20px" }}
              className={styles.minusbutton}
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
          <button
            className={styles.buttonofPizza}
            onClick={() => addToBusket(item)}
          >
            В корзину
          </button>
        </div>
      </div>
    </>
  );
};

export default ComponentPizzas;
