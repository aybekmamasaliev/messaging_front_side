import React, { useEffect, useState } from "react";
import s from "./ListBurgers.module.css";
import { Link } from "react-router-dom";
const ListBurgers = () => {
  const [databurger, setDataburger] = useState([]);
  useEffect(() => {
    fetch("https://sms-h9zb.onrender.com/api/burgers2")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          alert("Error");
        }
      })
      .then((data) => setDataburger(data));
  }, []);
  return (
    <>
      <div className={s.container}>
        {databurger.map((item) => (
          <div className={s.cart}>
            <h3>{item.name}</h3>
            <p>{item.id}</p>
            <img src={item.img} className={s.img} />
            <p>{item.price}</p>
            <p>{item.description}</p>
            <Link to={`/admin/burgers/update/${item.id}`}>
              <button>UPDATE</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListBurgers;
