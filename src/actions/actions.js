export const actionTypes = {
  TODO_ADD: 'TODO_ADD',
  TODO_UPD: 'TODO_UPD',
  TODO_DELETE: 'TODO_DELETE',
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