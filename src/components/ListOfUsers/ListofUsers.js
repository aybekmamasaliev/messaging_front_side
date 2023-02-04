import React, { useEffect, useState } from "react";

const ListofUsers = () => {
    const [good, setGood] = useState([]);
  useEffect(() => {
    fetch("https://sms-h9zb.onrender.com/user")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert("no");
        }
      })
      .then((data) => {
        console.log(data);
        return setGood(data);
      });
  }, []);

  return (
    <div className="row m-0 container mt-3">
      {good.map((item) => (
        <div
          className="col-sm-4 bg-primary text-white border card"
          key={item._id}
        >
          <img src={item.img} alt="" className="width_img" />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ListofUsers;
