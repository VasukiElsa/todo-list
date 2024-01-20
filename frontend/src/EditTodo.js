import React, { useState } from 'react';
import './TodoList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const EditTodo = ({ editTodo, todoId, initialText }) => {
  const [editedText, setEditedText] = useState(initialText);

  const handleEditTodo = () => {
    // Use window.prompt to display an alert with an input field
    const userInput = window.prompt('Edit Todo:', initialText);
    
    // Check if the user clicked "Cancel" or entered an empty string
    if (userInput === null || userInput.trim() === '') {
      return;
    }

    // Save the edited todo
    editTodo(todoId, userInput);
  };

  return (
    <div>
      <button className="editTodo-btn" onClick={handleEditTodo}>
      <FontAwesomeIcon icon={faEdit} />
      </button>
    </div>
  );
};

export default EditTodo;
