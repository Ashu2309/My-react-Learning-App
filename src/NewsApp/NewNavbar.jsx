import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const NewNavbar = ({ changeCat }) => {
  const buttonArr = ["business", "entertainment", "science", "sports"];
  return (
    <>
      <div className="main_nav d-flex justify-content-between align-items-center p-2">
        <div className="brand d-flex justify-content-between align-items-end">
          <h1>Daily News</h1>
          <span style={{ color: "blue" }}>-stay updated</span>
        </div>
        <div className="navlinks">
          <Stack direction="col" spacing={2} className="nav_buttons">
            {buttonArr.map((elem, ind) => {
              return (
                <Button
                  variant="text"
                  className="btn_news"
                  onClick={() => changeCat(elem)}
                >
                  {elem}
                </Button>
              );
            })}
          </Stack>
        </div>
      </div>
    </>
  );
};

export default NewNavbar;
