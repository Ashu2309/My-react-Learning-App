import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import StreetviewIcon from "@mui/icons-material/Streetview";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

const Temp = () => {
  const [city, setcity] = useState();
  const [search, setsearch] = useState("mumbai");

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9ca8ca265f6fa124e8cfd6b5c603fe0d`;
      const data = await fetch(url);
      const mainData = await data.json();
      console.log(mainData);
      setcity(mainData.main);
    };
    getData();
  }, [search]);

  const inputEvent = (e) => {
    setsearch(e.target.value);
  };
  return (
    <>
      <div className="parent">
        <div className="temp_div d-flex justify-content-around align-items-center flex-column">
          <TextField
            id="outlined-basic"
            label="City"
            variant="filled"
            className="input"
            onChange={inputEvent}
            value={search}
          />
          {!city
            ? "City not Found"
            : [
                <div className="city d-flex justify-content-center align-content-center">
                  <StreetviewIcon className="icon" />
                  <p>{search}</p>
                </div>,
                <h4>
                  {city.temp}
                  °Cel
                </h4>,

                <div className="min_max d-flex justify-content-center align-content-center">
                  <DeviceThermostatIcon />
                  <p>
                    Min : <span>{city.temp_min}°Cel </span>
                  </p>
                  <DeviceThermostatIcon />
                  <p>
                    Max : <span>{city.temp_max}°Cel</span>
                  </p>
                </div>,
              ]}
          <div className="rotators">
            <span className="rotator r1"></span>
            <span className="rotator r2"></span>
            <span className="rotator r3"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp;
