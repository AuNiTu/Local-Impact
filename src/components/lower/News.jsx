import React, { useEffect } from 'react';
import { useSearchTerm, useValue, useNews } from '../../state/Provider';
import { fetchCoordinates } from '../../services/fetchLocation';
import { useDbLocation } from '../../state/SessionProvider';
import Article from './Article';
import newsStyles from './newsStyles.css';

export default function News() {
  const { dbLocation } = useDbLocation();
  const { setSearchTerm } = useSearchTerm();
  const { value } = useValue();
  const { news } = useNews();

  let topic;

  if (value == 0) {
    topic = 'wildfires';
  } else if (value == 1) {
    topic = 'air+quality';
  } else if (value == 2) {
    topic = 'air+quality';
  } else if (value == 3) {
    topic = 'power+plants';
  } else if (value == 4) {
    topic = 'fuel';
  }

  useEffect(() => {
    fetchCoordinates(dbLocation).then((city) =>
      setSearchTerm(`${topic}+${city}`)
    );
  }, [dbLocation, topic]);

  if (news.length === 0) {
    return <h4 className={newsStyles.newsList}>No News Is Good News</h4>;
  }

  const newsElements = news.map((article) => (
    <li className={newsStyles.newsList} key={article.url}>
      <Article
        title={article.title}
        description={article.description}
        publishedAt={article.publishedAt}
        image={article.image}
        url={article.url}
      />
    </li>
  ));

  return <ul className={newsStyles.newsContainer}>{newsElements}</ul>;
}
