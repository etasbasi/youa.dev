import React, { Component } from "react";
import Store from "../Store";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: undefined,
      password: undefined,
      confirmPassword: undefined
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onClick() {
    const { email, password, confirmPassword } = this.state;
    const data = {
      email,
      password,
      confirmPassword
    };
    Store.register(data);
  }
  render() {
    return (
      <div className="register">
        <h3 className="register_form--title">Create a new account:</h3>
        <div className="register_form">
          <ul className="register_form--list">
            <li className="register_form--list_item">
              <i className="register_form--list_icon fas fa-envelope" />
              <input
                className="register_form--list_input"
                type="text"
                placeholder="Email address:"
                name="email"
                onChange={this.onChange}
              />
            </li>
            <li className="register_form--list_item">
              <i className="register_form--list_icon fas fa-key" />
              <input
                className="register_form--list_input"
                type="password"
                placeholder="Password:"
                name="password"
                onChange={this.onChange}
              />
            </li>
            <li className="register_form--list_item">
              <i className="register_form--list_icon fas fa-key" />
              <input
                className="register_form--list_input"
                type="password"
                placeholder="Confirm password:"
                name="confirmPassword"
                onChange={this.onChange}
              />
            </li>
            <li className="register_form--list_item">
              <button
                className="register_form--list_button"
                onClick={this.onClick}
              >
                Submit
              </button>
            </li>
          </ul>
        </div>
        <p className="register_form--account">
          Already have an account?
          <br />
          <span onClick={() => (window.location.href = "/login")}>
            Click here to log in.
          </span>
        </p>
      </div>
    );
  }
}
