import React, { useState } from 'react';
import MenuWrapper from './menuWrapper';

import './sidemenu.css';

const SideMenu = () => {
  const [menuWrapperList, setMenuWrapperList] = useState([<MenuWrapper />]);
  const [isListOpen, setIsListOpen] = useState(false);

  const addMenuWrapper = () => {
    setMenuWrapperList(
      menuWrapperList.concat(
        <MenuWrapper
          menuWrapperList={menuWrapperList}
          setMenuWrapperList={setMenuWrapperList}
          isListOpen={isListOpen}
          setIsListOpen={setIsListOpen}
          handleCickMenu={handleClickMenu}
        />
      ));
    handleClickMenu();
  }

  const handleClickMenu = () => {
    setIsListOpen(false);
  }

  const menuWrappers = menuWrapperList.map(
    (menu, i) => {
      return (
        <li>
          {menu}
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