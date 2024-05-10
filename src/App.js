import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './store/todoSlice';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import './App.css'

function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setInputValue('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggleTodo={handleToggleTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
      <TodoForm
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleAddTodo={handleAddTodo}
      />
    </div>
  );
}

export default App;
