import React, {useState} from 'react';
import MainMenu from './mainMenu';
import SecondMenu from './secondMenu';
import ThirdMenu from './thirdMenu';
import AddMenuButton from './addMenuButton';
import './menuWrapper.css';

const MenuWrapper = (props) => {
  const [secondMenuList, setSecondMenuList] = useState([]);
  const [thirdMenuList, setThirdMenuList] = useState([]);

  const addSecondMenu = () => {
    setSecondMenuList(secondMenuList.concat(<SecondMenu />));
    props.handleClickMenu();
  }

  const addThirdMenu = () => {
    setThirdMenuList(thirdMenuList.concat(<ThirdMenu />));
    props.handleClickMenu();
  }

  const secondMenus = secondMenuList.map(
    (menu, i) => {
      return (
        <li>
          {menu}
        </li>
      );
    }
  );

  const thirdMenus = thirdMenuList.map(
    (menu, i) => {
      return (
        <li>
          {menu}
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
      <AddMenuButton
        isListOpen={props.isListOpen}
        setIsListOpen={props.setIsListOpen}
        addMenuWrapper={props.addMenuWrapper}
        addSecondMenu={addSecondMenu}
        addThirdMenu={addThirdMenu}
      />
    </div>
  );
}

export default MenuWrapper;