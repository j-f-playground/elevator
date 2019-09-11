import Floors from 'components/Floors';
import React from 'react';
import styles from './styles.module.scss';
import Elevators from 'components/Elevators';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elevators: [
        {
          id: 1,
          floor: 'B',
        },
        {
          id: 2,
          floor: 'B',
        },
        {
          id: 3,
          floor: 'B',
        },
        {
          id: 4,
          floor: 'B',
        },
      ],
      floors: [
        {
          name: 'B',
          color: 'rgba(255, 255, 255, 0.2)',
        },
        {
          name: '1',
          color: 'rgba(213, 255, 0, 0.2)',
        },
        {
          name: '2',
          color: 'rgba(0, 229, 255, 0.2)',
        },
        {
          name: '3',
          color: 'rgba(251, 49, 49, 0.2)',
        },
      ],
    };
  }

  handleOnClick = (name) => {
    console.log(name);
    //let newFloors = [...this.state.floors];
    let newElevators = [...this.state.elevators];

    newElevators = newElevators.map(item => {
      if (item.floor !== name) {
        item.floor = name;
      }
      return item;
    })
    this.setState({
      elevators: newElevators,
    });
  }

  render() {
    const { elevators, floors } = this.state;

    return (
      <div className={styles.container}>
        <Floors floors={floors.reverse()} onClick={this.handleOnClick} />
        <Elevators elevators={elevators} />
      </div>
    );
  }
}

export default Home;
