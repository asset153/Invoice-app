import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import createInvoiceID from "../../utils/createInvoiceID";

const SaveAndSend = (props) => {
  const handleClickSaveAndSend = () => {
    fetch("http://localhost:4001/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: createInvoiceID(),
        ...props.dataValuesFromBillFrom,
        ...props.dataValuesFromBillTo,
        items: props.dataValuesSingleItemList,
      }),
    }).catch((error) => console.error(error));
  };

  return (
    <div className="saveAndSend-container">
      <button className="saveAndSend-container__btn--discard">Discard</button>
      <button className="saveAndSend-container__btn--saveAsDraft">
        Save as Draft
      </button>
      <button
        onClick={handleClickSaveAndSend}
        className="saveAndSend-container__btn--saveAndSend"
      >
        Save &amp; Send
      </button>
    </div>
  );
};

SaveAndSend.propTypes = {
  dispatch: PropTypes.func,
  dataValuesFromBillTo: PropTypes.object,
  dataValuesFromBillFrom: PropTypes.object,
  dataValuesSingleItemList: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    dataValuesFromBillTo: state.reducerBillToValues,
    dataValuesFromBillFrom: state.reducerBillFromValues,
    dataValuesSingleItemList: state.reducerSingleItemListValue,
  };
};

export default connect(mapStateToProps)(SaveAndSend);
