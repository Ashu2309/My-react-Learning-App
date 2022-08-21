import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const InccreDecre = () => {
  const [val, setval] = useState(10);

  const decrement = () => {
    if (val <= 0) {
      alert("Lowest Limit reached");
    } else {
      setval(val - 1);
    }
  };
  const increment = () => {
    setval(val + 1);
  };
  return (
    <>
      <div className="parent">
        <span>{val}</span>
        <div>
          <button onClick={decrement}>
            <RemoveIcon />
          </button>{" "}
          <button onClick={increment}>
            <AddIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default InccreDecre;
