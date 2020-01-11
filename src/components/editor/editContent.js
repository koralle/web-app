import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import editArticleModule from '../../modules/editArticleModule';
import TextField from '@material-ui/core/TextField';

const EditContent = (props) => {
  const editArticle = useSelector(state => state.editArticle);
  const articles = useSelector(state => state.articleList.articles)

  return (
    <p> {articles[editArticle.articleId].content} </p>
  );
};
const EditContentForm = (props) => {
  const editArticle = useSelector(state => state.editArticle);
  const dispatch = useDispatch();

  const handleChangeInputText = (e) => {
    dispatch(editArticleModule.actions.handleChangeInputText({
      editTarget: "content",
      text: e.target.value,
    }));
  }

  return (
    <form noValidate autoComplete="off">
      <TextField
        id="edit-content-field"
        label="Content"
        variant="outlined"
        multiline
        fullWidth
        onChange={handleChangeInputText}
        value={editArticle.content.inputText}
      >
        {editArticle.content.inputText}
      </TextField>
    </form>
  );
}

export { EditContent, EditContentForm };