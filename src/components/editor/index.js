import React from 'react';
import { EditTitle, EditTitleForm } from './editTitle';
import { EditContent, EditContentForm } from './editContent';
import EditSaveButton from './editSaveButton';
import editTitleModule from '../../modules/editTitleModule';
import editContentModule from '../../modules/editContentModule';
import { useSelector } from 'react-redux';
import './editor.css';


const Editor = () => {

  const editTitle = useSelector(state => state.editTitle);
  const editContent = useSelector(state => state.editContent);

  return (
    <div id="article">

      <div id="article-title">
        <div id="edit-title">{editTitle.isEditing ? <EditTitleForm /> : <EditTitle />}</div>
        <div className="edit-save-button">
          <EditSaveButton module={editTitleModule} saveAction="saveArticleTitle" />
        </div>
      </div>

      <div id="article-content">
        <div className="edit-save-button">
          <EditSaveButton module={editContentModule} saveAction="saveArticleContent" />
        </div>
        <div id="edit-content" >
          {editContent.isEditing ? <EditContentForm /> : <EditContent />}
        </div>
      </div>
    </div>
  );
};

export default Editor;