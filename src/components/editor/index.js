import React from 'react';
import { EditTitle, EditTitleForm } from './editTitle';
import { EditContent, EditContentForm } from './editContent';
import EditSaveButton from './editSaveButton';
import { useSelector } from 'react-redux';
import './editor.css';


const Editor = () => {

  const editArticle = useSelector(state => state.editArticle);

  return (
    <div id="article">

      <div id="article-title">
        <div id="edit-title">{editArticle.title.isEditing ? <EditTitleForm /> : <EditTitle />}</div>
        <div className="edit-save-button">
          <EditSaveButton editTarget="title"
            saveAction="saveArticleTitle"
          />
        </div>
      </div>

      <div id="article-content">
        <div className="edit-save-button">
          <EditSaveButton editTarget="content"
            saveAction="saveArticleContent"
          />
        </div>
        <div id="edit-content" >
          {editArticle.content.isEditing ? <EditContentForm /> : <EditContent />}
        </div>
      </div>
    </div>
  );
};

export default Editor;