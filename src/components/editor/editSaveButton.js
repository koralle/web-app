import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import articleListModule from '../../modules/articleListModule';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  }
}));

const EditSaveButton = (props) => {
  const classes = useStyles();

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