import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <div className="App">
      <h1>Список завдань</h1>
      <TodoForm />
      <ToDoList />
    </div>
  );
};

export default App;
