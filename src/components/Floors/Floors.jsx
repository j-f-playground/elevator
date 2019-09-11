import React from 'react';
import styles from './styles.module.scss';
import Floor from 'components/Floor';
import { arrayOf, shape, string, func } from 'prop-types';

class Floors extends React.PureComponent {
  static propTypes = {
    floors: arrayOf(
      shape({
        name: string,
        color: string,
      })
    ).isRequired,
    onClick: func,
  };

  render() {
    const { floors, onClick } = this.props;

    return (
      <ul className={styles.container}>
        {floors.map((item, index) => (
          <li key={index}>
            <Floor color={item.color} name={item.name} onClick={onClick} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Floors;
