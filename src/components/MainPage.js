import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import ListofUsers from "./ListOfUsers/ListofUsers";

const MainPage = () => {

  return (
    <div className="container border mt-5">
      <Navbar />
      <ListofUsers />
    </div>
  );
};

export default MainPage;
