import React from 'react';
import AddMenuButton from './addMenuButton';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import editArticleModule from '../../modules/editArticleModule';
import articleListModule from '../../modules/articleListModule';
import './menuWrapper.css';


const MenuWrapper = (props) => {

  // dispatcherの取得
  const dispatch = useDispatch();

  // storeからstateの取得
  const articles = useSelector(state => state.articleList.articles);
  const mainMenus = useSelector(state => state.articleList.mainMenus[String(props.articleId)]);
  const editArticle = useSelector(state => state.editArticle);

  // サイドメニュー内のいずれかのメニューをクリックしたときの処理
  const displayArticle = (id) => {
    // 現在表示しているArticleと同じidのメニューをクリックしたら何もしない
    if (id === editArticle.articleId) return

    // ArticleはTitleもContentも保存済みだった
    if (editArticle.title.isEditing === false && editArticle.content.isEditing === false) {
      dispatch(editArticleModule.actions.displayArticle({
        id: id,
        title: articles[String(id)].title,
        content: articles[String(id)].content,
      }));
      return
    }

    if (editArticle.title.isEditing === true) {
      // 現在の編集内容を保存する
      dispatch(articleListModule.actions.saveArticleTitle({
        id: editArticle.articleId,
        text: editArticle.title.inputText,
      }));
    }
    // Titleは保存済みだった
    dispatch(editArticleModule.actions.displayTitle({
      id: id,
      title: articles[String(id)].title,
    }));

    // Contentが編集中に別のメニューをクリックした
    if (editArticle.content.isEditing === true) {
      // 現在の編集内容を保存する
      dispatch(articleListModule.actions.saveArticleContent({
        id: editArticle.articleId,
        text: editArticle.content.inputText,
      }));
    }

    dispatch(editArticleModule.actions.displayContent({
      id: id,
      content: articles[String(id)].content,
    }));

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