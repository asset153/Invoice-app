/* eslint-disable */

import React, { useState, useRef } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ItemList from "../ItemList/ItemList";
import BillFrom from "../BillFrom/BillFrom";
import BillTo from "../BillTo/BillTo";
import actionEditInvoice from "../../store/actions/actionEditInvoice";
import actionToggleDisplay from "../../store/actions/actionToggleDisplay";
import { useNavigate } from "react-router-dom";

const FormEdit = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // przycisk edycji formularza, metoda PUT
  const saveChanges = () => {
    props.actionEditInvoice(
      props.dataValuesFromBillFrom,
      props.dataValuesFromBillTo,
      props.dataValuesSingleItemList,
      props.singleInvoiceID
    );
    navigate("/");
    props.actionToggleDisplay();
  };

  // funkcja do zmiany display edit form
  const handleDisplayEditForm = () => {
    props.actionToggleDisplay();
    dispatch({
      type: "CREATE_OBJ_FROM_VALUE_CLEAR",
    });
    dispatch({
      type: "ADD_ITEM_CLEAR",
    });
  };

  return (
    <div
      className="formEdit-container"
      style={{
        // schowanie/pokazanie formularza edycji
        display: props.toggleDisplayEditForm ? "block" : "none",
      }}
    >
      <h1>Edit Invoice</h1>
      <form>
        <BillFrom />
        <BillTo />
      </form>
      <ItemList />
      <button onClick={handleDisplayEditForm}>Cancel</button>
      <button onClick={saveChanges}>Save Changes</button>
    </div>
  );
};

FormEdit.propTypes = {
  toggleDisplayEditForm: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    toggleDisplayEditForm: state.reducerFormControl.isDisplayEditForm,
    dataValuesFromBillTo: state.reducerBillToValues,
    dataValuesFromBillFrom: state.reducerBillFromValues,
    dataValuesSingleItemList: state.reducerSingleItemListValue,
  };
};

const mapDispatchToProps = {
  actionEditInvoice,
  actionToggleDisplay,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
