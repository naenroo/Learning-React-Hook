import { createContext } from 'react';

const TodosContext = createContext({
  todos: [],
  updateTodoItem: {}
});

export default TodosContext;
