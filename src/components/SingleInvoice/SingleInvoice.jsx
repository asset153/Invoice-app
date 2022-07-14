import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleInvoice = (props) => {
  console.log(props.singleDataForInvoice);
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
          <span className="singleInvoice--container__spanType spanType--status">
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
