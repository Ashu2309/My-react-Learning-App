import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const Search = () => {
  const [img, setimg] = useState();

  const inputEvent = (e) => {
    setimg(e.target.value);
  };

  const src = `https://source.unsplash.com/random/300x300/?${img}`;
  return (
    <>
      <div className="parent">
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
          className="search-bar"
          value={img}
          onChange={inputEvent}
        />
        {img !== "" ? (
          <div className="mt-5">
            <img src={src} alt="some" />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Search;
