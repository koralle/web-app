import React from 'react';
import { useSelector } from 'react-redux';
import MenuWrapper from './menuWrapper';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import './sidemenu.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const SideMenu = () => {

  const classes = useStyles();

  // stateの状態を取得
  const mainMenuList = useSelector(state => state.articleList.mainMenuList);

  const menuWrappers = mainMenuList.map((menu, index) => {
    const unique_id = mainMenuList[index];
    return (
      <React.Fragment key={unique_id}>
        <MenuWrapper articleId={unique_id} className="menu-wrapper" />
      </React.Fragment>
    );
  });

  return (
    <div id="sidemenu"  component="nav" className={classes.root}>
      <List  aria-label="contacts" component="nav">
        {menuWrappers}
      </List>
    </div>
  );
}

export default SideMenu;