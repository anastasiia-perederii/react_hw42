import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    loading: false,
    todos: [],
    error: '',
  },
  reducers: {
    fetchTodosRequest: (state) => {
      state.loading = true;
    },
    fetchTodosSuccess: (state, action) => {
      state.loading = false;
      state.todos = action.payload.map(todo => ({
        ...todo,
        uniqueId: `${todo.id}-${Date.now()}-${Math.random()}`
      }));
      state.error = '';
    },
    fetchTodosFailure: (state, action) => {
      state.loading = false;
      state.todos = [];
      state.error = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.unshift({
        ...action.payload,
        uniqueId: `${action.payload.id}-${Date.now()}-${Math.random()}`
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodo,
  deleteTodo
} = todoSlice.actions;

export const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosRequest());
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    dispatch(fetchTodosSuccess(data));
  } catch (error) {
    dispatch(fetchTodosFailure(error.message));
  }
};

export const addTodoAsync = (title) => async (dispatch) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        completed: false,
      }),
    });
    const data = await response.json();
    dispatch(addTodo(data));
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodoAsync = (id) => async (dispatch) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    });
    dispatch(deleteTodo(id));
  } catch (error) {
    console.error(error);
  }
};

export default todoSlice.reducer;
