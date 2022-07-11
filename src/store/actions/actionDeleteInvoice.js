/* eslint-disable */
const actionDeleteInvoice = (ID) => {
  return async (dispatch) => {
    await fetch(`http://localhost:4001/invoices/${ID}`, {
      method: "DELETE",
    })
      .then((response) => console.log(response.ok))
      .catch((error) => console.log(error));
    dispatch({
      type: "DELETE_INVOICE",
      payload: ID,
    });
  };
};

export default actionDeleteInvoice;
