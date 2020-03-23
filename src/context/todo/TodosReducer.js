import uuid from 'uuid/v4';

export default function reducer(state, action) {
  switch (action.type) {
    case 'GET_TODO':
      return {
        ...state,
        todos: action.payload
      };
    case 'ADD_TODO':
      const todoNew = {
        id: uuid(),
        text: action.payload,
        completed: false
      };

      const addingTodo = [...state.todos, todoNew];
      return {
        ...state,
        todos: addingTodo
      };
    case 'SET_UPDATE_TODO':
      return {
        ...state,
        updateTodoItem: action.payload
      };
    case 'TOGGLE_TODO':
      const toggledTodos = state.todos.map(item =>
        item.id === action.payload.id
          ? { ...action.payload, complete: !action.payload.complete }
          : item
      );
      return {
        ...state,
        todos: toggledTodos
      };
    case 'UPDATE_TODO':
      const updateTodo = { ...state.updateTodoItem, text: action.payload };
      const updateTodoIndex = state.todos.findIndex(
        item => item.id === state.updateTodoItem.id
      );
      const updatedTodos = [
        ...state.todos.slice(0, updateTodoIndex),
        updateTodo,
        ...state.todos.slice(updateTodoIndex + 1)
      ];
      return {
        ...state,
        updateTodoItem: {},
        todos: updatedTodos
      };
    case 'REMOVE_TODO':
      const removeTodo = state.todos.filter(
        item => item.id !== action.payload.id
      );
      const removeTodoItem =
        state.updateTodoItem.id === action.payload.id
          ? {}
          : state.updateTodoItem;
      return {
        ...state,
        updateTodoItem: removeTodoItem,
        todos: removeTodo
      };
    default:
      return state;
  }
}
