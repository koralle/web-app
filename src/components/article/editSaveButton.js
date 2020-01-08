import React from 'react';


const EditSaveButton = (props) => {

  const ToggleEditingStatus = () => {
    if (props.isEditing === true) {
      props.setText(props.inputText);
    }
    props.setIsEditing(!props.isEditing);
  }

  return (
    <button onClick={ToggleEditingStatus}>
      {props.isEditing ? 'Save': 'Edit'}
    </button>
  );
};

export default EditSaveButton;