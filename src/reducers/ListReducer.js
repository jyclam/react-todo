import { useReducer } from "react";
import isFunction from "lodash/isFunction";

import axios from "../utils/axios";

export const LIST_ACTIONS = {
  FETCHING: "FETCHING",
  RESPONSE_COMPLETE: "RESPONSE_COMPLETE",
  ERROR: "ERROR",
  TOGGLE_PIN: "TOGGLE_PIN",
  ADD_LIST: "ADD_LIST",
  DELETE_LIST: "DELETE_LIST",

  LIST_DELETE: "LIST_DELETE",
  LIST_PIN: "LIST_PIN",
  LIST_UNPIN: "LIST_UNPIN",
  LIST_ARCHIVE: "LIST_ARCHIVE",
  LIST_EDIT: "LIST_EDIT",
};

export const listReducer = (state, action) => {
  if (action.type === LIST_ACTIONS.FETCHING) {
    return {
      lists: state.lists,
      loading: true,
      error: null,
    };
  }
  if (action.type === LIST_ACTIONS.RESPONSE_COMPLETE) {
    return {
      lists: action.payload.lists,
      loading: false,
      error: null,
    };
  }
  if (action.type === LIST_ACTIONS.ADD_LIST) {
    return {
      lists: [...state.lists, action.payload.list],
      loading: false,
      error: null,
    };
  }
  if (action.type === LIST_ACTIONS.DELETE_LIST) {
    return {
      lists: state.lists.filter((list) => list._id !== action.payload.id),
      loading: false,
      error: null,
    };
  }
  if (action.type === LIST_ACTIONS.ERROR) {
    return {
      lists: [],
      loading: false,
      error: action.payload.error,
    };
  }
  return state;
};

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

export const fetchLists = (dispatch) => {
  dispatch({ type: LIST_ACTIONS.FETCHING });

  axios
    .get("/api/list")
    .then(({ data }) => {
      dispatch({
        type: LIST_ACTIONS.RESPONSE_COMPLETE,
        payload: { lists: data.data },
      });
    })
    .catch((error) =>
      dispatch({ type: LIST_ACTIONS.ERROR, payload: { error } }),
    );
};

export const initialState = {
  error: null,
  loading: false,
  lists: [],
};
