import React from "react";
import { useEffect, useState, useId } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SingleItemList = ({ itemID, items }) => {
  const [valueOfItem, setValueOfItem] = useState({
    itemName: "",
    itemQty: "",
    itemPrice: "",
    itemTotal: "",
  });
  const ID = useId();
  const { itemName, itemQty, itemPrice, itemTotal } = valueOfItem;

  const handleChangeInputValue = (e) =>
    setValueOfItem((prevState) => {
      const { name, value } = e.target;
      return {
        ...prevState,
        [name]: value,
      };
    });

  useEffect(() => {
    setValueOfItem((prevState) => {
      return {
        ...prevState,
        itemTotal: prevState.itemQty * prevState.itemPrice,
      };
    });
  }, [itemQty, itemPrice]);

  const handleClickRemoveItem = (e) => {
    e.preventDefault();
    console.log("itemID", itemID);
    console.log("items", items);
    // const filteredArray = items.filter((item) => {
    //   return item.key === itemID;
    // });
    // console.log("filteredArray", filteredArray);
  };

  return (
    <div className="itemList-container__form__singleItem">
      <div>
        <label htmlFor={`${ID}itemName`}>Item Name</label>
        <input
          onChange={handleChangeInputValue}
          value={itemName}
          name="itemName"
          id={`${ID}itemName`}
          type="text"
        />
      </div>
      <div>
        <label htmlFor={`${ID}itemQty`}>Qty.</label>
        <input
          onChange={handleChangeInputValue}
          value={itemQty}
          name="itemQty"
          id={`${ID}itemQty`}
          type="text"
        />
      </div>
      <div>
        <label htmlFor={`${ID}itemPrice`}>Price</label>
        <input
          onChange={handleChangeInputValue}
          value={itemPrice}
          name="itemPrice"
          id={`${ID}itemPrice`}
          type="text"
        />
      </div>
      <div>
        <label htmlFor={`${ID}itemTotal`}>Total</label>
        <input
          onChange={handleChangeInputValue}
          value={itemTotal}
          name="itemTotal"
          id={`${ID}itemTotal`}
          type="text"
        />
      </div>
      <button onClick={handleClickRemoveItem}>TRASH</button>
    </div>
  );
};

SingleItemList.propTypes = {
  itemID: PropTypes.string,
  items: PropTypes.array,
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    items: state,
  };
};

export default connect(mapStateToProps)(SingleItemList);
