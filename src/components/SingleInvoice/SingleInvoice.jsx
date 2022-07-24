import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleInvoice = (props) => {
  // zmiana nazwy klasy przez zmianę statusu faktury
  let statusClass;
  if (props.singleDataForInvoice.status === "Paid") {
    statusClass = "singleInvoice--container__spanType spanType--status paid";
  } else if (props.singleDataForInvoice.status === "Draft") {
    statusClass = "singleInvoice--container__spanType spanType--status draft";
  } else {
    statusClass = "singleInvoice--container__spanType spanType--status pending";
  }

  return (
    <>
      <Link
        to={`/invoices/${props.singleDataForInvoice.id}`}
        state={props.singleDataForInvoice}
      >
        <div className="singleInvoice--container">
          <span className="singleInvoice--container__spanType spanType--id">
            <span>#</span>
            {props.singleDataForInvoice.id}
          </span>
          <span className="singleInvoice--container__spanType spanType--name">
            {props.singleDataForInvoice.billToClientsName}
          </span>
          <div>
            <span className="singleInvoice--container__spanType spanType--date">
              {props.singleDataForInvoice.billToDate}
            </span>
            <span className="singleInvoice--container__spanType spanType--totalSum">
              $ 1.800.90
            </span>
          </div>
          <span className={statusClass}>
            {props.singleDataForInvoice.status}
          </span>
        </div>
      </Link>
    </>
  );
};

SingleInvoice.propTypes = {
  singleDataForInvoice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default SingleInvoice;
