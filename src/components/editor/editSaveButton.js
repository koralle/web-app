import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import articleListModule from '../../modules/articleListModule';
import editArticleModule from '../../modules/editArticleModule';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';


// props.editTarget で"title"か"content"を受け取る。
// props.saveAction で"saveArticleTitle"か"saveArticleContent"を受け取る。
const EditSaveButton = (props) => {

  // "title"と"content"どっちが編集対象なのか?
  const target = props.editTarget;
  // dispatch
  const dispatch = useDispatch();

  // stateの取得
  const editArticle = useSelector(state => state.editArticle);
  const articles = useSelector(state => state.articleList.articles);


  const toggle = () => {
    // 編集中だったなら、現在の内容を保存する。
    if (editArticle[target].isEditing === true) {
      dispatch(articleListModule.actions[props.saveAction]({
        id: editArticle.articleId, text: editArticle[target].inputText
      }));
      dispatch(editArticleModule.actions.toggleIsEditing(target));
    }
    // 保存済みだったなら、inputTextに現在のその記事の内容を代入する。
    else {
      dispatch(editArticleModule.actions.setInputText({
        editTarget: target, text: articles[String(editArticle.articleId)][target]
      }));
      dispatch(editArticleModule.actions.toggleIsEditing(target));
    }
  };

  return (
    <React.Fragment>
      {editArticle[props.editTarget].isEditing ? (
        <Button
          onClick={toggle}
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      ) : (
        <Button
          onClick={toggle}
          variant="contained"
          color="primary"
          size="small"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
      )}
    </React.Fragment>
  );
};

export default EditSaveButton;