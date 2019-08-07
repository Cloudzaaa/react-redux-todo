import {actionTypes} from '../actions/actions';

const initialState = {
  todos: [],
  filter: 'ALL',
};

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_ADD :
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case actionTypes.TODO_UPD :
      return {
        ...state,
        todos:
          state.todos.map(todo => {
            if(todo.id === action.payload) {
              return {...todo, complete: !todo.complete}
            } else {
              return todo
            }
          }),
      };

    case actionTypes.TODO_DELETE :
      return {
        ...state,
        todos: state.todos.filter(({id}) => id !== action.payload),
      };

    case actionTypes.TODO_FILTER_SWITCH :
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state
  }
};

export default todoApp;