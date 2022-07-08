import React from "react";
import { connect } from "react-redux";
import ItemList from "../ItemList/ItemList";
import BillFrom from "../BillFrom/BillFrom";
import BillTo from "../BillTo/BillTo";

const Form = () => {
  return (
    <div className="form-container">
      <h1>New Invoice</h1>
      <form>
        <BillFrom />
        <BillTo />
      </form>

      <ItemList />
    </div>
  );
};

export default connect()(Form);
