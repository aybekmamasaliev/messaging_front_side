import React, { useEffect, useState } from "react";
import s from "./ListPizzas.module.css";
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const ListPizzas = () => {
  const [datapizza, setDatapizza] = useState([]);
  // console.log(params)
  let qurrentGoods = useParams().pizzas;
  // console.log(qurrentGoods);

  const deleteThis = (good) => {
    const url = `https://sms-h9zb.onrender.com/user/` + good;

    const options = {
      method: "DELETE",
    };

    fetch(url, options).then((response) => {
      if (response.ok) {
        alert("sucsessfully deleted");
 
      } else {
        alert("error " + response.status);
      }
    });
    
  };

   useEffect(() => {
    fetch(`https://sms-h9zb.onrender.com/user`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          alert("Error");
        }
      })
      .then((data) => setDatapizza(data));
  }, []);
  // ${qurrentGoods}

  const product = datapizza.filter((item) => item.type === `${qurrentGoods}`);

  return (
    <>
      <div className={s.container}>
        {product.map((item) => (
          <div className={s.cart} key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.id}</p>
            <img src={item.img} className={s.img} style={{height:"200px"}}/>
            <p>{item.price} som</p>
            <p>{item.description}</p>

            <button onClick={() => deleteThis(item._id)}>Удалить</button>
            <Link to={`/admin/${qurrentGoods}/update/${item._id}`}>
              <button>Обновить</button>
            </Link>
          </div>
        ))}
      </div>

      <div className={s.container}>
        <NavLink to={`/addpro/${qurrentGoods}`}>
          <button className={s.addpro}>Добавить продукт</button>
        </NavLink>
      </div>
    </>
  );
};

export default ListPizzas;
