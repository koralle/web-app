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
    <div className="article">
      <div className="article-title">
        <div>
          {editTitle.isEditing ? <EditTitleForm /> : <EditTitle />}
        </div>
        <div>
          <EditSaveButton module={editTitleModule} saveAction="saveArticleTitle"/>
        </div>
      </div>
      <div className="article-content">
        <div>
          <EditSaveButton module={editContentModule} saveAction="saveArticleContent" />
        </div>
        <div>
          {editContent.isEditing ? <EditContentForm /> : <EditContent />}
        </div>
      </div>
    </div>
  );
};

export default Editor;