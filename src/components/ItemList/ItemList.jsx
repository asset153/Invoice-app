import React, { useId } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import randomNumber from "../../utils/randomNumber";
import SingleItemList from "../SingleItemList/SingleItemList";

const ItemList = (props) => {
  const ID = useId();

  const handleClickAddItem = () => {
    const uniqueID = `${ID}${randomNumber()}`;
    props.dispatch({
      type: "ADD_ITEM",
      payload: <SingleItemList key={uniqueID} itemUniqueID={uniqueID} />,
    });
  };

  return (
    <div className="itemList-container">
      <h2>Item List</h2>
      <button onClick={handleClickAddItem}>+ Add New Item</button>
      <form className="itemList-container__form">
        {props.itemDATA.map((item) => item)}
      </form>
    </div>
  );
};

ItemList.propTypes = {
  itemDATA: PropTypes.array,
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    itemDATA: state.reducerSingleItemList,
  };
};

export default connect(mapStateToProps)(ItemList);
