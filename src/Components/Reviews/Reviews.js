import React, { useEffect, useState } from "react";
// import {rewiews } from "../Contacts/rewiews";
import styles from "./Reviews.module.css";
import pen from "../media/pen.svg";
// import ellipce from "../media/ellipce.svg";
import reviewpen from "../media/reviewpen.svg";
import toast from "react-hot-toast"
import { NavLink } from "react-router-dom";

const Reviews = () => {
  const [rewievs, setRewievs] = useState([]);
  const [visibility, setVisibility] = useState("hidden");

  const [user, setUser] = useState(null);
  const [otzyv, setOtzyv] = useState(null);

  const changeVisibility=()=>{
    if(visibility==="hidden"){
      setVisibility("visible")
    }else{
      setVisibility("hidden")
    }
  }

  const getValue = (e) => {
    if (e.currentTarget.id === "username") {
      setUser(e.currentTarget.value);
    } else if (e.currentTarget.id === "otzyv") {
      setOtzyv(e.currentTarget.value);
    }
  };


  const rewievFunction = (e) => {
    e.preventDefault();

    let x = new Date();
    let y = x.getDate();
    let z = x.getMonth();
    let a = x.getFullYear();
    let b = `${y}.${z+1}.${a}`;

    let url = "https://sms-h9zb.onrender.com/reviews";

    const data = { name: user, description: otzyv, date: b , type:"rewievs"};

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, options).then((response) => {
      if (response.ok) {
        toast.success("Отзыв  успешно добавлен");
      } else {
       toast.error(" что то пошло не так");
      }
    });
  };

  useEffect(()=>{
    fetch("https://sms-h9zb.onrender.com/reviews")
    .then(response=>response.json())
    .then(data=>setRewievs(data))
  },[])

  

  // const text = rewievs.filter(item => item.type==="rewievs")
  // console.log(text);
  return (
    <>
    <div className={styles.main}>


    <p className={styles.otzyvy}>Отзывы</p>
      <div className={styles.lastBanner}>
        {rewievs.map((item) => (
          <div className={styles.listOfLastBanner} key={item._id}>
            <img className={styles.pen} src={pen} />
            {/* <img className={styles.ellipce} src={ellipce} /> */}
            <div className={styles.divOfReviewpen}>
              <p className={styles.sergey}>{item.name}</p>
              <img src={reviewpen} />
            </div>
            <p className={styles.reviewtext}>{item.description}</p>
            <p className={styles.date}>{item.date}</p>
          </div>
        ))}
      </div>
      <div className={styles.rewdiv}>
        <div className={styles.modal} style={{visibility: visibility}}>
          <form onSubmit={rewievFunction}>
            <div>
              <input
                type="text"
                name="userName"
                id="username"
                className={styles.inputName}
                placeholder="напишите ваше имя пожалуйста"
                onChange={getValue}
              />
            </div>
            <div>
              <textarea
                placeholder="Вы можете написать отзыв здесь"
                id="otzyv"
                className={styles.textarea}
                onChange={getValue}
              ></textarea>
            </div>
            <button className={styles.rew} onClick={changeVisibility} >Оставить отзыв</button>
          </form>
        </div>
        <button className={styles.rew} onClick={changeVisibility}>Оставить отзыв</button>
      </div>

      </div>
      
    </>
  );
};

export default Reviews;
