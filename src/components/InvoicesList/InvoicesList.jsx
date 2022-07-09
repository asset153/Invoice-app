import React, { useEffect, useState } from "react";
import SingleInvoice from "../SingleInvoice/SingleInvoice";

const InvoicesList = () => {
  const [invoicesData, setInvoicesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // const getApiData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:4001/invoices");
  //     if (response.ok) {
  //       setIsLoading(true);
  //     }
  //     const data = await response.json();
  //     setInvoicesData(data);
  //   } catch (e) {
  //     setError(e);
  //   }
  // };

  useEffect(() => {
    fetch("http://localhost:4001/invoices")
      .then((response) => {
        if (response.ok) {
          setIsLoading(true);
          return response.json();
        }
      })
      .then((data) => setInvoicesData([...data]))
      .catch((error) => setError(error));

    // getApiData();
  }, []);
  console.log("invoicesData", invoicesData);

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

export default InvoicesList;
