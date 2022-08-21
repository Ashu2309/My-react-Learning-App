import React, { useState } from "react";

const Time = () => {
  const currTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currTime);

  const timeIs = () => {
    let newcurrTime = new Date().toLocaleTimeString();
    setTime(newcurrTime);
    console.log(setTime);
  };

  setInterval(timeIs, 1000);
  return (
    <>
      <h1>Time : {time}</h1>
      <br />
      <button onClick={timeIs}>Click</button>
    </>
  );
};

export default Time;
