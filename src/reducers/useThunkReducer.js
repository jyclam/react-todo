import { useReducer } from "react";
import isFunction from "lodash/isFunction";

export const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const enhancedDispatch = (action) => {
    if (isFunction(action)) {
      action(dispatch);
    } else {
      dispatch(action);
    }
  };
  return [state, enhancedDispatch];
};
