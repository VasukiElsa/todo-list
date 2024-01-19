import React from 'react';

const DeleteTodo = ({deleteTodo, todoId}) => {

    const handleDeleteTodo = () => {
        deleteTodo(todoId);
    };


    return(
        <button onClick={handleDeleteTodo}>Delete</button>
    );

};

export default DeleteTodo;