import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import InvoicesList from "../InvoicesList/InvoicesList";

const InvoicePanel = () => {
  const [showFilterCloud, setShowFilterCloud] = useState(false);
  const dispatch = useDispatch();

  const handleClickShowFilterCloud = () => {
    setShowFilterCloud((prevState) => !prevState);
  };

  const handleClickShowForm = () => {
    dispatch({
      type: "TOGGLE_DISPLAY",
    });
  };

  return (
    <main className="invoicePanel--container">
      <div className="invoicePanel--container__top">
        <div className="invoicePanel--container__top__title">
          <h1>Invoices</h1>
          <span>No invoices</span>
        </div>

        <div className="invoicePanel--container__top__filter">
          <button
            onClick={handleClickShowFilterCloud}
            className="invoicePanel--container__top__filter__btn"
          >
            <p>Filter</p>
            <img
              style={{
                transform: showFilterCloud && "rotate(180deg)",
              }}
              src={"/src/assets/icon-arrow-down.svg"}
              alt="arrow down"
            />
          </button>
          <div
            className="invoicePanel--container__top__cloud"
            style={{
              display: showFilterCloud && "block",
            }}
          >
            <div>
              <input id="draft" type="checkbox" />
              <label htmlFor="draft">Draft</label>
            </div>
            <div>
              <input id="pending" type="checkbox" />
              <label htmlFor="pending">Pending</label>
            </div>
            <div>
              <input id="paid" type="checkbox" />
              <label htmlFor="paid">Paid</label>
            </div>
          </div>
        </div>

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
