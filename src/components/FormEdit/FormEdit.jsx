import React from "react";
import { connect } from "react-redux";
import ItemList from "../ItemList/ItemList";
import BillFrom from "../BillFrom/BillFrom";
import BillTo from "../BillTo/BillTo";
import PropTypes from "prop-types";

const FormEdit = (props) => {
  return (
    <div
      className="formEdit-container"
      style={{
        display: props.toggleDisplayEditForm ? "block" : "none",
      }}
    >
      <h1>Edit Invoice</h1>
      <form>
        <BillFrom />
        <BillTo />
      </form>

      <ItemList />
      <button>Cancel</button>
      <button>Save Changes</button>
    </div>
  );
};

FormEdit.propTypes = {
  toggleDisplayEditForm: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    toggleDisplayEditForm: state.reducerFormControl.isDisplayEditForm,
  };
};

export default connect(mapStateToProps)(FormEdit);
