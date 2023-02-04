import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a
            className="navbar-brand mx-auto"
            href="https://getbootstrap.com/docs/5.0/layout/utilities/"
          >
            Logo
          </a>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto"></ul>
            <form className="d-flex">
              <input type="text" className="form-control me-2" />
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
