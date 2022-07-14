import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ItemList from "../ItemList/ItemList";
import BillFrom from "../BillFrom/BillFrom";
import BillTo from "../BillTo/BillTo";
import SaveAndSend from "../SaveAndSend/SaveAndSend";

const Form = (props) => {
  return (
    <div
      className="form-container"
      style={{
        display: props.toggleDisplay ? "flex" : "none",
      }}
    >
      <h1>New Invoice</h1>
      <form>
        <BillFrom />
        <BillTo />
      </form>

      <ItemList />
      <SaveAndSend />
    </div>
  );
};

Form.propTypes = {
  toggleDisplay: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    toggleDisplay: state.reducerFormControl.isDisplay,
  };
};

export default connect(mapStateToProps)(Form);
