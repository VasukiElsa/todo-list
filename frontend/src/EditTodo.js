import React, { useState } from 'react';
import './TodoList.css';

const EditTodo = ({editTodo, todoId, initialText}) => {
    const[editedText, setEditedText] = useState(initialText);
    const[isEditing, setEditing] = useState(false);

    const handleSaveTodo = () => {
        if(editedText.trim() !== ''){
            editTodo(todoId, editedText);
            setEditing(false);
        }
    };


    return(
        <div>
            <button onClick={() => setEditing(true)}>Edit</button>

            {isEditing && (
                <>
                <input 
                   className="input-edit" type="text" value={editedText}
                   onChange={(e) => setEditedText(e.target.value)}
                />

                <button onClick={handleSaveTodo}>Save</button>
                </>
            )}
        </div>
    );

};

export default EditTodo;