import React, { useEffect, useState } from "react";
import s from "./Admin.module.css";
import d from "../media/d.png";
import parts from "../media/parts.svg";
import tv from "../media/tv.svg";
import lamp from "../media/lamp.svg";
import persons from "../media/persons.svg";
import oneperson from "../media/oneperson.svg";
import book from "../media/book.svg";
import { Link, NavLink } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const Admin = () => {
  const [zagolov, setZagolov] = useState("block");
  const [zakazy, setZakazy] = useState("none");
  const [menu, setMenu] = useState("none");
  const [contacts, setContacts] = useState("none");
  const [otzyvy, setOtzyvy] = useState("none");
  const [sotruniki, setSotrudniki] = useState("none");
  const [data, setData] = useState([]);
  const [filtredata, setfiltredData] = useState([]);
  const [info, setInfo] = useState([]);
  const [listrews, setListrews] = useState([]);
  const [arr, setArr] = useState("user");
  const [result, setResult] = useState(0);

  let orderFoeToday = [];
  let orderFoeTodayReport = [];
  let pribyl;
  let ccc;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  
  const changeStatus=(id)=>{
    const data = {
      status:"обработан"
    };
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const url = `https://sms-h9zb.onrender.com/orders/` + id;
    fetch(url, options).then((response) => response.json());
    // window.location.reload(false);
  }


  const noneF = () => {
    setZagolov("none");
    setZakazy("none");
    setMenu("none");
    setContacts("none");
    setOtzyvy("none");
    setSotrudniki("none");
  };

  const zagolovF = () => {
    noneF();
    setArr("user");
    setZagolov("block");
  };

  const zakazyF = () => {
    noneF();
    setArr("orders");
    setZakazy("block");
  };

  const menuF = () => {
    noneF();
    setMenu("block");
  };

  const contactsF = () => {
    noneF();
    setContacts("block");
  };

  const otzyvyF = () => {
    noneF();
    setArr("reviews");
    setOtzyvy("block");
  };



  const deleteThis = (good) => {
    const url = `https://sms-h9zb.onrender.com/${arr}/` + good;

    const options = {
      method: "DELETE",
    };

    fetch(url, options).then((response) => {
      if (response.ok) {
        alert("sucsessfully deleted");
        getGoods();
      } else {
        alert("error " + response.status);
      }
    });
  };

  const getGoods = () => {
    fetch(`https://sms-h9zb.onrender.com/${arr}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          alert("something is wrong");
        }
      })
      .then((data) => setData(data));
  };


  const getDateFromCalendar = (date) => {
    let a = date.getDate();
    let b = date.getMonth();
    let c = date.getFullYear();
    let d = `${a}.${b + 1}.${c}`;
    orderFoeToday = data.filter((item) => item.realdate === d);
    setfiltredData(orderFoeToday);
  };

  const historyFunction = () => {
    setfiltredData(data);
  };


  const todayReport = (infor) => {
    const d = moment(infor).format("DD.MM.YYYY");
    const i = data.filter((item) => {
      return moment(item.realdate, "DD.MM.YYYY").format("DD.MM.YYYY") === d;
    });
    setInfo(i);
    setResult(getTotalSum(i));
  };

  const tomonthReport2 = (infor) => {
    let e = moment(infor, "DD.MM.YYYY").format("DD.MM.YYYY");
    let days = [];
    let dd = moment().subtract(30, "days").format("DD.MM.YYYY");
    for (let i = 0; i <= 30; i++) {
      days.push(moment(dd, "DD.MM.YYYY").add(i, "days").format("DD.MM.YYYY"));
    }
    let requireArr = [];
    requireArr = data.filter((item) => {
      return days.includes(
        moment(item.realdate, "DD.MM.YYYY").format("DD.MM.YYYY")
      );
    });
    const sum2 = requireArr.reduce((acc, item) => acc + +item.totalsum, 0);
    setResult(sum2);
  };

  const tomonthReport = (infor) => {
    let e = moment(infor, "DD.MM.YYYY").format("DD.MM.YYYY");
    var currentDate = moment();
    var weekStart = currentDate.clone().startOf("month");
    var weekEnd = currentDate.clone().endOf("month");

    let f = moment(weekEnd, "DD.MM.YYYY").format("DD.MM.YYYY");
    let days = [];
    for (let i = 0; i <= 31; i++) {
      days.push(moment(weekStart).add(i, "days").format("DD.MM.YYYY"));
    }
    const indexr = days.indexOf(f) + 1;
    let changeddays = days.slice(0, indexr);
    let requireArr = [];
    requireArr = data.filter((item) => {
      return changeddays.includes(
        moment(item.realdate, "DD.MM.YYYY").format("DD.MM.YYYY")
      );
    });
    const sum1 = requireArr.reduce((acc, item) => acc + +item.totalsum, 0);
    setResult(sum1);
  };

  const toweekReport = (infor) => {
    var currentDate = moment();
    var weekStart = currentDate.clone().startOf("isoWeek");
    var weekEnd = currentDate.clone().endOf("isoWeek");
    var days = [];
    for (var i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, "days").format("DD.MM.YYYY"));
    }
    let kill = [];
    kill = data.filter((item) => {
      return days.includes(
        moment(item.realdate, "DD.MM.YYYY").format("DD.MM.YYYY")
      );
    });
    const sum = kill.reduce((acc, item) => acc + +item.totalsum, 0);
    setResult(sum);
  };

  const lastweekReport = (infor) => {
    var currentDate = moment();
    var weekStart = currentDate.clone().startOf("isoWeek");
    let arr = moment(weekStart).subtract(7, "days");
    var days = [];
    for (var i = 0; i <= 6; i++) {
      days.push(moment(arr).add(i, "days").format("DD.MM.YYYY"));
    }
    let killlastweek = [];
    killlastweek = data.filter((item) => {
      return days.includes(
        moment(item.realdate, "DD.MM.YYYY").format("DD.MM.YYYY")
      );
    });
    const sumlastweek = killlastweek.reduce(
      (acc, item) => acc + +item.totalsum,
      0
    );
    setResult(sumlastweek);
  };

  const getTotalSum = (i) => {
    return i.reduce((sum, item) => {
      return sum + +item.totalsum;
    }, 0);
  };

  useEffect(getGoods, [arr]);

  const countOfPro=()=>{
    const amountOfGoods = data.filter(item=>item.type==="pizza");
    const amountOfGoods1 = data.filter(item=>item.type==="npizzas");
    const amountOfGoods2 = data.filter(item=>item.type==="nburgers");
    const amountOfGoods3 = data.filter(item=>item.type==="nsushi");
    const amountOfGoods4 = data.filter(item=>item.type==="nrolls");
    const amountOfGoods5 = data.filter(item=>item.type==="nsalats");
    const amountOfGoods6 = data.filter(item=>item.type==="ndecerts");
    const amountOfGoods7 = data.filter(item=>item.type==="ndrinks");
    const amountOfGoods8 = data.filter(item=>item.type==="burgers2");
    const amountOfGoods9 = data.filter(item=>item.type==="sushi");
    const amountOfGoods10 = data.filter(item=>item.type==="rolls");
    const amountOfGoods11 = data.filter(item=>item.type==="salats");
    const amountOfGoods12 = data.filter(item=>item.type==="decerts");
    const amountOfGoods13 = data.filter(item=>item.type==="drinks");

    ccc=amountOfGoods.length;
    c1=amountOfGoods1.length;
    c2=amountOfGoods2.length;
    c3=amountOfGoods3.length;
    c4=amountOfGoods4.length;
    c5=amountOfGoods5.length;
    c6=amountOfGoods6.length;
    c7=amountOfGoods7.length;
    c8=amountOfGoods8.length;
    c9=amountOfGoods9.length;
    c10=amountOfGoods10.length;
    c11=amountOfGoods11.length;
    c12=amountOfGoods12.length;
    c13=amountOfGoods13.length;
  
  }

  countOfPro();

  return (
    <>
      <div className={s.container}>
        <div className={s.ui}>
          <div className={s.menu}>
            <div style={{ display: "flex", margin: "0 auto" }}>
              <div className={s.logo}>
                <img src={d} />
              </div>{" "}
              <h1>FOOD PLANET</h1>
            </div>
            <ul className={s.ul}>
              <li onClick={zagolovF}>
                <img src={lamp} />{" "}
                <span style={{ marginLeft: "30px" }}>Меню</span>{" "}
              </li>
              <li onClick={zakazyF}>
                <img src={tv} />{" "}
                <span style={{ marginLeft: "30px" }}>Заказы</span>{" "}
              </li>
              <li onClick={otzyvyF}>
                <img src={oneperson} />{" "}
                <span style={{ marginLeft: "30px" }}>Отзывы</span>{" "}
              </li>
            </ul>
          </div>
          <div className={s.interface} style={{ display: zagolov }}>
            <h2 className={s.h2}>Главная</h2>
            <div className={s.column}>
              <div className={s.colonka}>
                <Link to="/admin/pizza">
                  <h2>Пицца</h2>
                  <h2>{ccc}</h2>
                </Link>
              </div>
              <div className={s.colonka}>
                <Link to="/admin/burgers2">
                  <h2>Бургер</h2>
                  <h2>{c8}</h2>
                </Link>
              </div>
              <div className={s.colonka}>
                <Link to="/admin/sushi">
                  <h2>Суши</h2>
                  <h2>{c9}</h2>
                </Link>
              </div>
              <div className={s.colonka}>
                <Link to="/admin/rolls">
                  <h2>Роллы</h2>
                  <h2>{c10}</h2>
                </Link>
              </div>
              <div className={s.colonka}>
                <Link to="/admin/salats">
                  <h2>Салаты</h2>
                  <h2>{c11}</h2>
                </Link>
              </div>
              <div className={s.colonka}>
                <Link to="/admin/decerts">
                  <h2>Десерты</h2>
                  <h2>{c12}</h2>
                </Link>
              </div>
              <div className={s.colonka}>
                <Link to="/admin/drinks">
                  <h2>Напитки</h2>
                  <h2>{c13}</h2>
                </Link>
              </div>
              <div className={s.colonka}>
                <Link to="/admin/nburgers">
                  <h2>Новинки</h2>
                  <h2>Чизбургер</h2>
                  <h2>{c2}</h2>
                </Link>
              </div>
              <div className={s.colonka}>
                <Link to="/admin/npizzas">
                  <h2>Новинки</h2>
                  <h2>Пицца</h2>
                  <h2>{c1}</h2>
                </Link>
              </div>
              <div className={s.colonka}>
                <Link to="/admin/nsushi">
                  <h2>Новинки</h2>
                  <h2>Суши</h2>
                  <h2>{c3}</h2>
                </Link>
              </div>
              <div className={s.colonka}>
                <Link to="/admin/nrolls">
                  <h2>Новинки</h2>
                  <h2>Роллы</h2>
                  <h2>{c4}</h2>
                </Link>
              </div>
              <div className={s.colonka}>
                <Link to="/admin/nsalats">
                  <h2>Новинки</h2>
                  <h2>Салаты</h2>
                  <h2>{c5}</h2>
                </Link>
              </div>
              <div className={s.colonka}>
                <Link to="/admin/ndecerts">
                  <h2>Новинки</h2>
                  <h2>Десерты</h2>
                  <h2>{c6}</h2>
                </Link>
              </div>
              <div className={s.colonka}>
                <Link to="/admin/ndrinks">
                  <h2>Новинки</h2>
                  <h2>Напитки</h2>
                  <h2>{c7}</h2>
                </Link>
              </div>
            </div>
          </div>

          <div className={s.interface} style={{ display: zakazy }}>
            <div className={s.for_calendar}>
              <Calendar
                onClickDay={(value, event) => getDateFromCalendar(value)}
              />
              <div className={s.report}>
                <button
                  className={s.buttons}
                  onClick={() => tomonthReport2(new Date())}
                >
                  отчет за последние 30 дней
                </button>
                <button
                  className={s.buttons}
                  onClick={() => tomonthReport(new Date())}
                >
                  отчет за месяц
                </button>
                <button
                  className={s.buttons}
                  onClick={() => lastweekReport(new Date())}
                >
                  отчет за прошлую неделю
                </button>
                <button
                  className={s.buttons}
                  onClick={() => toweekReport(new Date())}
                >
                  отчет за неделю
                </button>
                <button
                  className={s.buttons}
                  onClick={() => todayReport(new Date())}
                >
                  отчет за день
                </button>
                <div className={s.ekran}>
                  <h1>{result}</h1>
                </div>
              </div>
            </div>
            <button className={s.filter} onClick={historyFunction}>
              История заказов
            </button>
            <h2 className={s.h2}>Заказы</h2>
            <div className={s.column}>
              {filtredata.map((item) => (
                <div className={s.colonka} key={item._id}>
                  <div className={s.ikx} onClick={() => deleteThis(item._id)}>
                    x
                  </div>
                  <div style={{paddingTop:"30px"}}>
                    <NavLink to={`/client/order/${item._id}`}>
                      <h2>{item.name}</h2>
                      <h2>{item.phone}</h2>
                      <h2>{item.address}</h2>
                      <h2>{item.ccnum}</h2>
                      <h2>{item.date}</h2>
                      <h2>{item.ordernumber}</h2>
                    </NavLink>
                    <button onClick={()=>changeStatus(item._id)}>{item.status}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={s.interface} style={{ display: otzyvy }}>
            <h2 className={s.h2}>Отзывы</h2>
            <div className={s.column}>
              {data.map((item) => (
                <div className={s.colonka} key={item._id}>
                  <div className={s.ikx} onClick={() => deleteThis(item._id)}>
                    x
                  </div>
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                  <p>{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
