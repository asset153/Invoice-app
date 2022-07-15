/* eslint-disable */
import React from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import actionSaveAndSend from "../../store/actions/actionSaveAndSend";
import createInvoiceID from "../../utils/createInvoiceID";
import actionToggleDisplay from "../../store/actions/actionToggleDisplay";
const SaveAndSend = (props) => {
  const dispatch = useDispatch();

  const handleClickSaveAndSend = () => {
    const ID = createInvoiceID();
    props.actionSaveAndSend(
      props.dataValuesFromBillFrom,
      props.dataValuesFromBillTo,
      props.dataValuesSingleItemList,
      ID
    );
  };

  const handleDisplayForm = () => {
    dispatch({
      type: "TOGGLE_DISPLAY",
    });
    dispatch({
      type: "CREATE_OBJ_FROM_VALUE_CLEAR",
    });
    dispatch({
      type: "ADD_ITEM_CLEAR",
    });
  };

  const TEST = () => {
    dispatch({
      type: "TEST_BILL_FROM",
    });

    dispatch({
      type: "TEST_BILL_TO",
    });
  };

  return (
    <div className="saveAndSend-container">
      <button onClick={TEST} className="saveAndSend-container__btn--TEST">
        TEST
      </button>
      <button
        onClick={handleDisplayForm}
        className="saveAndSend-container__btn--discard"
      >
        Discard
      </button>
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

const mapDispatchToProps = {
  actionSaveAndSend,
  actionToggleDisplay,
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveAndSend);
