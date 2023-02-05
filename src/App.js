import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Busket from "./Components/Busket/Busket";
import Pizzas from "./Components/Pizzas/Pizzas";
import ReasonChoise from "./Components/ReasonChoise/ReasonChoise";
import Reviews from "./Components/Reviews/Reviews";
import FormOrder from "./Components/FormOrder/FormOrder.";
import Admin from "./Components/Admin/Admin";
import ClientOrder from "./Components/ClienOrder/ClientOrder";
import ListPizzas from "./Components/ListPizzas/LIstPizzas";
import UpdatePizzas from "./Components/UpdatePizzas/UpdatePizzas";
// import UpdateBurgers from "./Components/UpdateBurgers/UpdateBurgers";
// import ListBurgers from "./Components/ListBurgers/ListBurgers";
import Form from "./Components/Form/Form";
// import env from "src";
import Mainmenu from "./Components/Mainmenu/Mainmenu";
import AddProducts from "./Components/AddProduct/AddProduct";
import Notif from "./Components/Notif/Notif";

const App = () => {

  // const [num , setNum]=useState(0);

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/menu" element={<Mainmenu />} />
        {/* <Route path="/menu" element={<Pizzas />} /> */}
        <Route path="/reason" element={<ReasonChoise />} />
        <Route path="/contacts" element={<Reviews />} />
        <Route path="/ordering" element={<FormOrder />} />
        <Route path="/client/order/:_id" element={<ClientOrder />} />
        <Route path="/adminreafnjruiejt85r943utr8ejf43923843fjkesvfreo5867894rjfvnl" element={<Admin />} />
        <Route path="/admin" element={<Form />} />
        <Route path="/admin/busket" element={<Busket />} />
        <Route path="/admin/notif" element={<Notif />} />
        <Route path="/admin/:pizzas" element={<ListPizzas />} />
        <Route path="/addpro/:qurentgood" element={<AddProducts />} />
        <Route path="/admin/:pizzas/update/:id" element={<UpdatePizzas />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
