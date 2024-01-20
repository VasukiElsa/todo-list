import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';

const DeleteTodo = ({deleteTodo, todoId}) => {

    const handleDeleteTodo = () => {
        deleteTodo(todoId);
    };


    return(
        <button className="deletetodo-btn" onClick={handleDeleteTodo}>
            <FontAwesomeIcon icon={faTrashArrowUp} /></button>
    );

};

export default DeleteTodo;