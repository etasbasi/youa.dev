import React, { Component } from "react";
import Store from "../Store";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: undefined,
      password: undefined
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onClick = () => {
    const { email, password } = this.state;
    const data = {
      email,
      password
    };
    Store.login(data);
  };
  render() {
    return (
      <div className="login">
        <h3 className="login_form--title">Log in:</h3>
        <div className="login_form">
          <ul className="login_form--list">
            <li className="login_form--list_item">
              <i className="login_form--list_icon fas fa-envelope" />
              <input
                className="login_form--list_input"
                type="text"
                placeholder="Email address:"
                name="email"
                onChange={this.onChange}
              />
            </li>
            <li className="login_form--list_item">
              <i className="login_form--list_icon fas fa-key" />
              <input
                className="login_form--list_input"
                type="password"
                placeholder="Password:"
                name="password"
                onChange={this.onChange}
              />
            </li>
            <li className="login_form--list_item">
              <button
                className="login_form--list_button"
                onClick={this.onClick}
              >
                Submit
              </button>
            </li>
          </ul>
        </div>
        <p className="login_form--account">
          Don't have an account?
          <br />
          <span onClick={() => (window.location.href = "/register")}>
            Click here to register.
          </span>
        </p>
      </div>
    );
  }
}
