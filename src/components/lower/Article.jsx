/* eslint-disable react/prop-types */
import React from 'react';
import articleStyles from './article.css';

const Article = ({ title, description, publishedAt, image, url }) => {
  const date = publishedAt.split('T');
  console.log(date);
  return (
    <section className={articleStyles.container}>
      <a href={url} target="_blank" rel="noreferrer">
        <h3>{title}</h3>
        <p>{date[0]}</p>
        <img
          className={articleStyles.articleImage}
          src={image}
          alt={title}
        ></img>
      </a>
      <p>{description}</p>
    </section>
  );
};

export default Article;
