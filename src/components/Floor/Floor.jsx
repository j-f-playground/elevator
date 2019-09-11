import React from 'react';
import styles from './styles.module.scss';
import { func, string } from 'prop-types';

class Floor extends React.PureComponent {
  static propTypes = {
    color: string.isRequired,
    name: string.isRequired,
    onClick: func,
  };

  onClick = () => {
    this.props.onClick(this.props.name)
  }

  render() {
    const { color, name } = this.props;

    return (
      <div className={styles.container} style={{ backgroundColor: color }}>
        <div className={styles.name} onClick={this.onClick}>
          FLOOR {name}
        </div>
      </div>
    );
  }
}

export default Floor;
