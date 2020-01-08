import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isDropDownOpenModule from '../../modules/isDropDownOpenModule';
import articleListModule from '../../modules/articleListModule';

const AddMenuButton = (props) => {

    // dispatch
  const dispatch = useDispatch();

  // stateの取得
  //const isOpen = useSelector(state => state.articleList.mainMenus[String(props.id)].isDropDownOpen);
  //const isOpen = useSelector(state => state.isDropDownOpen);
  const articleList = useSelector(state => state.articleList);

  const toggle = () => {
    console.log(articleList.mainMenus[String(props.id)]);
    dispatch(articleListModule.actions.toggleIsOpen(props.id));
  };

  const addNewMainMenu   = () => dispatch(articleListModule.actions.addNewMainMenu());
  const addNewSecondMenu = () => dispatch(articleListModule.actions.addNewSecondMenu(props.id));
  const addNewThirdMenu  = () => dispatch(articleListModule.actions.addNewThirdMenu(props.id));


  return (
    <div>
      <button onClick={toggle}>
        +
      </button>
      {articleList.mainMenus[String(props.id)].isDropDownOpen && (
        <ul>
            <li onClick={addNewMainMenu}>Add Main Menu</li>
            <li onClick={addNewSecondMenu}>Add 2nd Menu</li>
            <li onClick={addNewThirdMenu}>Add 3rd Menu</li>
        </ul>
      )}
    </div>
  );
}

export default AddMenuButton;