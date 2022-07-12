/* eslint-disable */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import actionDeleteInvoice from "../../store/actions/actionDeleteInvoice";
import actionToggleDisplay from "../../store/actions/actionToggleDisplay";
import FormEdit from "../FormEdit/FormEdit";
const SingleInvoiceInformation = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteInvoice = () => {
    navigate("/");
    props.actionDeleteInvoice(location.state.id);
  };

  const editInvoice = () => {
    console.log("location", location);
    props.actionToggleDisplay();
    dispatch({
      type: "CHANGE_VALUES_BILL_FROM_EDIT",
      payload: {
        billFromStreetAddress: location.state.billFromStreetAddress,
        billFromCity: location.state.billFromCity,
        billFromPostCode: location.state.billFromPostCode,
        billFromCountry: location.state.billFromCountry,
      },
    });
  };

  return (
    <>
      <FormEdit />
      <div className="singleInvInfo-container">
        <div className="singleInvInfo-container__go-back">
          <button>Go back</button>
        </div>

        <div className="singleInvInfo-container__statusAndButtons">
          <div className="singleInvInfo-container__statusAndButtons__status">
            <p>Status</p>
            <span>Pending</span>
          </div>

          <div className="singleInvInfo-container__statusAndButtons__buttons">
            <button
              className="singleInvInfo-container__statusAndButtons__buttons--edit"
              onClick={editInvoice}
            >
              EDIT
            </button>
            <button
              className="singleInvInfo-container__statusAndButtons__buttons--delete"
              onClick={deleteInvoice}
            >
              DELETE
            </button>
            <button className="singleInvInfo-container__statusAndButtons__buttons--marksAsPaid">
              MARKS AS PAID
            </button>
          </div>
        </div>

        <div className="singleInvInfo-container__information">
          <div className="singleInvInfo-container__information--id-description">
            <span className="id">#XM9141</span>
            <span className="description">Graphic Design</span>
          </div>
          <div className="singleInvInfo-container__information--billFrom">
            <span className="billFrom-address">19 Union Terrace</span>
            <span className="billFrom-city">London</span>
            <span className="billFrom-post-code">E1 3EZ</span>
            <span className="billFrom-country">United Kingdom</span>
          </div>
          <div className="singleInvInfo-container__information--date">
            <span className="invoice-date">Invoice Date</span>
            <span className="date">21 Aug 2021</span>
          </div>
          <div className="singleInvInfo-container__information--billTo">
            <span className="billTo">Bill To</span>
            <span className="billTo-name">Alex Grim</span>
            <span className="billTo-address">84 Church Way</span>
            <span className="billTo-city">Bradford</span>
            <span className="billTo-post-code">BD19PB</span>
            <span className="billTo-country">United Kingdom</span>
          </div>
          <div className="singleInvInfo-container__information--payment">
            <span className="payment-due">Payment Due</span>
            <span className="payment-date">20 Sep 2021</span>
          </div>
          <div className="singleInvInfo-container__information--email">
            <span className="sentTo">Sent to</span>
            <span className="email">alexgrim@mail.com</span>
          </div>

          <div className="singleInvInfo-container__information__items">
            <div className="singleInvInfo-container__information__items--titleForTabletDesign">
              <span>Item Name</span>
              <span>QTY.</span>
              <span>Price</span>
              <span>Total</span>
            </div>
            <div className="singleInvInfo-container__information__items--item">
              <div className="singleInvInfo-container__information__items--item__name-qty">
                <span>Banner Design</span>
                <div>
                  <span>1x </span>
                  <span>$ 156.00</span>
                </div>
              </div>
              <span>$ 156.00</span>
            </div>

            <div className="singleInvInfo-container__information__items--item">
              <div className="singleInvInfo-container__information__items--item__name-qty">
                <span>Email Design</span>
                <div>
                  <span>2x </span>
                  <span>$ 200.00</span>
                </div>
              </div>
              <span>$ 400.00</span>
            </div>

            <div className="singleInvInfo-container__information__items--grandTotal">
              <span className="grandTotal--name">Grand Total</span>
              <span className="grandTotal--sum">$ 556.00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  actionDeleteInvoice,
  actionToggleDisplay,
};

export default connect(null, mapDispatchToProps)(SingleInvoiceInformation);
