import React from "react";
import Navbar from "./Navbar/Navbar";
import ListofUsers from "./ListOfUsers/ListofUsers";
import FormRegister from "./Form/FormRegister";

const MainPage = () => {

  return (
    <div className="container border mt-5">
      <Navbar />
      <ListofUsers />
    </div>
  );
};

export default MainPage;
