import React, { Component } from "react";
import styles from './TitleClass.module.css';

class TitleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mundo",
      animals: ['pigs', 'goats', 'sheep', 'dogs', 'cats'],
      pokeData: []
    };
    this.isValid = true;
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/squirtle').then((response) => {
      return response.json();
    }).then((data) => {
      console.log('data', data);
      this.setState({
        pokeData: data
      })
    });
  }

  static getDerivedStateFromProps(props, state) {
    console.log('state', state);
  }

  handleClick = () => {  
    this.setState(prevState => {
      return {
        name: 'clase'
      }
    });
  }
  
  render() {
    const { firstPart } = this.props;
    return (<div>
      <h1 className={styles.title} onClick={this.handleClick} >{firstPart} {this.state.name}</h1>
      <ul>
        {this.isValid && this.state.animals.map((animal) => {
          return (
            <li>{animal}</li>
          )
        })}
      </ul>
    </div>);
  }
}

export default TitleClass;
