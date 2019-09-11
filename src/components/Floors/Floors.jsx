import React from 'react';
import styles from './styles.module.scss';
import Floor from 'components/Floor';
import { arrayOf, shape, string } from 'prop-types';

class Floors extends React.PureComponent {
  static propTypes = {
    floors: arrayOf(
      shape({
        name: string,
        color: string,
      })
    ).isRequired,
  };

  render() {
    const { floors } = this.props;

    return (
      <ul className={styles.container}>
        {floors.map((item, index) => (
          <li key={index}>
            <Floor color={item.color} name={item.name} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Floors;
