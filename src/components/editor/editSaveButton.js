import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import articleListModule from '../../modules/articleListModule';

const EditSaveButton = (props) => {

  const module = props.module;
  // dispatch
  const dispatch = useDispatch();

  // stateの取得
  const editTarget = useSelector(state => state[module.name]);

  const toggle = () => {
    if (editTarget.isEditing === true) {
      dispatch(articleListModule.actions[props.saveAction]({id: editTarget.articleId, text:editTarget.inputText}));
    }
    dispatch(module.actions.toggleIsEditing());
  };

  return (
    <button onClick={toggle}>
      {editTarget.isEditing ? 'Save': 'Edit'}
    </button>
  );
};

export default EditSaveButton;