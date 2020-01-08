import React from 'react';

const ArticleContent = (props) => {
  return (
    <p>
      {props.content}
    </p>
  );
};

const ArticleContentForm = (props) => {

  const handleInputTextInputChange = (e) => {
    props.setInputText(e.target.value);
  }


  return (
    <div>
      <textarea onChange={handleInputTextInputChange}
        value={props.inputText}
      ></textarea>
    </div>
  );
};

export { ArticleContent, ArticleContentForm };