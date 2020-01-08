import React, {useState} from 'react';
import SecondMenu from './secondMenu';
import ThirdMenu from './thirdMenu';

const AddMenuButton = (props) => {

  const toggleIsListOpen = () => {
    props.setIsListOpen(!(props.isListOpen));
  }

  return (
    <div>
      <button onClick={toggleIsListOpen}>
        +
      </button>
      {props.isListOpen && (
        <ul>
            <li onClick={props.handleClickMenu}>Add Main Menu</li>
            <li onClick={props.addSecondMenu}>Add 2nd Menu</li>
            <li onClick={props.addThirdMenu}>Add 3rd Menu</li>
        </ul>
      )}
    </div>
  );
}

export default AddMenuButton;