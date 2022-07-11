/* eslint-disable */
const actionSaveAndSend = (d1, d2, d3, ID) => {
  return async (dispatch) => {
    try {
      await fetch("http://localhost:4001/invoices/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: ID,
          ...d1,
          ...d2,
          items: d3,
          status: "Pending",
        }),
      });
      dispatch({
        type: "ADD_INVOICE",
        payload: ID,
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
};

export default actionSaveAndSend;
