import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const Todolist = () => {
  const [item, setitem] = useState();
  const [values, setvalues] = useState([]);
  const [toggleSub, settoggleSub] = useState(true);
  const [editItemId, seteditItemId] = useState(null);

  const textValue = (e) => {
    let newItem = e.target.value;
    setitem(newItem);
  };

  const addItem = () => {
    if (item === "") {
      alert("fill some data");
    } else if (item && !toggleSub) {
      setvalues(
        values.map((elem) => {
          if (elem.id === editItemId) {
            return { ...elem, name: item };
          } else {
            return elem;
          }
        })
      );
      setitem("");
      settoggleSub(true);
      seteditItemId(null);
    } else {
      const objItem = { id: new Date().getTime().toString(), name: item };
      setvalues((val) => {
        return [...val, objItem];
      });
      setitem("");
    }
  };

  const deleteFn = (index) => {
    // console.log("clicked " + id);

    const updatedData = values.filter((elem) => {
      return index !== elem.id;
    });
    setvalues(updatedData);
  };

  const removeAll = () => {
    // console.log("clicked");
    setvalues([]);
  };

  const editFn = (id) => {
    settoggleSub(false);
    const newEditItem = values.find((elem) => {
      return elem.id === id;
    });
    // console.log(newEditItem);
    setitem(newEditItem.name);
    seteditItemId(id);
  };

  return (
    <>
      <div className="parent">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>

          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={item}
            onChange={textValue}
            className="p-3"
          />
          {toggleSub ? (
            <button onClick={addItem} className="bg-warning border-0 p-1">
              <AddIcon />
            </button>
          ) : (
            <button onClick={addItem} className="bg-success border-0 p-1">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          )}

          <ol className="p-0">
            {values.map((val) => {
              return (
                <div
                  key={val.id}
                  className="d-flex justify-content-between shadow-lg p-2 "
                >
                  <span> {val.name} </span>
                  <div>
                    <i
                      className="fa-solid fa-pen-to-square text-success"
                      title="edit item"
                      onClick={() => editFn(val.id)}
                    ></i>
                    <i
                      className="fa-solid fa-trash-can text-danger px-2"
                      title="delete item"
                      onClick={() => deleteFn(val.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </ol>
          <div>
            <button onClick={removeAll}>Remove All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todolist;
