import React from 'react';
import articleStyles from './article.css';

const Article = ({ title, description, content, image, url }) => {
  return (
    <section className={articleStyles.container}>
      <a href={url} target="_blank" rel="noreferrer">
        <h3>{title}</h3>
        <img
          className={articleStyles.articleImage}
          src={image}
          alt={title}
        ></img>
      </a>
      <h3>{description}</h3>
    </section>
  );
};

export default Article;
