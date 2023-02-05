import React, { useEffect, useState } from "react";
import s from "./UpdatePizzas.module.css";
import { useParams } from "react-router-dom";

const UpdatePizzas = () => {
  const [goods, setGoods] = useState([]);
  const [requiredelement, setrequiredelement] = useState();
  const qurrentParams = +useParams().id;
  let qurrentid = useParams().id;
  let qurrentGood = useParams().pizzas;

  const updateProduct = (e) => {
    const data = {
      name: e.currentTarget.name.value,
      price: e.currentTarget.price.value,
      img: e.currentTarget.img_url.value,
      description: e.currentTarget.desc.value,
    };
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const url = `https://sms-h9zb.onrender.com/user/` + qurrentid;
    fetch(url, options).then((response) => response.json());
  };
  
  const getProductById = () => {
    const url = `https://sms-h9zb.onrender.com/user/` + qurrentid;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("error");
        }
      })
      .then((data) => setrequiredelement(data));
  };
  useEffect(getProductById, []);
  useEffect(() => {
    fetch(`https://sms-h9zb.onrender.com/user`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          alert("error");
        }
      })
      .then((data) => setGoods(data));
  }, []);


  const qurrentElement = { ...goods.find((item) => item._id === qurrentid) };
  const aler = () => {
    alert("Success");
  };
  return (
    <div className={s.container}>
      <h1 style={{marginTop:"30px"}}>Обновить данные о продукции</h1>
      <form
        className={s.form}
        onSubmit={updateProduct}
        action="javascript:void(0)"
      >
        <div>
          <label htmlFor="name" style={{marginTop:"30px"}}>Название</label>
          <input type="text" name="name" defaultValue={qurrentElement.name} />
        </div>
        <div>
          <label htmlFor="img_url" style={{marginTop:"30px"}}>Ссылка на изображение</label>
          <input type="text" name="img_url" defaultValue={qurrentElement.img} />
        </div>
        <div>
          <label htmlFor="price" style={{marginTop:"30px"}}>Цена</label>
          <input type="text" name="price" defaultValue={qurrentElement.price} />
        </div>
        <div>
          <label htmlFor="desc" style={{marginTop:"30px"}}>Описание</label>
          <textarea
            name="desc"
            defaultValue={qurrentElement.description}
          ></textarea>
        </div>
        <div>
          <button type="submit" style={{marginBottom:"30px", height:"40px"}}>Обновить</button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePizzas;
