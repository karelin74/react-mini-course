import React from "react";
import styles from "../styles/Notification.module.css";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      switch: "Показать",
    };
  }
  toggleVisible = () => {
    const isOn = !this.state.isOn;
    this.setState({ isOn: isOn });
    this.setState({ switch: isOn ? "Скрыть" : "Показать" });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleVisible}>
          {this.state.switch} уведомление {this.props.type}
        </button>
        <div
          className={`${styles[this.props.type]} ${
            this.state.isOn ? styles.on : ""
          }`}
        >
          {this.props.message}
        </div>
      </div>
    );
  }
}

export default Notification;
