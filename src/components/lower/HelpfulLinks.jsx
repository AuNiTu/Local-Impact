import React from 'react';
import { useValue } from '../../state/Provider';
import { whatToDo } from './advice';
import link from './links';
import styles from '../arcGIS/MapView.css';

function Links() {
  const { value } = useValue();
  const { title, links } = whatToDo[value];
  const {
    polarBear,
    simpleThingsDavis,
    simpleThingsBBC,
    UNCarbon,
    climateCommunity,
  } = link;

  return (
    <>
      <section className={styles.links}>
        <h4>Related Articles</h4>
        {links.map((article) => {
          if (!article) return <p>No Related Articles Found</p>;

          return (
            <a
              href={article.url}
              key={article.title}
              target="_blank"
              rel="noreferrer"
            >
              {article.title}
            </a>
          );
        })}

        <h4>General Articles</h4>
        <a href={polarBear} target="_blank" rel="noreferrer">
          Determining False Information
        </a>
        <a href={simpleThingsDavis} target="_blank" rel="noreferrer">
          Simple Things You Can Do About Climate Change - UC Davis
        </a>
        <a href={simpleThingsBBC} target="_blank" rel="noreferrer">
          Simple Things You Can Do about Climate Change - BBC
        </a>
        <a href={UNCarbon} target="_blank" rel="noreferrer">
          UN Carbon Offset Platform
        </a>
        <a href={climateCommunity} target="_blank" rel="noreferrer">
          See What Your Community is Doing to Fight Climate Change
        </a>
      </section>
    </>
  );
}

export default Links;
