import React from 'react';
import { useSelector } from 'react-redux';
import MenuWrapper from './menuWrapper';
import './sidemenu.css';

const SideMenu = () => {

  // stateの状態を取得
  const mainMenuList = useSelector(state => state.articleList.mainMenuList);

  const menuWrappers = mainMenuList.map((menu, index) => {
    const unique_id = mainMenuList[index];
    return <li> <MenuWrapper key={unique_id} articleId={unique_id} /></li>
  });

  return (
    <div className="sidemenu">
      <ul>
        {menuWrappers}
      </ul>
    </div>
  );
}

export default SideMenu;