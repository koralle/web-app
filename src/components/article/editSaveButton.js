import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EditSaveButton = (props) => {

  const editTarget = props.editTarget;
  const module = props.module;
  // dispatch
  const dispatch = useDispatch();

  // stateの取得
  const isTextEditing = useSelector(state => state[editTarget]);

  const toggle = () => dispatch(module.actions.toggleIsEditing());

  return (
    <button onClick={toggle}>
      {isTextEditing ? 'Save': 'Edit'}
    </button>
  );
};

export default EditSaveButton;