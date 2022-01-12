import React, { Component } from "react";
import styles from "./TitleClass.module.css";

class TitleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mundo",
      animals: ["pigs", "goats", "sheep", "dogs", "cats"],
      pokeData: [],
    };
    this.isValid = true;
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/squirtle")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          pokeData: data,
        });
      });
    function wait(time) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, time);
      });
    }
    wait(1000)
      .then(function () {
        console.log("Hola después de 1 segundo");
      })
      .catch(function () {
        console.log("Ocurrio un error");
      });
  }

  static getDerivedStateFromProps(props, state) {
    //console.log('state', state);
    return null;
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        name: "clase",
      };
    });
  };

  render() {
    const { firstPart } = this.props;
    return (
      <div>
        <h1 className={styles.title} onClick={this.handleClick}>
          {firstPart} {this.state.name}
        </h1>
        <ul>
          {this.isValid &&
            this.state.animals.map((animal, id) => {
              return <li key={`animal${id}`}>{animal}</li>;
            })}
        </ul>
      </div>
    );
  }
}

export default TitleClass;
