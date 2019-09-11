import React from 'react';
import styles from './styles.module.scss';
import Elevator from 'components/Elevator';
import { arrayOf, shape, number, string } from 'prop-types';

class Elevators extends React.PureComponent {
  static propTypes = {
    elevators: arrayOf(
      shape({
        id: number,
        floor: string,
      })
    ).isRequired,
  };

  getClassNameByFloor(floor) {
    switch (floor) {
      case '1':
        return styles.floor1;
      case '2':
        return styles.floor2;
      case '3':
        return styles.floor3;
      default:
        return styles.floorB;
    }
  }

  render() {
    const { elevators } = this.props;

    return (
      <ul className={styles.container}>
        {elevators.map((item, index) => (
          <li key={index}>
            <div className={`${styles.mover} ${this.getClassNameByFloor(item.floor)}`}>
              <Elevator />
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Elevators;
