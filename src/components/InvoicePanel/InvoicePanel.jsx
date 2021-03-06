/* eslint-disable */

import React, { useState, useId, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import InvoicesList from "../InvoicesList/InvoicesList";

const InvoicePanel = (props) => {
  const [invoicesData, setInvoicesData] = useState([]);

  const [showFilterCloud, setShowFilterCloud] = useState(false);
  const [filterInvoice, setFilterInvoice] = useState({
    draft: false,
    pending: false,
    paid: false,
  });
  const dispatch = useDispatch();
  const ID = useId();

  useEffect(() => {
    fetch("http://localhost:4001/invoices/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setInvoicesData([...data]))
      .catch((error) => console.log(error));
  }, [props.addDeleteChange]);

  const handleClickShowFilterCloud = () => {
    setShowFilterCloud((prevState) => !prevState);
  };

  const handleClickShowForm = () => {
    dispatch({
      type: "TOGGLE_DISPLAY",
    });
  };

  // funkcja odpowiedzialna za filtrowanie faktur i nadawanie im display none lub visible...
  const handleChangeFilterInvoiceStatus = (e) => {
    // console.log(invoicesData);
    // console.log(e.target.checked);
    setFilterInvoice((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.checked,
      };
    });
  };

  // console.log(filterInvoice);

  let countInvoices;
  if (invoicesData.length > 0) {
    countInvoices = (
      <span>
        There are {invoicesData && invoicesData.length} total invoices
      </span>
    );
  } else {
    countInvoices = <span>No invoices</span>;
  }

  return (
    <main className="invoicePanel--container">
      <div className="invoicePanel--container__top">
        <div className="invoicePanel--container__top__title">
          <h1>Invoices</h1>
          <span>{countInvoices}</span>
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
              <input
                id={`${ID}draft`}
                type="checkbox"
                name="draft"
                onChange={handleChangeFilterInvoiceStatus}
                value="draft"
              />
              <label htmlFor={`${ID}draft`}>Draft</label>
            </div>
            <div>
              <input
                id={`${ID}pending`}
                onChange={handleChangeFilterInvoiceStatus}
                value="pending"
                name="pending"
                type="checkbox"
              />
              <label htmlFor={`${ID}pending`}>Pending</label>
            </div>
            <div>
              <input
                id={`${ID}paid`}
                onChange={handleChangeFilterInvoiceStatus}
                value="paid"
                name="paid"
                type="checkbox"
              />
              <label htmlFor={`${ID}paid`}>Paid</label>
            </div>
          </div>
        </div>

        <button onClick={handleClickShowForm}>New</button>
      </div>
      <div className="invoicePanel--container__bottom">
        <InvoicesList filterInvoice={filterInvoice} />
      </div>
    </main>
  );
};

InvoicePanel.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    addDeleteChange: state.reducerAddDeleteChangeInvoicesList,
  };
};

export default connect(mapStateToProps)(InvoicePanel);
