import React, { useState } from "react";
import s from "./Form.module.css";
import eye from "../../Components/media/eyeeye.png";
import {NavLink } from "react-router-dom";
import {Toaster,toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [glaz, setEye] = useState("password");
  const [user, setUser] = useState("s");
  const [password, setPassword] = useState("s");
  const [link, setNink] = useState("/admin2");

  const navigate = useNavigate();

  const navigateToAdmin=()=>{
    if(user==="foodplanet" & password==="qwer1234"){
      navigate("/adminreafnjruiejt85r943utr8ejf43923843fjkesvfreo5867894rjfvnl")
    }else{
      // toast.error("товар уже выбран");
      alert("Неправильный логин или пароль")
    }
  }

  const getValue = (e) => {
    if(e.currentTarget.id==="username"){
      setUser(e.currentTarget.value)
    }else if(e.currentTarget.id==="password"){
        setPassword(e.currentTarget.value)
    }
  };

  const changeType = () => {
    if (glaz === "password") {
      setEye("text");
    } else {
      setEye("password");
    }
  };

  return (
    <>
     <Toaster position="top-center" reverseOrder={true} />
      <div className={s.content}>
        <h2 className={s.h2}>Авторизация администратора</h2>
        <div className={s.row}>
          <form>
            <div className={s.input}>
              <label>Имя пользователя</label>
              <input type="text" id="username" onChange={getValue} />
            </div>
            <div className={s.input}>
              <label>Пароль</label>
              <input type={glaz} id = "password" onChange={getValue} />
              <img
                src={eye}
                className={s.eye}
                onClick={changeType}
                alt="eye"
              />
            </div>
            <div className={s.button}>
              {/* <NavLink to={link}><button onMouseEnter={validation}>Войти</button></NavLink> */}
             <button onClick={navigateToAdmin}>Войти</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
