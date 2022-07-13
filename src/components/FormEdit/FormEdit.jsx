/* eslint-disable */

import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ItemList from "../ItemList/ItemList";
import BillFrom from "../BillFrom/BillFrom";
import BillTo from "../BillTo/BillTo";
import actionEditInvoice from "../../store/actions/actionEditInvoice";

const FormEdit = (props) => {
  // przycisk edycji formularza, metoda PUT
  const saveChanges = () => {
    console.log(props.items);
    props.actionEditInvoice(
      props.dataValuesFromBillFrom,
      props.dataValuesFromBillTo,
      props.items,
      props.singleInvoiceID
    );
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

      {/*{props.items?.map((item) => {*/}
      {/*  return (*/}
      {/*    <div*/}
      {/*      key={item.itemID}*/}
      {/*      className="itemList-container__form__singleItem__container--name"*/}
      {/*    >*/}
      {/*      <label>Item Name</label>*/}
      {/*      <input name="itemName" type="text" defaultValue={item.itemName} />*/}
      {/*    </div>*/}
      {/*  );*/}
      {/*})}*/}
      <button>Cancel</button>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
