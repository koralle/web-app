import React from 'react';
import AddMenuButton from './addMenuButton';
import { useDispatch, useSelector } from 'react-redux';
import editTitleModule from '../../modules/editTitleModule';
import editContentModule from '../../modules/editContentModule';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './menuWrapper.css';


const MenuWrapper = (props) => {

  const dispatch = useDispatch();
  const articles = useSelector(state => state.articleList.articles);
  const mainMenus = useSelector(state => state.articleList.mainMenus[String(props.articleId)]);
  const editTitle = useSelector(state => state.editTitle);
  const editContent = useSelector(state => state.editContent);

  const displayArticle = (id) => {
    if (editTitle.isEditing === true) {
      dispatch()
      dispatch(editTitleModule.actions.toggleIsEditing());
    }
    if (editContent.isEditing === true) {
      dispatch(editContentModule.actions.toggleIsEditing());
    }
    if (id !== editTitle.articleId) {
      dispatch(editTitleModule.actions.startEdit(""));
    } else {
      dispatch(editTitleModule.actions.startEdit(editTitle.title));
    }
    dispatch(editTitleModule.actions.displayTitle({ id:id, title: articles[String(id)].title }));
    dispatch(editContentModule.actions.displayContent({id:id, content: articles[String(id)].content}));
  }

  const secondMenus = mainMenus.secondMenuList.map((menu, index) => {
    const unique_id = mainMenus.secondMenuList[index];
    return (
      <ListItem button key={unique_id}>
        <ListItemText primary="2nd Menu"
          className="second-menu"
          onClick={() => displayArticle(unique_id)}
        />
      </ListItem>
    );
  });

  const thirdMenus = mainMenus.thirdMenuList.map((menu, index) => {
    const unique_id = mainMenus.thirdMenuList[index];
    return (
      <ListItem button key={unique_id} >
        <ListItemText primary="3rd Menu"
          className="third-menu"
          onClick={() => displayArticle(unique_id)}
        />
      </ListItem>
    );
  });

  return (
    <React.Fragment>
      <ListItem key={props.articleId} button >
        <ListItemText primary="Main Menu"
          className="main-menu"
          onClick={() => displayArticle(props.articleId)}
        />
        <AddMenuButton articleId={props.articleId}/>
      </ListItem>
      {secondMenus}
      {thirdMenus}
    </React.Fragment>
  );
}

export default MenuWrapper;