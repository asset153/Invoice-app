import React from "react";
import LeftBar from "./components/LeftBar/LeftBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import InvoicePanel from "./components/InvoicePanel/InvoicePanel";
import SingleInvoiceInformation from "./components/SingleInvoiceInformation/SingleInvoiceInformation";
const App = () => {
  return (
    <main className="app-container">
      <BrowserRouter>
        <LeftBar />
        <Routes>
          <Route path="/" element={<InvoicePanel />} />
          <Route
            path="/invoices/:invoiceId"
            element={<SingleInvoiceInformation />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
