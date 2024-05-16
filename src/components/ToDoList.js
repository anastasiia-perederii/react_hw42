import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../store/todoSlice';
import TodoItem from './TodoItem';

const ToDoList = () => {
  const dispatch = useDispatch();
  const { loading, todos, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const limitedTodos = todos.slice(0, 10); // Ліміт на 10 завдань

  return (
    <div className="todo-list">
      {loading && <p>Завантаження...</p>}
      {error && <p>Помилка: {error}</p>}
      <ul>
        {limitedTodos.map((todo) => (
          <TodoItem key={todo.uniqueId} todo={todo} /> // Використання унікального ключа
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
