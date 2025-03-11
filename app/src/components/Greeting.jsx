import React from "react";

class Greeting extends React.Component {
  render() {
    return <p>Привет, {this.props.name}!</p>;
  }
}

export default Greeting;

/*******
 * Этот компонент используется в двух задачах (№1 и №13)
 * На всякий случай напишу, что в функциональном исполнении компонент выглядел бы так:

  export const Greeting = (props) => {
    return <p>Hello, {props.name}!</p>;
  };

*/
