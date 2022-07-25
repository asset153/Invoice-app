/* eslint-disable */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { jsPDF } from "jspdf";
import actionDeleteInvoice from "../../store/actions/actionDeleteInvoice";
import actionToggleDisplay from "../../store/actions/actionToggleDisplay";
import actionMarksAsPaid from "../../store/actions/actionMarksAsPaid";
import FormEdit from "../FormEdit/FormEdit";
import SingleItemList from "../SingleItemList/SingleItemList";
const SingleInvoiceInformation = (props) => {
  // dane przekazane przez pojedynczy link
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickGoBack = () => {
    // przejdź do strony głównej
    navigate("/");
  };

  const deleteInvoice = () => {
    // przejdź do strony głównej
    navigate("/");
    // usuń fakturę
    props.actionDeleteInvoice(location.state.id);
  };

  const editInvoice = () => {
    props.actionToggleDisplay();
    // zmiana wartości z formularza bill from
    dispatch({
      type: "CHANGE_VALUES_BILL_FROM_EDIT",
      payload: {
        billFromStreetAddress: location.state.billFromStreetAddress,
        billFromCity: location.state.billFromCity,
        billFromPostCode: location.state.billFromPostCode,
        billFromCountry: location.state.billFromCountry,
      },
    });
    // zmiana wartości z formularza bill to
    dispatch({
      type: "CHANGE_VALUES_BILL_TO_EDIT",
      payload: {
        billToClientsName: location.state.billToClientsName,
        billToClientsEmail: location.state.billToClientsEmail,
        billToStreetAddress: location.state.billToStreetAddress,
        billToCity: location.state.billToCity,
        billToPostCode: location.state.billToPostCode,
        billToCountry: location.state.billToCountry,
        billToDate: location.state.billToDate,
        billToPaymentTerms: location.state.billToPaymentTerms,
        billToProjectDescription: location.state.billToProjectDescription,
      },
    });

    dispatch({
      type: "CREATE_VALUE_TO_OBJECT_EDIT",
    });

    dispatch({
      type: "CREATE_OBJ_FROM_VALUE_EDIT",
      payload: location.state.items,
    });

    dispatch({
      type: "ADD_ITEM_EDIT",
      payload: location.state.items.map((item) => (
        <SingleItemList key={item.itemID} itemUniqueID={item.itemID} />
      )),
    });
  };

  // zmiana statusu formularza
  const marksAsPaid = () => {
    (location.state.status === "Pending" ||
      location.state.status === "Draft") &&
      navigate("/");
    props.actionMarksAsPaid(location.state, location.state.id);
  };

  const makePDF = () => {
    const doc = new jsPDF();

    console.log(doc);
  };

  // zmiana nazwy klasy przez zmianę statusu faktury
  let statusClass;
  if (location.state.status === "Paid") {
    statusClass = "paid";
  } else if (location.state.status === "Draft") {
    statusClass = "draft";
  } else {
    statusClass = "pending";
  }

  return (
    <>
      <FormEdit
        singleInvoiceID={location.state.id}
        items={location.state.items}
      />
      <div className="singleInvInfo-container">
        <div className="singleInvInfo-container__go-back">
          <button onClick={handleClickGoBack}>
            <img
              src="../../../src/assets/icon-arrow-left.svg"
              alt="arrow left"
            />
            Go back
          </button>
        </div>

        <div className="singleInvInfo-container__statusAndButtons">
          <div className="singleInvInfo-container__statusAndButtons__status">
            <p>Status</p>
            <span className={statusClass}>{location.state.status}</span>
          </div>

          <div className="singleInvInfo-container__statusAndButtons__buttons">
            <button
              className="singleInvInfo-container__statusAndButtons__buttons--makePDF"
              onClick={makePDF}
            >
              MAKE PDF
            </button>
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
            <button
              onClick={marksAsPaid}
              className="singleInvInfo-container__statusAndButtons__buttons--marksAsPaid"
            >
              MARKS AS PAID
            </button>
          </div>
        </div>

        <div className="singleInvInfo-container__information">
          <div className="singleInvInfo-container__information--id-description">
            <span className="id">
              <span>#</span>
              {location.state.id}
            </span>
            <span className="description">
              {location.state.billToProjectDescription}
            </span>
          </div>
          <div className="singleInvInfo-container__information--billFrom">
            <span className="billFrom-address">
              {location.state.billFromStreetAddress}
            </span>
            <span className="billFrom-city">{location.state.billFromCity}</span>
            <span className="billFrom-post-code">
              {location.state.billFromPostCode}
            </span>
            <span className="billFrom-country">
              {location.state.billFromCountry}
            </span>
          </div>
          <div className="singleInvInfo-container__information--date">
            <span className="invoice-date">Invoice Date</span>
            <span className="date">{location.state.billToDate}</span>
          </div>
          <div className="singleInvInfo-container__information--billTo">
            <span className="billTo">Bill To</span>
            <span className="billTo-name">
              {location.state.billToClientsName}
            </span>
            <span className="billTo-address">
              {location.state.billToStreetAddress}
            </span>
            <span className="billTo-city">{location.state.billToCity}</span>
            <span className="billTo-post-code">
              {location.state.billToPostCode}
            </span>
            <span className="billTo-country">
              {location.state.billToCountry}
            </span>
          </div>
          <div className="singleInvInfo-container__information--payment">
            <span className="payment-due">Payment Due</span>
            <span className="payment-date">
              {location.state.billToPaymentTerms}
            </span>
          </div>
          <div className="singleInvInfo-container__information--email">
            <span className="sentTo">Sent to</span>
            <span className="email">{location.state.billToClientsEmail}</span>
          </div>

          <div className="singleInvInfo-container__information__items">
            <div className="singleInvInfo-container__information__items--titleForTabletDesign">
              <span>Item Name</span>
              <span>QTY.</span>
              <span>Price</span>
              <span>Total</span>
            </div>

            {location.state.items?.map((item) => {
              return (
                <div
                  key={item.itemID}
                  className="singleInvInfo-container__information__items--item"
                >
                  <div className="singleInvInfo-container__information__items--item__name-qty">
                    <span>{item.itemName}</span>
                    <div>
                      <span>{item.itemQty} x </span>
                      <span>$ {item.itemPrice}</span>
                    </div>
                  </div>
                  <span>$ {item.itemQty * item.itemPrice}</span>
                </div>
              );
            })}

            <div className="singleInvInfo-container__information__items--grandTotal">
              <span className="grandTotal--name">Grand Total</span>
              <span className="grandTotal--sum">
                ${" "}
                {location.state.items.length <= 1
                  ? location.state.items.map((item) => item.itemTotal)
                  : location.state.items.reduce((prev, curr) => {
                      return prev.itemTotal + curr.itemTotal;
                    })}
              </span>
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
  actionMarksAsPaid,
};

// const mapStateToProps = (state) => {
//   return {
//     itemsDATA: state.reducerSingleItemList,
//   };
// };

export default connect(null, mapDispatchToProps)(SingleInvoiceInformation);
