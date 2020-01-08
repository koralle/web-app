import React, {useState} from 'react';
import {ArticleTitle, ArticleTitleForm} from './articleTitle';
import { ArticleContent, ArticleContentForm } from './articleContent';
import EditSaveButton from './editSaveButton';
import { isArticleTitleEditingModule, isArticleContentEditingModule } from '../../modules/isEditingModule';
import { useSelector } from 'react-redux';
import './article.css';

const Article = () => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");

  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const isArticleTitleEditingOrSaved = useSelector(state => state.isArticleTitleEditing);
  const isArticleContentEditingOrSaved = useSelector(state => state.isArticleContentEditing);


  return (
    <div className="article">
      <div className="article-title">
        <div>
          {isArticleTitleEditingOrSaved ? <ArticleTitleForm title={articleTitle} setTitle={setArticleTitle} inputText={inputTitle} setInputText={setInputTitle}/> : <ArticleTitle title={articleTitle}/>}
        </div>
        <div>
          <EditSaveButton editTarget="isArticleTitleEditing" module={isArticleTitleEditingModule}/>
        </div>
      </div>
      <div className="article-content">
        <div>
          <EditSaveButton editTarget="isArticleContentEditing" module={isArticleContentEditingModule}/>
        </div>
        <div>
          {isArticleContentEditingOrSaved ? <ArticleContentForm content={articleContent} setContent={setArticleContent} inputText={inputContent} setInputText={setInputContent} /> : <ArticleContent content={articleContent}/>}
        </div>
      </div>
    </div>
  );
};

export default Article;