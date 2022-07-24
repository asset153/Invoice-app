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
  } else {
    {
      return invoicesData.map((singleDataForInvoice) => {
        // console.log(props.filterInvoice);
        // console.log("singleDataForInvoice", singleDataForInvoice);
        // if (
        //   props.filterInvoice.draft &&
        //   singleDataForInvoice.status === "Draft"
        // ) {
        //   console.log(true);
        //   return (
        //     <SingleInvoice
        //       key={singleDataForInvoice.id}
        //       singleDataForInvoice={singleDataForInvoice}
        //     />
        //   );
        // } else if (
        //   props.filterInvoice.paid &&
        //   singleDataForInvoice.status === "Paid"
        // ) {
        //   return (
        //     <SingleInvoice
        //       key={singleDataForInvoice.id}
        //       singleDataForInvoice={singleDataForInvoice}
        //     />
        //   );
        // } else if (
        //   props.filterInvoice.pending &&
        //   singleDataForInvoice.status === "Pending"
        // ) {
        //   return (
        //     <SingleInvoice
        //       key={singleDataForInvoice.id}
        //       singleDataForInvoice={singleDataForInvoice}
        //     />
        //   );
        // }
        return (
          <SingleInvoice
            key={singleDataForInvoice.id}
            singleDataForInvoice={singleDataForInvoice}
          />
        );
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
