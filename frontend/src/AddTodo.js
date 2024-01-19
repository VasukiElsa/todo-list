import React, {useState} from 'react';
import './TodoList.css';

const AddTodo = ({addTodo}) => {

    const[newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {

        if(newTodo.trim() !== ''){
            addTodo(newTodo);
        }

        setNewTodo('');
    }


return(
    <div>
        <input 
            className="addInput-edit" type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
           placeholder="Add new todo"
        />

        <button  className="add-action" onClick={handleAddTodo}>Add</button>
    </div>
);

};

export default AddTodo;