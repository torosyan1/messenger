/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import "./style/style.css";

const UsersArray = ["Vahaga", "Karev", "Arman", "Anna", "John"];

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      dataMessage: {},
      currentUser: UsersArray[0],
      inputValuePerson: "",
      change: 25
    };
  }

  sendMessangeUser = () => {
    const { dataMessage, inputValue, currentUser } = this.state;
    if (dataMessage[currentUser] === undefined) {
      this.setState({
        dataMessage: { ...dataMessage, [currentUser]: [inputValue] },
        inputValue: ""
      });
    } else {
      this.setState({
        dataMessage: {
          ...dataMessage,
          [currentUser]: [...dataMessage[currentUser], inputValue]
        },
        inputValue: ""
      });
    }
  };

  updateInput = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };

  updateInputPerson = ({ target: { value } }) => {
    this.setState({ inputValuePerson: value });
  };

  setCurrentUser = str => {
    this.setState({ currentUser: str });
  };

  pushName = () => {
    // eslint-disable-next-line react/destructuring-assignment
    UsersArray.push(this.state.inputValuePerson);
    this.setState({ inputValuePerson: "" });
  };

  render() {
    const {
      dataMessage,
      inputValue,
      currentUser,
      inputValuePerson
    } = this.state;
    return (
      <div id="all">
        <div id="header">
          <h1 id="h1">Messenger</h1>
        </div>
        <div id="user">
          <div id="li">
            {UsersArray.map(el => (
              <div onClick={() => this.setCurrentUser(el)}>
                <li
                  id="k"
                  className={currentUser === el ? "selected" : ""}
                  key={el}
                  onClick={() => this.setCurrentUser(el)}
                >
                  {el}
                </li>
              </div>
            ))}
          </div>
          <input
            id="input1"
            type="text"
            placeholder="add message..."
            value={inputValuePerson}
            onChange={this.updateInputPerson}
          />
          <button type="button" id="button1" onClick={this.pushName}>
            Add person
          </button>
        </div>
        <div id="allmssange">
          <p id="p">Your message</p>
          <div id="sms">
            {dataMessage[currentUser] !== undefined &&
              dataMessage[currentUser].map((current, index) => (
                <ul key={index.toString()}>
                  <li id="userName">{current}</li>
                </ul>
              ))}
            {dataMessage[currentUser] === undefined && (
              <h4>No Massage for {currentUser}</h4>
            )}
          </div>
        </div>
        <div id="allinput">
          <input
            type="text"
            placeholder="add message..."
            id="input"
            value={inputValue}
            onChange={this.updateInput}
          />
          <button id="button" type="button" onClick={this.sendMessangeUser}>
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default Messenger;
