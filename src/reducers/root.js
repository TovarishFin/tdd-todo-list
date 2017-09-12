import types from '../constants';

export const initialState = {
  todos: [],
  deleted: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => (
            todo.id !== action.id
          )),
        ],
        deleted: [
          ...state.deleted,
          ...state.todos.filter(todo => (
            todo.id === action.id
          )),
        ],
      };
    case types.RESTORE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          state.deleted[state.deleted.length - 1],
        ],
        deleted: [
          ...state.deleted.slice(0, -1),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
