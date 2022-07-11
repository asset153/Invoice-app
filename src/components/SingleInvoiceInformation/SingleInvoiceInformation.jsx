/* eslint-disable */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import actionDeleteInvoice from "../../store/actions/actionDeleteInvoice";
import actionToggleDisplay from "../../store/actions/actionToggleDisplay";
import FormEdit from "../FormEdit/FormEdit";
const SingleInvoiceInformation = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteInvoice = () => {
    navigate("/");
    props.actionDeleteInvoice(location.state.id);
  };

  const editInvoice = () => {
    console.log("location", location);
    props.actionToggleDisplay();
    dispatch({
      type: "CHANGE_VALUES_BILL_FROM_EDIT",
      payload: {
        billFromStreetAddress: location.state.billFromStreetAddress,
        billFromCity: location.state.billFromCity,
        billFromPostCode: location.state.billFromPostCode,
        billFromCountry: location.state.billFromCountry,
      },
    });
  };

  return (
    <div>
      <h1>{location.state.id}</h1>
      <button onClick={editInvoice}>EDIT</button>
      <button onClick={deleteInvoice}>DELETE</button>
      <button>MARKS AS PAID</button>
      <FormEdit />
    </div>
  );
};

const mapDispatchToProps = {
  actionDeleteInvoice,
  actionToggleDisplay,
};

export default connect(null, mapDispatchToProps)(SingleInvoiceInformation);
