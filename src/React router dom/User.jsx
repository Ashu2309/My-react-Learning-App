import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

const User = () => {
  const { fname } = useParams();
  const location = useLocation();
  const history = useHistory();
  return (
    <>
      <div className="parent">
        <h1>This is User page .</h1>
        <br />
        <h2>Welcome {fname}</h2>
        <h4>My current location is : {location.pathname}</h4>
        <div className="d-flex justify-content-around w-25">
          {location.pathname === "/User/ashu"
            ? [
                <Button
                  variant="contained"
                  onClick={() => alert("You are fucking awesome..!!")}
                  className="mat-btn-1"
                >
                  Click me
                </Button>,
                <Button
                  variant="contained"
                  onClick={() => history.goBack()}
                  className="mat-btn-cancel"
                >
                  Go Back
                </Button>,
                <Button
                  variant="contained"
                  onClick={() => history.push("/")}
                  className="mat-btn-push"
                >
                  Home
                </Button>,
              ]
            : null}
        </div>
      </div>
    </>
  );
};

export default User;
