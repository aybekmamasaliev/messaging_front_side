import React, { useState } from "react";
import s from "./AddProduct.module.css";
import { useParams, useSearchParams } from "react-router-dom";

const AddProducts = () => {

  let product = useParams().qurentgood;
  const [name, setName] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [price, setPrice] = useState(null);
  const [desc, setDesc] = useState(null);
  const [category, setCategory] = useState(null);

  const getValue = (e) => {
    if (e.currentTarget.id === "name") {
      setName(e.currentTarget.value);
    } else if (e.currentTarget.id === "img_url") {
      setImgUrl(e.currentTarget.value);
    } else if (e.currentTarget.id === "price") {
      setPrice(e.currentTarget.value);
    } else if (e.currentTarget.id === "desc") {
      setDesc(e.currentTarget.value);
    } else if (e.currentTarget.id === "category") {
      setCategory(e.currentTarget.value);
    }
  };

  const saveData = () => {
    let url = `https://sms-h9zb.onrender.com/user`;
    const data = {
      price,
      name,
      img: imgUrl,
      description: desc,
      type:product
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, options).then((response) => {
      if (response.ok) {
        alert("Good is added");
      } else {
        alert("some thing is happened");
      }
    });
  };

  return (
      <div className={s.container}>
        <h1>Add Product</h1>
        <form className={s.form} action="javascript:void(0)">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={getValue} />
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input type="number" id="price" onChange={getValue} />
          </div>
          <div>
            <label htmlFor="img_url">Addres of image</label>
            <input type="text" id="img_url" onChange={getValue} />
          </div>
          <div>
            <label htmlFor="desc">Description</label>
            <textarea id="desc" onChange={getValue}></textarea>
          </div>
      
          <div>
            <button onClick={saveData}>Add</button>
          </div>
        </form>
      </div>
  );
};

export default AddProducts;
