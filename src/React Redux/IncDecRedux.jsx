import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./index";

const IncDecRedux = () => {
  const dispatch = useDispatch();
  const { incNo, decNo } = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <div className="parent">
        <span></span>
        <div>
          <Button variant="contained" className="bg-secondary mx-5">
            <h1 className="m-0" onClick={() => incNo(100)}>
              +
            </h1>
          </Button>
          <Button variant="contained" className="bg-danger">
            <h1 className="m-0" onClick={() => decNo(100)}>
              -
            </h1>
          </Button>
        </div>
      </div>
    </>
  );
};

export default IncDecRedux;
