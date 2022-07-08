import React from "react";
import { useEffect, useState, useId } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const SingleItemList = (props) => {
  const [valueOfItem, setValueOfItem] = useState({
    itemName: "",
    itemQty: "",
    itemPrice: "",
    itemTotal: "",
  });
  const ID = useId();
  const { itemName, itemQty, itemPrice, itemTotal } = valueOfItem;

  const handleChangeInputValue = (e) => {
    setValueOfItem((prevState) => {
      const { name, value } = e.target;
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    setValueOfItem((prevState) => {
      return {
        ...prevState,
        itemTotal: prevState.itemQty * prevState.itemPrice,
      };
    });
  }, [itemQty, itemPrice]);

  useEffect(() => {
    props.dispatch({
      type: "CREATE_VALUE_TO_OBJECT",
      payload: { valueOfItem: valueOfItem, itemUniqueID: props.itemUniqueID },
    });
  }, [valueOfItem]);

  const handleClickRemoveItem = (e) => {
    e.preventDefault();
    props.dispatch({
      type: "REMOVE_ITEM",
      payload: props.itemUniqueID,
    });
    props.dispatch({
      type: "REMOVE_SINGLE_OBJECT_WITH_VALUE",
      payload: props.itemUniqueID,
    });
  };

  return (
    <div className="itemList-container__form__singleItem">
      <div className="itemList-container__form__singleItem__container--name">
        <label htmlFor={`${ID}itemName`}>Item Name</label>
        <input
          onChange={handleChangeInputValue}
          value={itemName}
          name="itemName"
          id={`${ID}itemName`}
          type="text"
        />
      </div>

      <div className="itemList-container__form__singleItem__container--qty">
        <label htmlFor={`${ID}itemQty`}>Qty.</label>
        <input
          onChange={handleChangeInputValue}
          value={itemQty}
          name="itemQty"
          id={`${ID}itemQty`}
          type="text"
        />
      </div>

      <div className="itemList-container__form__singleItem__container--price">
        <label htmlFor={`${ID}itemPrice`}>Price</label>
        <input
          onChange={handleChangeInputValue}
          value={itemPrice}
          name="itemPrice"
          id={`${ID}itemPrice`}
          type="text"
        />
      </div>

      <div className="itemList-container__form__singleItem__container--total">
        <label htmlFor={`${ID}itemTotal`}>Total</label>
        <input
          disabled={true}
          onChange={handleChangeInputValue}
          value={itemTotal}
          name="itemTotal"
          id={`${ID}itemTotal`}
          type="text"
        />
      </div>

      <FontAwesomeIcon
        className="itemList-container__form__singleItem__container--icon-trash"
        onClick={handleClickRemoveItem}
        icon={faTrash}
      />
    </div>
  );
};

SingleItemList.propTypes = {
  dispatch: PropTypes.func,
  itemUniqueID: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  return {
    itemDATA: state.reducerSingleItemList,
    itemUniqueID: ownProps.itemUniqueID,
  };
};

export default connect(mapStateToProps)(SingleItemList);
