/* eslint-disable */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SingleInvoice from "../SingleInvoice/SingleInvoice";

const InvoicesList = (props) => {
  const [invoicesData, setInvoicesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:4001/invoices/")
      .then((response) => {
        if (response.ok) {
          setIsLoading(true);
          return response.json();
        }
      })
      .then((data) => setInvoicesData([...data]))
      .catch((error) => setError(error));
  }, [props.addDeleteChange]);

  if (!isLoading) {
    return (
      <div>
        <h1>Loading data...</h1>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  } else if (invoicesData.length <= 0) {
    return (
      <div className="invoiceList--container">
        <img
          className="invoiceList--container__image"
          src="../../../src/assets/illustration-empty.svg"
          alt="illustration empty"
        />
        <h3>There is nothing here</h3>
        <p>
          Create an invoice by clicking the <span>New Invoice button</span> and
          get started
        </p>
      </div>
    );
  } else {
    {
      return invoicesData.map((singleDataForInvoice) => {
        if (
          props.filterInvoice.pending &&
          singleDataForInvoice.status === "Pending"
        ) {
          return (
            <SingleInvoice
              key={singleDataForInvoice.id}
              singleDataForInvoice={singleDataForInvoice}
            />
          );
        } else if (
          props.filterInvoice.paid &&
          singleDataForInvoice.status === "Paid"
        ) {
          return (
            <SingleInvoice
              key={singleDataForInvoice.id}
              singleDataForInvoice={singleDataForInvoice}
            />
          );
        } else if (
          props.filterInvoice.draft &&
          singleDataForInvoice.status === "Draft"
        ) {
          return (
            <SingleInvoice
              key={singleDataForInvoice.id}
              singleDataForInvoice={singleDataForInvoice}
            />
          );
        } else if (
          !props.filterInvoice.pending &&
          !props.filterInvoice.paid &&
          !props.filterInvoice.draft
        ) {
          return (
            <SingleInvoice
              key={singleDataForInvoice.id}
              singleDataForInvoice={singleDataForInvoice}
            />
          );
        }
      });
    }
  }
};

const mapStateToProps = (state) => {
  return {
    addDeleteChange: state.reducerAddDeleteChangeInvoicesList,
  };
};

export default connect(mapStateToProps)(InvoicesList);
