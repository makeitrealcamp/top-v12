import React, { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mundo"
    };
  }

  handleClick = () => {
    this.setState({
      name: 'Clase'
    });
  }
  
  render() {
    const { firstPart } = this.props;
    return <h1 onClick={this.handleClick} >{firstPart} {this.state.name}</h1>;
  }
}

export default Title;
