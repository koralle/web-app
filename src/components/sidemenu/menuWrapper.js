import React from 'react';
import AddMenuButton from './addMenuButton';
import { useDispatch, useSelector } from 'react-redux';
import editTitleModule from '../../modules/editTitleModule';
import editContentModule from '../../modules/editContentModule';
import MainMenu from './mainMenu';
import SecondMenu from './secondMenu';
import ThirdMenu from './thirdMenu';
import './menuWrapper.css';

const MenuWrapper = (props) => {

  const dispatch = useDispatch();
  const articles = useSelector(state => state.articleList.articles);
  const mainMenus = useSelector(state => state.articleList.mainMenus[String(props.articleId)]);

  const displayArticle = (id) => {
    dispatch(editTitleModule.actions.displayTitle({ id:id, title: articles[String(id)].title }));
    dispatch(editContentModule.actions.displayContent({id:id, content: articles[String(id)].content}));
  }

  const secondMenus = mainMenus.secondMenuList.map((menu, index) => {
    const unique_id = mainMenus.secondMenuList[index];
    return <li key={unique_id}><SecondMenu  articleId={unique_id} onClickFunction={() => displayArticle(unique_id)}/></li>;
  });

  const thirdMenus = mainMenus.thirdMenuList.map((menu, index) => {
    const unique_id = mainMenus.thirdMenuList[index];
    return <li key={unique_id}><ThirdMenu  articleId={unique_id} onClickFunction={() => displayArticle(unique_id)}/></li>;
  });

  return (
    <div className="menuWwapper">
      <div>
        <ul className="menu-wrapper-list">
          <li key={props.articleId}>
            <MainMenu  articleId={props.articleId} onClickFunction={() => displayArticle(props.articleId)}/>
          </li>
          {secondMenus}
          {thirdMenus}
        </ul>
      </div>
      <AddMenuButton articleId={props.articleId}/>
    </div>
  );
}

export default MenuWrapper;