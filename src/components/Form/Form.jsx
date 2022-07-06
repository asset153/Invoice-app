import React from "react";
import { connect } from "react-redux";
import ItemList from "../ItemList/ItemList";

const Form = () => {
  return (
    <div className="form-container">
      <h1>New Invoice</h1>
      <form>
        <fieldset className="form-container__form__fieldset--billFrom">
          <legend>Bill From</legend>

          <div>
            <label htmlFor="streetAddressBillFromInput">Street Address</label>
            <br />
            <input id="streetAddressBillFromInput" type="text" />
          </div>

          <div>
            <label htmlFor="cityBillFromInput">City</label>
            <br />
            <input id="cityBillFromInput" type="text" />
          </div>

          <div>
            <label htmlFor="postCodeBillFromInput">Post code</label>
            <br />
            <input id="postCodeBillFromInput" type="text" />
          </div>

          <div>
            <label htmlFor="countryBillFromInput">Country</label>
            <br />
            <input id="countryBillFromInput" type="text" />
          </div>
        </fieldset>

        <fieldset className="form-container__form__fieldset--billTo">
          <legend>Bill To</legend>

          <div>
            <label htmlFor="clientsNameBillToInput">Clients Name</label>
            <br />
            <input id="clientsNameBillToInput" type="text" />
          </div>

          <div>
            <label htmlFor="clientsEmailToInput">Clients Email</label>
            <br />
            <input id="clientsEmailToInput" type="text" />
          </div>

          <div>
            <label htmlFor="streetAddressBillToInput">Street Address</label>
            <br />
            <input id="streetAddressBillToInput" type="text" />
          </div>

          <div>
            <label htmlFor="cityToInput">City</label>
            <br />
            <input id="cityToInput" type="text" />
          </div>

          <div>
            <label htmlFor="postCodeToInput">Post Code</label>
            <br />
            <input id="postCodeToInput" type="text" />
          </div>

          <div>
            <label htmlFor="countryToInput">Country</label>
            <br />
            <input id="countryToInput" type="text" />
          </div>

          <div>
            <label htmlFor="dateToInput">Invoice Date</label>
            <br />
            <input id="dateToInput" type="text" />
          </div>

          <div>
            <label htmlFor="paymentTermsToInput">Payment Terms</label>
            <br />
            <input id="paymentTermsToInput" type="text" />
          </div>

          <div>
            <label htmlFor="projectDescriptionToInput">
              Project Description
            </label>
            <br />
            <input id="projectDescriptionToInput" type="text" />
          </div>
        </fieldset>
      </form>

      <ItemList />
    </div>
  );
};

export default connect()(Form);
