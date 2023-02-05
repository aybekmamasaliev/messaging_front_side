import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./FormOrder.module.css";
import { useNavigate } from "react-router-dom";

const FormOrder = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [ccnum, setCcnum] = useState(null);
  const [expyear, setExpyear] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [choose, setChoose] = useState("0");
  const [display, setDisplay] = useState("none");
  const [data, setData] = useState([]);
  const [ordernumber , setOrdernumber]=useState(0)

  useEffect(()=>{
    fetch("https://sms-h9zb.onrender.com/orders")
    .then(res=>res.json())
    .then(data=>{
      setData(data)
      if(!data.length)  {
        setOrdernumber(1);
      }else{
        setOrdernumber(+data[data.length-1].ordernumber+1);
      }
    })
  },[])

  const getValue = (e) => {
    if (e.currentTarget.id === "name") {
      setName(e.currentTarget.value);
    } else if (e.currentTarget.id === "address") {
      setAddress(e.currentTarget.value);
    } else if (e.currentTarget.id === "phone") {
      setPhone(e.currentTarget.value);
    } else if (e.currentTarget.id === "ccnum") {
      setCcnum(e.currentTarget.value);
    } else if (e.currentTarget.id === "expyear") {
      setExpyear(e.currentTarget.value);
    } else if (e.currentTarget.id === "cvv") {
      setCvv(e.currentTarget.value);
    }
  };


  const saveData = (e) => {
    e.preventDefault();
    const x = JSON.parse(localStorage.getItem("cart"));
    const asd = localStorage.getItem("addingTotalsum");
    let y = new Date();
    let z =
      y.getDate() +
      "." +
      (y.getMonth() + 1) +
      "." +
      y.getFullYear() +
      " (" +
      y.getHours() +
      ":" +
      y.getMinutes() +
      ")";
    let ztwo = y.getDate() + "." + (y.getMonth() + 1) + "." + y.getFullYear();

    let a = new Date();
    const data = {
      name,
      address,
      phone,
      ccnum,
      expyear,
      cvv,
      orders: x,
      date: z,
      realdate: ztwo,
      totalsum: asd,
      ordernumber:ordernumber,
      status:"в процессе"
    };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
  
      fetch("https://sms-h9zb.onrender.com/orders", options).then((response) => {
        if(name===null || address===null || phone===null){
          alert(" пожалуйста заполните все поля")
          return
        }
        else if (response.ok) {
          alert("order is added");
          localStorage.removeItem("cart");
          localStorage.removeItem("addingTotalsum");
          navigate("/admin/notif");
        } else {
          alert("some thing is happened");
        }
      });

  };


  useEffect(()=>{
    if(choose==="1"){
     setCcnum("none");
     setExpyear("none");
     setCvv("none");
     setDisplay("none")
    }else if(choose==="2"){
      setDisplay("block")
      setCcnum("none");
      setExpyear("none");
      setCvv("none");
      setDisplay("block")
    }
  },[choose])

  return (
    <>
      <form className={s.railway}>
        <h3>Информация покупателе</h3>
        <div className={s.form_group}>
          <label htmlFor="name">Имя</label>
          <input type="text" id="name" onChange={getValue} required />
          <label htmlFor="address">Aдрес доставки</label>
          <input type="text" id="address" onChange={getValue} required />
          <label htmlFor="phone">Номер телефона</label>
          <input type="text" id="phone" onChange={getValue} required />
          <label>ВЫБЕРИТЕ СПОСОБ ОПЛАТЫ</label>
          <select onChange={(e)=>{setChoose(e.target.value)}}  value={choose}>
            <option className={s.option} value="0">ВЫБЕРИТЕ СПОСОБ ОПЛАТЫ</option>
            <option className={s.option} value="1">ОПЛАТА НАЛИЧНЫМИ</option>
            <option className={s.option} value="2">ОПЛАТА КАРТОЙ</option>
          </select>
          <label htmlFor="ccnum" style={{display:display}}>Credit card number</label>
          <input
            type="text"
            id="ccnum"
            placeholder="1111-2222-3333-4444"
            onChange={getValue}
            style={{display:display}}
            required
          />
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              justifyContent: "space-between",
            }}
          >
            <div>
              <label htmlFor="expyear" style={{display:display}}>Exp Year</label>
              <input
                type="text"
                id="expyear"
                placeholder={2018}
                onChange={getValue}
                style={{display:display}}
                required
              />
            </div>
            <div>
              <label htmlFor="cvv" style={{display:display}}>CVV</label>
              <input
                type="text"
                id="cvv"
                onChange={getValue}
                style={{display:display}}
                placeholder={352}
                required
              />
            </div>
          </div>
        </div>
        <div className={s.submit_block}>
          <div className={s.submit_button}>
            <i className={s.fa} />
            <br />
            <input type="submit" onClick={saveData} defaultValue="Отправить" />
          </div>
        </div>
      </form>
    </>
  );
};

export default FormOrder;
