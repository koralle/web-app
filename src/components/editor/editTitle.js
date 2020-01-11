import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import editArticleModule from '../../modules/editArticleModule';
import TextField from '@material-ui/core/TextField';


const EditTitle = (props) => {
  const editArticle = useSelector(state => state.editArticle);
  const articles = useSelector(state => state.articleList.articles);
  return (
    <h1> {articles[editArticle.articleId].title} </h1>
  );
};

const EditTitleForm = (props) => {
  const editArticle = useSelector(state => state.editArticle);
  const dispatch = useDispatch();

  const handleChangeInputText = (e) => {
    dispatch(editArticleModule.actions.handleChangeInputText(
      {
        editTarget: "title",
        text: e.target.value,
      }));
  }

  return (
    <form>
      <TextField
        id="edit-title-field"
        label="Title"
        variant="outlined"
        fullWidth
        onChange={handleChangeInputText}
        value={editArticle.title.inputText}
      />
    </form>
  );
}

export { EditTitle, EditTitleForm } ;
