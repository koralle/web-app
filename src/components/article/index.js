import React, {useState} from 'react';
import {ArticleTitle, ArticleTitleForm} from './articleTitle';
import { ArticleContent, ArticleContentForm } from './articleContent';
import EditSaveButton from './editSaveButton';
import './article.css';

const Article = () => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");

  const [isArticleTitleEditing, setIsArticleTitleEditing] = useState(false);
  const [isArticleContentEditing, setIsArticleContentEditing] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  return (
    <div className="article">
      <div className="article-title">
        <div>
          {isArticleTitleEditing ? <ArticleTitleForm title={articleTitle} setTitle={setArticleTitle} inputText={inputTitle} setInputText={setInputTitle}/> : <ArticleTitle title={articleTitle}/>}
        </div>
        <div>
          <EditSaveButton isEditing={isArticleTitleEditing} setIsEditing={setIsArticleTitleEditing} inputText={inputTitle} setText={setArticleTitle}/>
        </div>
      </div>
      <div className="article-content">
        <div>
          <EditSaveButton isEditing={isArticleContentEditing} setIsEditing={setIsArticleContentEditing} inputText={inputContent} setText={setArticleContent}/>
        </div>
        <div>
          {isArticleContentEditing ? <ArticleContentForm content={articleContent} setContent={setArticleContent} inputText={inputContent} setInputText={setInputContent} /> : <ArticleContent content={articleContent}/>}
        </div>
      </div>
    </div>
  );
};

export default Article;