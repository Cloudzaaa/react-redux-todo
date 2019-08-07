export const actionTypes = {
  TODO_ADD: 'TODO_ADD',
  TODO_UPD: 'TODO_UPD',
  TODO_DELETE: 'TODO_DELETE',
  TODO_FILTER_SWITCH: 'TODO_FILTER_SWITCH',
};

let todoID = 0;

export const TODO_ADD = (item) => ({
  type: actionTypes.TODO_ADD,
  payload: {
    ...item,
    id: todoID++,
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