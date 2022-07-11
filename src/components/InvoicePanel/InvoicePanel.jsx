import React from "react";
import InvoicesList from "../InvoicesList/InvoicesList";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const InvoicePanel = (props) => {
  const handleClickShowForm = () => {
    // const form = document.querySelector(".form-container");
    //
    // form.style.display === "none"
    //   ? (form.style.display = "block")
    //   : (form.style.display = "none");
    props.dispatch({
      type: "TOGGLE_DISPLAY",
    });
  };

  return (
    <main className="invoicePanel--container">
      <div className="invoicePanel--container__top">
        <h1>TOP</h1>
        <button onClick={handleClickShowForm}>New</button>
      </div>
      <div className="invoicePanel--container__bottom">
        <InvoicesList />
      </div>
    </main>
  );
};

InvoicePanel.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(InvoicePanel);
