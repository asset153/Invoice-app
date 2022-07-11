const initialState = {
  isDisplay: false,
  isDisplayEditForm: false,
};

const reducerFormControl = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_DISPLAY":
      return {
        ...state,
        isDisplay: !state.isDisplay,
      };
    case "TOGGLE_DISPLAY_EDIT_FORM":
      return {
        ...state,
        isDisplayEditForm: !state.isDisplayEditForm,
      };
    default:
      return state;
  }
};

export default reducerFormControl;
