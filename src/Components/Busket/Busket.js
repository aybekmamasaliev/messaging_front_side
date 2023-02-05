

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./Busket.module.css";
import { useDispatch } from "react-redux";
import {favoriteSlice} from "../../index";


const Busket = () => {

  const dispatch = useDispatch();
  dispatch(favoriteSlice.actions.set(Math.random()));
  const [goods, setGoods] = useState([]);

  let asd;

  const addingTotalsum = () => {
    localStorage.setItem("addingTotalsum", asd);
  }

  const getProducts = () => {
    if(localStorage.getItem("cart")){
      const goods = JSON.parse(localStorage.getItem("cart"));
      setGoods(Object.values(goods));
    }else{
      return;
    }
  };

  const changeCount = (e, data) => {
    data.count2=e.currentTarget.value;
    localStorage.setItem("cart",JSON.stringify(goods));
    getProducts();
  };


  let x = [];
  const deleteItem=(data)=>{
   for(let i=0; i<goods.length; i++){
    if(goods[i]._id !== data){
      x.push(goods[i]);
    }
   }
   localStorage.removeItem("cart");
   localStorage.setItem("cart",JSON.stringify(x));
   getProducts();
  }

  const getTotalSum = () => {
    return goods.reduce((sum, item) => {
      if (item.currency === "$") {
        return asd = sum + item.count2 * item.price * 85;
      }
      return asd = sum + item.count2 * item.price;
    }, 0);
  };

  // console.log(goods);

  useEffect(getProducts, []);

  return (
    <>
      <div className={s.container}>
        <h1>Корзина</h1>
        <table className={s.table}>
          <tbody>
          <tr>
            <th><p className={s.size20}>Товар</p></th>
            <th><p className={s.size20}>Название</p></th>
            <th><p className={s.size20}>Цена</p></th>
            <th><p className={s.size20}>Количество</p></th>
            <th><p className={s.size20}>Оплата </p></th>
          </tr>
          {goods.map((item) => {
            return (
              <>
                <tr key={item.id}>
                  <td>
                    <img src={item.img} alt="" />
                  </td>
                  <td>
                    <p className={s.size20}>{item.name}</p>
                  </td>
                  <td>
                    <p className={s.size20}>{+item.price}</p>
                  </td>

                  <td>
                    <input
                      className={s.input}
                      onChange={(e) => changeCount(e, item)}
                      type="number"
                      defaultValue={+item.count2}
                    />
                  </td>
                  <td style={{ width:"200px", textAlign:"center"}}> 
                    <p className={s.size20}>
                      {+item.count2 * +item.price} {item.currency}
                    </p>
                  </td>
                  <td>
                    <button className={s.forDelete} onClick={()=>deleteItem(item._id)}>Удалить </button>
                  </td>
                </tr>
              </>
            );
          })}
          </tbody>
        </table>
        <div className={s.container2}>
          <h2 style={{padding:"10px", fontSize:"50px"}}>
          Итоговая сумма : <span>{getTotalSum()} </span>
            <span>сом</span>
          </h2>
          <Link to="/ordering">
            <button onClick={addingTotalsum} style={{fontSize:"25px", borderRadius:"20px", cursor:"pointer",height:"40px", width:"300px"}}>Оформить заказ</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Busket;
