import React, { useState } from "react";

const Formevents = () => {
  const [data, setdata] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const updateForm = (e) => {
    e.preventDefault();
    // setfullName(name);
  };

  const updateText = (e) => {
    let value = e.target.value;
    let nameInp = e.target.name;

    // console.log(name);
    setdata((prev) => {
      return {
        ...data,
        [nameInp]: value,
      };

      //   if (nameInp === "name") {
      //     return {
      //       name: value,
      //       phone: prev.phone,
      //     };
      //   } else if (nameInp === "phone") {
      //     return {
      //       name: prev.name,
      //       phone: value,
      //     };
      //   }
    });
  };
  return (
    <>
      <div className="parent" onSubmit={updateForm}>
        <form className="form">
          <h1>
            Hello {data.name} {data.phone} {data.email}
          </h1>
          <input
            type="text"
            onChange={updateText}
            value={data.name}
            name="name"
          />
          <input
            type="number"
            onChange={updateText}
            value={data.phone}
            name="phone"
          />
          <input
            type="email"
            onChange={updateText}
            value={data.email}
            name="email"
          />
          <button type="submit">Click here 👍</button>
        </form>
      </div>
    </>
  );
};

export default Formevents;
