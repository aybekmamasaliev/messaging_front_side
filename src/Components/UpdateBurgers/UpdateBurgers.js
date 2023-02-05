import React, { useEffect, useState } from "react";
import s from "./UndateBurgers.module.css";
import { useParams } from "react-router-dom";

const UpdateBurgers = () => {
  const [goods, setGoods] = useState([]);
  const [requiredelement, setrequiredelement] = useState();
  const qurrentParams = +useParams().id;
  let qurrentid = useParams().id;
  const updateProduct = (e) => {
    const data = {
      name: e.currentTarget.name.value,
      price: e.currentTarget.price.value,
      img: e.currentTarget.img_url.value,
      description: e.currentTarget.desc.value,
    };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    // console.log(data);

    const url = "https://sms-h9zb.onrender.com/api/burgers2/" + qurrentid;

    fetch(url, options).then((response) => response.json());
  };
  const getProductById = () => {
    const url = "https://sms-h9zb.onrender.com/api/burgers2/" + qurrentid;
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
    fetch("https://sms-h9zb.onrender.com/api/burgers2")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          alert("error");
        }
      })
      .then((data) => setGoods(data));
  }, []);
let x = goods[qurrentParams];
  const qurrentElement = { ...goods.find((item) => item.id === qurrentParams) };
  const aler=()=>{
    alert("Success");
  }
  return (
    <div className={s.container}>
      <h1>Add Product</h1>
      <form
        className={s.form}
        onSubmit={updateProduct}
        action="javascript:void(0)"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" defaultValue={qurrentElement.name} />
        </div>
        <div>
          <label htmlFor="img_url">Addres of image</label>
          <input type="text" name="img_url" defaultValue={qurrentElement.img} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" name="price" defaultValue={qurrentElement.price} />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            defaultValue={qurrentElement.description}
          ></textarea>
        </div>
        <div>
          <button type="submit" onClick={aler}>Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBurgers;
