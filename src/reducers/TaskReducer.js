export const taskReducer = (state, action) => {
  if (action.type === TASK_ACTIONS.FETCHING) {
    return {
      tasks: [],
      loading: true,
      error: null,
    };
  }
  if (action.type === TASK_ACTIONS.RESPONSE_COMPLETE) {
    return {
      tasks: action.payload.tasks,
      loading: false,
      error: null,
    };
  }
  if (action.type === TASK_ACTIONS.ADD_TASK) {
    return {
      tasks: [...state.tasks, action.payload.task],
      loading: false,
      error: null,
    };
  }
  if (action.type === TASK_ACTIONS.DELETE_TASK) {
    return {
      tasks: state.tasks.filter((task) => task._id !== action.payload.id),
      loading: false,
      error: null,
    };
  }
  if (action.type === TASK_ACTIONS.ERROR) {
    return {
      tasks: [],
      loading: false,
      error: action.payload.error,
    };
  }
  return state;
};

export const TASK_ACTIONS = {
  FETCHING: "FETCHING",
  RESPONSE_COMPLETE: "RESPONSE_COMPLETE",
  ERROR: "ERROR",
  ADD_TASK: "ADD_TASK",
  EDIT_TASK: "EDIT_TASK",
  DELETE_TASK: "DELETE_TASK",
  TOGGLE_TASK_COMPLETE: "TOGGLE_TASK_COMPLETE",
};

export const initialState = {
  error: null,
  loading: false,
  tasks: [],
};
