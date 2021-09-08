import React, { useEffect } from 'react';
import {
  useGeoLocation,
  useSearchTerm,
  useValue,
  useNews,
} from '../../state/Provider';
import { fetchCoordinates } from '../../services/fetchLocation';
import { useDbLocation } from '../../state/SessionProvider';
import Article from './Article';
import newsStyles from './newsStyles.css';

export default function News() {
  // const { location } = useGeoLocation();
  const { dbLocation } = useDbLocation();
  const { setSearchTerm } = useSearchTerm();
  const { value } = useValue();
  const { news } = useNews();

  let topic;

  switch (value) {
    case 0:
      topic = 'wildfires';
      break;
    case 1:
      topic = 'air+quality';
      break;
    case 2:
      topic = 'air+quality';
      break;
    case 3:
      topic = 'power+plants';
      break;
    case 4:
      topic = 'fuel';
      break;
    default:
      break;
  }

  // if (value == 0) {
  //   topic = 'wildfires';
  // } else if (value == 1) {
  //   topic = 'air+quality';
  // } else if (value == 2) {
  //   topic = 'air+quality';
  // } else if (value == 3) {
  //   topic = 'power+plants';
  // } else if (value == 4) {
  //   topic = 'fuel';
  // }

  useEffect(() => {
    fetchCoordinates(dbLocation).then((city) =>
      setSearchTerm(`${topic}+${city}`)
    );
  }, [dbLocation]);

  // let coordinates;

  // {
  //   dbLocation.latitude
  //     ? (coordinates = dbLocation.longitude + ',' + dbLocation.latitude)
  //     : (coordinates = location.longitude + ',' + location.latitude);
  // }

  // fetchCoordinates(coorinates).then((city) =>
  //   setSearchTerm(topic + '+' + city)
  // );

  if (news.totalArticles === 0) {
    return <h4 className={newsStyles.newsList}>No News Is Good News</h4>;
  }

  const newsElements = news.articles.map((article) => (
    <li className={newsStyles.newsList} key={article.title}>
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
