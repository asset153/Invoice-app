import React, { useId } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const BillTo = (props) => {
  const ID = useId();

  const handleChangeValues = (e) => {
    props.dispatch({
      type: "CHANGE_VALUES_BILL_TO",
      payload: e.target,
    });
  };

  return (
    <fieldset className="fieldset--billTo">
      <legend>Bill To</legend>

      <div>
        <label htmlFor={`${ID}clientsName`}>Clients Name</label>
        <br />
        <input
          onChange={handleChangeValues}
          value={props.value.billToClientsName}
          name="billToClientsName"
          id={`${ID}clientsName`}
          type="text"
        />
      </div>

      <div>
        <label htmlFor={`${ID}clientsEmail`}>Clients Email</label>
        <br />
        <input
          onChange={handleChangeValues}
          value={props.value.billToClientsEmail}
          name="billToClientsEmail"
          id={`${ID}clientsEmail`}
          type="text"
        />
      </div>

      <div>
        <label htmlFor={`${ID}streetAddress`}>Street Address</label>
        <br />
        <input
          onChange={handleChangeValues}
          value={props.value.billToStreetAddress}
          name="billToStreetAddress"
          id={`${ID}streetAddress`}
          type="text"
        />
      </div>

      <div>
        <label htmlFor={`${ID}city`}>City</label>
        <br />
        <input
          onChange={handleChangeValues}
          value={props.value.billToCity}
          name="billToCity"
          id={`${ID}city`}
          type="text"
        />
      </div>

      <div>
        <label htmlFor={`${ID}postCode`}>Post Code</label>
        <br />
        <input
          onChange={handleChangeValues}
          value={props.value.billToPostCode}
          name="billToPostCode"
          id={`${ID}postCode`}
          type="text"
        />
      </div>

      <div>
        <label htmlFor={`${ID}country`}>Country</label>
        <br />
        <input
          onChange={handleChangeValues}
          value={props.value.billToCountry}
          name="billToCountry"
          id={`${ID}country`}
          type="text"
        />
      </div>

      <div>
        <label htmlFor={`${ID}date`}>Invoice Date</label>
        <br />
        <input
          onChange={handleChangeValues}
          value={props.value.billToDate}
          name="billToDate"
          id={`${ID}date`}
          type="date"
        />
      </div>

      <div>
        <label htmlFor={`${ID}paymentTerms`}>Payment Terms</label>
        <br />
        <input
          onChange={handleChangeValues}
          value={props.value.billToPaymentTerms}
          name="billToPaymentTerms"
          id={`${ID}paymentTerms`}
          type="text"
        />
      </div>

      <div>
        <label htmlFor={`${ID}projectDescription`}>Project Description</label>
        <br />
        <input
          onChange={handleChangeValues}
          value={props.value.billToProjectDescription}
          name="billToProjectDescription"
          id={`${ID}projectDescription`}
          type="text"
        />
      </div>
    </fieldset>
  );
};

BillTo.propTypes = {
  dispatch: PropTypes.func,
  value: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    value: state.reducerBillToValues,
  };
};

export default connect(mapStateToProps)(BillTo);
