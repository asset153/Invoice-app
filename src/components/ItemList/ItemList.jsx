import React, { useState, useId } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import randomNumber from "../../utils/randomNumber";
import SingleItemList from "../SingleItemList/SingleItemList";

const ItemList = (props) => {
  const ID = useId();
  const [newItem, setNewItem] = useState([]);

  const handleClickAddNewItem = () => {
    setNewItem((prevState) => [
      ...prevState,
      <SingleItemList
        key={`${ID}${randomNumber()}`}
        itemID={`${ID}${randomNumber()}`}
      />,
    ]);
    props.dispatch({
      type: "ITEM_LIST",
      payload: (
        <SingleItemList
          key={`${ID}${randomNumber()}`}
          itemID={`${ID}${randomNumber()}`}
        />
      ),
    });
  };

  return (
    <div className="itemList-container">
      <h2>Item List</h2>
      <button onClick={handleClickAddNewItem}>+ Add New Item</button>
      <form className="itemList-container__form">
        {newItem.map((item) => item)}
      </form>
    </div>
  );
};

ItemList.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(ItemList);
