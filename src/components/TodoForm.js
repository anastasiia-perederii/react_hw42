import React from 'react';

const TodoForm = ({ inputValue, handleInputChange, handleAddTodo }) => {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter todo..."
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
