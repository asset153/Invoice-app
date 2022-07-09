import React from "react";
import { useLocation } from "react-router-dom";

const SingleInvoiceInformation = () => {
  const location = useLocation();

  return (
    <div>
      <h1>{location.state.id}</h1>
    </div>
  );
};

export default SingleInvoiceInformation;
