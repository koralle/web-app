import React, {useState} from 'react';
import MainMenu from './mainMenu';
import SecondMenu from './secondMenu';
import ThirdMenu from './thirdMenu';
import AddMenuButton from './addMenuButton';
import { useDispatch, useSelector } from 'react-redux';
import articleListModule from '../../modules/articleListModule';
import './menuWrapper.css';

const MenuWrapper = (props) => {

  const dispatch = useDispatch();

  const mainArticleMenus = useSelector(state => state.articleList.mainMenus[props.id]);
  console.log(mainArticleMenus);

  const addSecondMenu = () => dispatch(articleListModule.actions.addNewSecondMenu());
  const addThirdMenu = () => dispatch(articleListModule.actions.addNewThirdMenu());

  const secondMenus = mainArticleMenus.secondMenuList.map(
    (i) => {
      const unique_article_id = mainArticleMenus.secondMenuList[i];
      console.log(mainArticleMenus);
      return (
        <li>
          <SecondMenu
            key={unique_article_id}
            id={unique_article_id}
          />
        </li>
      );
    }
  );

  const thirdMenus = mainArticleMenus.thirdMenuList.map(
    (i) => {
      const unique_article_id = mainArticleMenus.secondMenuList[i];
      return (
        <li>
          <ThirdMenu
            key={unique_article_id}
            id={unique_article_id}
          />
        </li>
      );
    }
  );
  return (
    <div className="menuWwapper">
      <div>
        <ul className="menu-wrapper-list">
          <li>
            <MainMenu />
          </li>
          {secondMenus}
          {thirdMenus}
        </ul>
      </div>
      <AddMenuButton id={props.id}/>
    </div>
  );
}

export default MenuWrapper;