import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import articleListModule from '../../modules/articleListModule';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import './addMenuButton.css';

const AddMenuButton = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // dispatch
  const dispatch = useDispatch();

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
    <div>
      <Fab onClick={handleClick}
        aria-controls="simple-menu"
        className="add-menu-button"
        size="small"
        color="primary"
        aria-haspopup="true"
      >
        <AddIcon />
      </Fab>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={addNewMainMenu}>Add Main Menu</MenuItem>
        <MenuItem onClick={addNewSecondMenu}>Add 2nd Menu</MenuItem>
        <MenuItem onClick={addNewThirdMenu}>Add 3rd Menu</MenuItem>
      </Menu>
    </div>
  );
}

export default AddMenuButton;