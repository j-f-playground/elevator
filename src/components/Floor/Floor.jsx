import React from 'react';
import styles from './styles.module.scss';
import { func, string } from 'prop-types';

class Floor extends React.PureComponent {
  static propTypes = {
    color: string.isRequired,
    name: string.isRequired,
    onClick: func,
  };

  render() {
    const { color, name, onClick } = this.props;

    return (
      <div className={styles.container} style={{ backgroundColor: color }}>
        <div className={styles.name} onClick={onClick}>
          FLOOR {name}
        </div>
      </div>
    );
  }
}

export default Floor;
