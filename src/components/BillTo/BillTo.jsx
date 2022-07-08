import React, { useId } from "react";

const BillTo = () => {
  const ID = useId();
  return (
    <fieldset className="fieldset--billTo">
      <legend>Bill To</legend>

      <div>
        <label htmlFor={`${ID}clientsName`}>Clients Name</label>
        <br />
        <input id={`${ID}clientsName`} type="text" />
      </div>

      <div>
        <label htmlFor={`${ID}clientsEmail`}>Clients Email</label>
        <br />
        <input id={`${ID}clientsEmail`} type="text" />
      </div>

      <div>
        <label htmlFor={`${ID}streetAddress`}>Street Address</label>
        <br />
        <input id={`${ID}streetAddress`} type="text" />
      </div>

      <div>
        <label htmlFor={`${ID}city`}>City</label>
        <br />
        <input id={`${ID}city`} type="text" />
      </div>

      <div>
        <label htmlFor={`${ID}postCode`}>Post Code</label>
        <br />
        <input id={`${ID}postCode`} type="text" />
      </div>

      <div>
        <label htmlFor={`${ID}country`}>Country</label>
        <br />
        <input id={`${ID}country`} type="text" />
      </div>

      <div>
        <label htmlFor={`${ID}date`}>Invoice Date</label>
        <br />
        <input id={`${ID}date`} type="text" />
      </div>

      <div>
        <label htmlFor={`${ID}paymentTerms`}>Payment Terms</label>
        <br />
        <input id={`${ID}paymentTerms`} type="text" />
      </div>

      <div>
        <label htmlFor={`${ID}projectDescription`}>Project Description</label>
        <br />
        <input id={`${ID}projectDescription`} type="text" />
      </div>
    </fieldset>
  );
};

export default BillTo;
