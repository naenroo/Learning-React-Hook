import React, { useContext, useState, useEffect } from 'react';
import { CrudContainer, Form, List, Button } from '../styles/CrudHookStyle';

import TodosContext from '../context/todo/TodosContext';

import '../styles/CrudHook.css';

const CrudHook = () => {
  const [addTodo, setAddTodo] = useState('');

  const { state } = useContext(TodosContext);

  const {
    state: { updateTodoItem = {} },
    dispatch
  } = useContext(TodosContext);

  useEffect(() => {
    if (updateTodoItem.text) {
      setAddTodo(updateTodoItem.text);
    } else {
      setAddTodo('');
    }

    // eslint-disable-next-line
  }, [updateTodoItem.id]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (updateTodoItem.text) {
      dispatch({
        type: 'UPDATE_TODO',
        payload: addTodo
      });
    } else {
      dispatch({
        type: 'ADD_TODO',
        payload: addTodo
      });
    }

    setAddTodo('');
  };

  return (
    <CrudContainer>
      <h2>
        {state.todos.length > 0
          ? `I have ${state.todos.length} Todos`
          : 'There are no Todo'}
      </h2>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={event => setAddTodo(event.target.value)}
          value={addTodo}
          placeholder="i want to"
        />
        <Button type="submit" disabled={addTodo.length === 0}>
          Add
        </Button>
        <ul style={{ listStyle: 'none', marginLeft: '-35px' }}>
          {state.todos.map(todo => (
            <List key={todo.id}>
              <span
                onClick={() =>
                  dispatch({
                    type: 'TOGGLE_TODO',
                    payload: todo
                  })
                }
                className={todo.complete && 'todo-completed'}
                style={{ cursor: 'pointer' }}
              >
                {todo.text}
              </span>
              <span
                role="img"
                aria-label=""
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  dispatch({
                    type: 'SET_UPDATE_TODO',
                    payload: todo
                  })
                }
              >
                ✏️
              </span>
              <span
                role="img"
                aria-label=""
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_TODO',
                    payload: todo
                  })
                }
                style={{ cursor: 'pointer' }}
              >
                🗑️
              </span>
            </List>
          ))}
        </ul>
      </Form>
    </CrudContainer>
  );
};

export default CrudHook;
