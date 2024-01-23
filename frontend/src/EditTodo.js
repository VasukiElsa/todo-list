import React, { useState } from 'react';
import './TodoList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const EditTodo = ({ editTodo, todoId, initialText }) => {
  const [editedText, setEditedText] = useState(initialText);

  const handleEditTodo = () => {

    editTodo(todoId, editedText);
  };

  return (
    <div>
      <Popup 
         trigger={
          <button className="editTodo-btn">
            <FontAwesomeIcon icon={faEdit}/>
          </button>
         }
         position="right center"
      >
        {(close) => (
          <div className="modal">
            <div className="modal-content">
              <textarea value={editedText} onChange={(e) => setEditedText(e.target.value)}/>
            </div>

            <div>
              <button className = "edit-el-save" onClick={() =>{handleEditTodo(); close();}}>
                Save
              </button>

              <button className = "edit-el-cancel" onClick={() => { close(); }}>
                Cancel
              </button>

            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default EditTodo;
