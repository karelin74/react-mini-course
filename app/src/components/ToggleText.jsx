import React from "react";

class ToggleText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>
          {this.state.isVisible ? "Скрыть" : "Показать"}
        </button>
      </div>
    );
  }
}

export default ToggleText;
