import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './AddTodo.js';
import EditTodo from './EditTodo.js';
import DeleteTodo from './DeleteTodo.js';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch todos from the Django backend when the component mounts
    axios.get('http://localhost:8000/api/tasks/')
      .then((response) => setTodos(response.data))
      .catch((error) => {
        console.error('Error fetching todos', error);
        setError('Failed to fetch todos. Please try again.');
      });
  }, []);

  const addTodo = (text) => {
    // Add a new todo to the Django backend
    axios.post('http://localhost:8000/api/tasks/', { text })
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => {
        console.error('Error adding todo', error);
        setError('Failed to add todo. Please try again.');
      });
  };

  const deleteTodo = (id) => {
    // Delete a todo from the Django backend
    axios.delete(`http://localhost:8000/api/tasks/${id}/`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((error) => {
        console.error('Error deleting todo', error);
        setError('Failed to delete todo. Please try again.');
      });
  };

  const editTodo = (id, newText) => {
    // Edit a todo in the Django backend
    axios.put(`http://localhost:8000/api/tasks/${id}/`, { text: newText })
      .then((response) =>
        setTodos(
          todos.map((todo) => (todo.id === id ? response.data : todo))
        )
      )
      .catch((error) => {
        console.error('Error editing todo', error);
        setError('Failed to edit todo. Please try again.');
      });
  };

  return (
    <div className="container">
      <h1 id="todo-heading">Todo List</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <>
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className="todo-card">
                <div className="todo-content">
                  <div className="todo-text">{todo.text}</div>
                  <div className="todo-date">{todo.formatted_created_date}</div>
                  <div className="todo-date">{new Date(todo.created_date).toLocaleTimeString()}</div>
                </div>
                <div className="todo-actions">
                  <EditTodo editTodo={editTodo} todoId={todo.id} initialText={todo.text} />
                  <DeleteTodo deleteTodo={deleteTodo} todoId={todo.id} />
                </div>
              </li>
            ))}
          </ul>
          <AddTodo addTodo={addTodo} />
        </>
      )}
    </div>
  );
};

export default TodoList;
