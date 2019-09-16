import {getVisibleTodos} from './VisibleTodoList';

describe('getVisibleTodos filter test', function () {
  const todos = [
    {complete: true},
    {complete: false},
    {complete: true},
  ];

  it('should return all todos', () => {
    const newTodos = getVisibleTodos(todos, 'ALL');
    expect(newTodos).toMatchObject(todos);
  });

  it('should return only completed todos', () => {
    const newTodos = getVisibleTodos(todos, 'COMPLETED');
    const expectedTodos = todos.filter(todo => todo.complete === true);
    expect(newTodos).toMatchObject(expectedTodos);
  });

  it('should return only UNcompleted todos', () => {
    const newTodos = getVisibleTodos(todos, 'UNCOMPLETED');
    const expectedTodos = todos.filter(todo => todo.complete === false);
    expect(newTodos).toMatchObject(expectedTodos);
  });

  it('should return only all todos by default', () => {
    const newTodos = getVisibleTodos(todos, 'FAKEFILTER');
    expect(newTodos).toMatchObject(todos);
  });
});