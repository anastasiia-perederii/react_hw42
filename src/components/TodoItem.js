import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAsync } from '../store/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodoAsync(todo.id));
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      {todo.title}
      <button onClick={handleDelete}>Видалити</button>
    </li>
  );
};

export default TodoItem;
