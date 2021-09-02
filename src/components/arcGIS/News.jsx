import React from 'react';
import { useGeoLocation, useSearchTerm, useValue, useNews } from '../../state/Provider';
import { fetchCoordinates } from '../../services/fetchLocation';
import { useDbLocation } from '../../state/SessionProvider';
import Article from './Article';
import newsStyles from '../../styles/newsStyles.css';

export default function News() {

  const { location } = useGeoLocation();
  const { dbLocation } = useDbLocation();
  const { searchTerm, setSearchTerm } = useSearchTerm();
  const { value, setValue } = useValue();
  const { news, setNews } = useNews();

  let topic;

  if (value == 0) {
    topic = 'wildfires';
  } else if (value == 1) {
    topic = 'air+quality';
  } else if (value == 2) {
    topic = 'air+quality';
  } else if (value == 3) {
    topic = 'forest';
  } else if (value == 4) {
    topic = 'fuel';
  }

  let coordinates;

  {
    dbLocation.latitude
      ? (coordinates = dbLocation.longitude + ',' + dbLocation.latitude)
      : (coordinates = location.longitude + ',' + location.latitude);
  }

  fetchCoordinates(coordinates) // should be a useEffect but whatever do what I want
    // .then((city) => console.log(topic + '+' + city));
    .then((city) => setSearchTerm(topic + '+' + city));

  console.log(news);

  if (news.totalArticles === 0) return <h1>No News Is Good News</h1>;

  const newsElements = news.articles.map((article) => (
    <li className={newsStyles.newsList} key={article.title}>
      <Article
        title={article.title}
        description={article.description}
        content={article.content}
        image={article.image}
        url={article.url}
      />
    </li>
  ));

  return <ul>{newsElements}</ul>;

}
