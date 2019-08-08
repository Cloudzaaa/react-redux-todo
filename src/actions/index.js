import {v4} from 'node-uuid';

export const actionTypes = {
  TODO_ADD: 'TODO_ADD',
  TODO_UPD: 'TODO_UPD',
  TODO_DELETE: 'TODO_DELETE',
  TODO_FILTER_SWITCH: 'TODO_FILTER_SWITCH',
  TODO_DELETE_ALL: 'TODO_DELETE_ALL',
};


export const TODO_ADD = (item) => ({
  type: actionTypes.TODO_ADD,
  payload: {
    ...item,
    id: v4(),
    complete: false,
  },
});

export const TODO_UPD = (id) => ({
  type: actionTypes.TODO_UPD,
  payload: id,
});

export const TODO_DELETE = (id) => ({
  type: actionTypes.TODO_DELETE,
  payload: id,
});

export const TODO_FILTER_SWITCH = (value) => ({
  type: actionTypes.TODO_FILTER_SWITCH,
  payload: value,
});

export const TODO_DELETE_ALL = () => ({
  type: actionTypes.TODO_DELETE_ALL,
});