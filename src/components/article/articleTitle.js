import React from 'react';

const ArticleTitle = (props) => {
  return (
    <h1>{props.title}</h1>
  );
}

const ArticleTitleForm = (props) => {

  const handleInputTextInputChange = (e) => {
    props.setInputText(e.target.value);
  }


  return (
    <input type="text" onChange={handleInputTextInputChange}
      value={props.inputText}
    />
  );
}

export { ArticleTitle, ArticleTitleForm };
