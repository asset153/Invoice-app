/* eslint-disable */
const actionMarksAsPaid = (data, ID) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:4001/invoices/${ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: ID,
          ...data,
          status: "Paid",
        }),
      });
      dispatch({
        type: "MARKS_AS_PAID_INVOICE",
        payload: ID,
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
};

export default actionMarksAsPaid;
