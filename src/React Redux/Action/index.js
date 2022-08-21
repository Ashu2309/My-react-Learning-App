export const incNo = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "INCREMENT",
      payload: amount,
    });
  };
};

export const decNo = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "DECREMENT",
      payload: amount,
    });
  };
};

export const updateName = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "NAME",
      payload: amount,
    });
  };
};
