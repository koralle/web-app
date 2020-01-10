import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import articleListModule from '../../modules/articleListModule';

const AddMenuButton = (props) => {

    // dispatch
  const dispatch = useDispatch();

  // stateの取得
  const mainMenus = useSelector(state => state.articleList.mainMenus[String(props.articleId)]);

  const toggle = () => {
    dispatch(articleListModule.actions.toggleIsOpen(props.articleId));
  };

  const addNewMainMenu   = () => dispatch(articleListModule.actions.addNewMainMenu(props.articleId));
  const addNewSecondMenu = () => dispatch(articleListModule.actions.addNewSecondMenu(props.articleId));
  const addNewThirdMenu  = () => dispatch(articleListModule.actions.addNewThirdMenu(props.articleId));

  return (
    <div>
      <button onClick={() => toggle()}>
        +
      </button>
      {mainMenus.isDropDownOpen && (
        <ul>
            <li onClick={() => addNewMainMenu()}>Add Main Menu</li>
            <li onClick={() => addNewSecondMenu()}>Add 2nd Menu</li>
            <li onClick={() => addNewThirdMenu()}>Add 3rd Menu</li>
        </ul>
      )}
    </div>
  );
}

export default AddMenuButton;