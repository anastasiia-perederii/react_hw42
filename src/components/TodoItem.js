import React from 'react';

const TodoItem = ({ todo, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => handleToggleTodo(todo.id)}
            >
                {todo.text}
            </span>
      <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
