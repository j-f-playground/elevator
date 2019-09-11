import React from 'react';
import styles from './styles.module.scss';

class Elevator extends React.PureComponent {
  render() {
    return (
      <div className={`${styles.container} `}>
        <div className={`${styles.face} ${styles.back}`} />
        <div className={`${styles.face} ${styles.right}`} />
        <div className={`${styles.face} ${styles.left}`} />
        <div className={`${styles.face} ${styles.top}`} />
        <div className={`${styles.face} ${styles.bottom}`} />
      </div>
    );
  }
}

export default Elevator;
