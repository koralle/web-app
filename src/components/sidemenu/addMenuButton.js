import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import articleListModule from '../../modules/articleListModule';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import './addMenuButton.css';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const AddMenuButton = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // dispatch
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(articleListModule.actions.toggleIsOpen(props.articleId));
  };

  const addNewMainMenu = () => {
    dispatch(articleListModule.actions.addNewMainMenu(props.articleId))
    handleClose();
  };
  const addNewSecondMenu = () => {
    dispatch(articleListModule.actions.addNewSecondMenu(props.articleId))
    handleClose()
  };
  const addNewThirdMenu = () => {
    dispatch(articleListModule.actions.addNewThirdMenu(props.articleId))
    handleClose();
  };

  return (
    <div className={classes.root}>
      <Fab onClick={handleClick}
        className="add-menu-button"
        size="small"
        color="primary"
      >
        <AddIcon />
      </Fab>
      <Menu
        id="simple-menu"
        onClick={toggle}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={addNewMainMenu}>Add Main Menu</MenuItem>
        <MenuItem onClick={addNewSecondMenu}>Add 2nd Menu</MenuItem>
        <MenuItem onClick={addNewThirdMenu}>Add 3rd Menu</MenuItem>
      </Menu>
    </div>
  );
}

export default AddMenuButton;