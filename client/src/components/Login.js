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
      <div className="auth">
        <h3 className="auth_form--title">Log in:</h3>
        <div className="auth_form">
          <ul className="auth_form--list">
            <li className="auth_form--list_item">
              <i className="auth_form--list_icon fas fa-envelope" />
              <input
                className="auth_form--list_input"
                type="text"
                placeholder="Email address:"
                name="email"
                onChange={this.onChange}
              />
            </li>
            <li className="auth_form--list_item">
              <i className="auth_form--list_icon fas fa-key" />
              <input
                className="auth_form--list_input"
                type="password"
                placeholder="Password:"
                name="password"
                onChange={this.onChange}
              />
            </li>
            <li className="auth_form--list_item">
              <button className="auth_form--list_button" onClick={this.onClick}>
                Submit
              </button>
            </li>
          </ul>
        </div>
        <p className="auth_form--account">
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
