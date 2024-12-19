import { type Todo, type TodoStatus, todoValidator } from './todo.validators';

export const getTodos = () => {
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  return todoValidator.array().parse(todos);
};

export const updateTodoStatus = (id: number, status: TodoStatus) => {
  const todos = getTodos();
  const updatedTodo = todos.find((todo) => todo.id === id);
  if (!updatedTodo) {
    throw new Error('Todo not found');
  }
  updatedTodo.status = status;
  localStorage.setItem('todos', JSON.stringify(todos));
  return Promise.resolve(updatedTodo);
};

export const createTodo = ({ todo }: { todo: Omit<Todo, 'id'> }) => {
  const todos = getTodos();
  const newTodo = { ...todo, id: new Date().getTime() };
  todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));
  return Promise.resolve(newTodo);
};

export const deleteTodo = (id: number) => {
  const todos = getTodos();
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  return Promise.resolve(updatedTodos);
};
