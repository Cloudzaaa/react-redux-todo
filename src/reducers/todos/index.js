import {actionTypes} from '../../actions';

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_ADD :
      return [...state, action.payload];

    case actionTypes.TODO_UPD :
      return state.map(todo => {
        if(todo.id === action.payload) {
          return {...todo, complete: !todo.complete}
        } else {
          return todo
        }
      });

    case actionTypes.TODO_DELETE :
      return state.filter(({id}) => id !== action.payload);

    case actionTypes.TODO_DELETE_ALL :
      return [];

    default:
      return state
  }
};

export default todos;
