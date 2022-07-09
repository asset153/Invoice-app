import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleInvoice = (props) => {
  return (
    <>
      <Link
        to={`/invoices/${props.singleDataForInvoice.id}`}
        state={props.singleDataForInvoice}
      >
        <h1>Im {props.singleDataForInvoice.id}</h1>
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
