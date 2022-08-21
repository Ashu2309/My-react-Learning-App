import React, { createContext } from "react";
import FileB from "./FileB";

const Fname = createContext();

const FileA = () => {
  return (
    <>
      <Fname.Provider value={"Ashutosh"}>
        <FileB />
      </Fname.Provider>
    </>
  );
};

export default FileA;
export { Fname };
