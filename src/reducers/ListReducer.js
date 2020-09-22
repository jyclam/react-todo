import axios from "../utils/axios";

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
  if (action.type === LIST_ACTIONS.EDIT_LIST) {
    return {
      lists: state.lists.map((list) =>
        list._id === action.payload.list._id ? action.payload.list : list,
      ),
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

const fetchLists = (dispatch) => {
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

export const LIST_ACTIONS = {
  FETCHING: "FETCHING",
  RESPONSE_COMPLETE: "RESPONSE_COMPLETE",
  ERROR: "ERROR",
  TOGGLE_PIN: "TOGGLE_PIN",
  ADD_LIST: "ADD_LIST",
  EDIT_LIST: "EDIT_LIST",
  DELETE_LIST: "DELETE_LIST",
  FETCH_LIST: fetchLists,

  // ARCHIVE_LIST
};

export const initialState = {
  error: null,
  loading: false,
  lists: [],
};
