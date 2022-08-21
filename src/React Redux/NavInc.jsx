import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const NewNavbar = () => {
  const amount = useSelector((state) => state.amount);
  const name = useSelector((state) => state.name);

  return (
    <>
      <div className="main_nav bg-dark text-light d-flex justify-content-between align-items-center p-2">
        <div className="brand d-flex justify-content-between align-items-end">
          <h1>State Bank of Ashutosh</h1>
          <span style={{ color: "blue" }}>-stay updated</span>
        </div>
        <div className="navlinks">
          <span className="mx-3">{name}</span>
          <Button variant="text" className="btn_news bg-light">
            Bank Balance : {amount}
          </Button>
        </div>
      </div>
    </>
  );
};

export default NewNavbar;
