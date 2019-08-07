import {actionTypes} from '../actions/actions';

const initialState = {
  todos: [],
};

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_ADD :
      return {
        todos: [...state.todos, action.payload],
      };

    case actionTypes.TODO_UPD :
      return {
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
        todos:
          state.todos.filter(({id}) => id !== action.payload),
      };
    default:
      return state
  }
};

export default todoApp;