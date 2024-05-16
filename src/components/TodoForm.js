import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../store/todoSlice';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoAsync(title));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Додати нове завдання"
      />
      <button type="submit">Додати</button>
    </form>
  );
};

export default TodoForm;
