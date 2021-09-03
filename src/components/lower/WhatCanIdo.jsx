import React from 'react';
import { whatToDo } from './advice';
import { useValue } from '../../state/Provider';
import styles from '../content/Content.css';

function Advice() {
  const { value } = useValue();
  const { title, advice } = whatToDo[value];

  return (
    <section className={styles.advice}>
      <h4>Advice: {title}</h4>
      <ul className={styles.adviceList}>
        {advice.map((thing) => {
          if (!thing) return <p>No Advice Found</p>;
          return <li key={thing}>{thing}</li>;
        })}
      </ul>
    </section>
  );
}

export default Advice;
