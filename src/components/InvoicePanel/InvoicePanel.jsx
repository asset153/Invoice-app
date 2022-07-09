import React from "react";
import InvoicesList from "../InvoicesList/InvoicesList";

const InvoicePanel = () => {
  const handleClickShowForm = () => {
    const form = document.querySelector(".form-container");

    form.style.display === "none"
      ? (form.style.display = "block")
      : (form.style.display = "none");
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

export default InvoicePanel;
