import React from "react";

const FormRegister = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <form className="form_width border m-0 p-4 bg-primary text-light">
          <div className="mb-3 mt-3">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="First Name"
              name="fname"
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lname"
              placeholder="Last Name"
              name="lname"
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="nick">Nickname:</label>
            <input
              type="text"
              className="form-control"
              id="nick"
              placeholder="Nickname"
              name="nick"
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
            />
          </div>
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
              />{" "}
              Remember me
            </label>
          </div>
          <button type="submit" className="btn bg-warning">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormRegister;
