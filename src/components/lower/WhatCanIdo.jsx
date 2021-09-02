import React from 'react';
import { whatToDo } from './advice';
import { useValue } from '../../state/Provider';
import styles from '../content/Content.css';

function Advice() {
  const { value } = useValue();
  const { title, advice } = whatToDo[value];

  return (
    <section className={styles.advice}>
      <h3>{title}</h3>
      <ul>
        {advice.map((thing) => {
          if (!thing) return <p>No Advice Found</p>;
          return <li key={thing}>{thing}</li>;
        })}
      </ul>
    </section>
  );
}

export default Advice;
