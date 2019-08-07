import React from 'react';
import {TODO_DELETE, TODO_UPD} from '../../actions/actions';
import {connect} from 'react-redux';
import TodoList from '../../components/TodoList/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'ALL': return todos;
    case 'COMPLETED': return todos.filter(todo => !todo.complete);
    case 'UNCOMPLETED': return todos.filter(todo => todo.complete);
  }
};

const mapStateToProps = ({todos, filter}) => {
  return {
    todos: getVisibleTodos(todos, filter),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    TODO_UPD: (id) => {
      dispatch(TODO_UPD(id))
    },
    TODO_DELETE: (id) => {
      dispatch(TODO_DELETE(id))
    },
  }
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default VisibleTodoList;