import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import articleListModule from '../../modules/articleListModule';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';


const EditSaveButton = (props) => {

  const module = props.module;
  // dispatch
  const dispatch = useDispatch();

  // stateの取得
  const editTarget = useSelector(state => state[module.name]);
  const editArticle = useSelector(state => state.articleList.articles[String(editTarget.articleId)]);

  const toggle = () => {
    if (editTarget.isEditing === true) {
      dispatch(articleListModule.actions[props.saveAction]({id: editTarget.articleId, text:editTarget.inputText}));
    }
    else {
    }
    dispatch(module.actions.toggleIsEditing());
  };

  return (
    <React.Fragment>
      {editTarget.isEditing ? (
        <Button
          onClick={toggle}
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      ) : (
        <Button
          onClick={toggle}
          variant="contained"
          color="primary"
          size="small"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
      )}
    </React.Fragment>
  );
};

export default EditSaveButton;