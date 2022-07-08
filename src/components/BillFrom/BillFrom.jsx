import React, { useId } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const BillFrom = (props) => {
  const ID = useId();

  const handleChangeValues = (e) => {
    props.dispatch({
      type: "CHANGE_VALUES_BILL_FROM",
      payload: e.target,
    });
  };

  return (
    <fieldset className="fieldset--billFrom">
      <legend>Bill From</legend>

      <div>
        <label htmlFor={`${ID}streetAddress`}>Street Address</label>
        <br />
        <input
          name="billFromStreetAddress"
          onChange={handleChangeValues}
          value={props.value.billFromStreetAddress}
          id={`${ID}streetAddress`}
          type="text"
        />
      </div>

      <div>
        <label htmlFor={`${ID}city`}>City</label>
        <br />
        <input
          name="billFromCity"
          onChange={handleChangeValues}
          value={props.value.billFromCity}
          id={`${ID}city`}
          type="text"
        />
      </div>

      <div>
        <label htmlFor={`${ID}postCode`}>Post code</label>
        <br />
        <input
          name="billFromPostCode"
          onChange={handleChangeValues}
          value={props.value.billFromPostCode}
          id={`${ID}postCode`}
          type="text"
        />
      </div>

      <div>
        <label htmlFor={`${ID}country`}>Country</label>
        <br />
        <input
          name="billFromCountry"
          onChange={handleChangeValues}
          value={props.value.billFromCountry}
          id={`${ID}country`}
          type="text"
        />
      </div>
    </fieldset>
  );
};

BillFrom.propTypes = {
  dispatch: PropTypes.func,
  value: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    value: state.reducerBillFromValues,
  };
};

export default connect(mapStateToProps)(BillFrom);
