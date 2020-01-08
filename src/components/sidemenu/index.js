import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuWrapper from './menuWrapper';
import articleListModule from '../../modules/articleListModule';
import './sidemenu.css';

const SideMenu = () => {

  // dispatch
  const dispatch = useDispatch();

  // stateの状態を取得
  const articleList = useSelector(state => state.articleList);

  const menuWrappers = articleList.rootArticleList.map(
    (menu, i) => {
      const unique_article_id = articleList.rootArticleList[i];
      return (
        <li>
          <MenuWrapper
            key={unique_article_id}
            id={unique_article_id}
          />
        </li>
        );
    }
  )

  return (
    <div className="sidemenu">
      <ul>
        {menuWrappers}
      </ul>
    </div>
  );
}

export default SideMenu;