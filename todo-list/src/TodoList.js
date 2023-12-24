import React, {useState} from 'react';
import AddTodo from './AddTodo.js';
import EditTodo from './EditTodo.js';
import DeleteTodo from './DeleteTodo.js';
import './TodoList.css';

const TodoList = () => {
    const[todos, setTodos] = useState([
        {
            id : 1,
            text : "Do Exercise",
        },
        {
            id : 2,
            text : 'Meditate for 10 minutes'
        },
        {
            id : 3,
            text : 'Solve coding challenges'
        },
        {
            id : 4,
            text : 'Practice and learn react'
        }
    ]);

    const addTodo = (text) => {
        setTodos([...todos, {id : Date.now(), text}]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !==id));
    };

    const editTodo = (id, newText) => {
        setTodos(
            todos.map((todo) => (todo.id === id ?
                {...todo, text : newText} : todo))
        );
    };

    return(
        <div>
            <h1>Todo List</h1>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-card">
                        <span className="todo-text">{todo.text}</span>
                        <div className="todo-actions">
                        <EditTodo editTodo={editTodo} todoId={todo.id} initialText={todo.text}/>
                        <DeleteTodo deleteTodo={deleteTodo} todoId={todo.id}/>
                        </div>
                    </li>
                ))}
            </ul>

            <AddTodo addTodo={addTodo}/>
        </div>
    );
                };




export default TodoList; 