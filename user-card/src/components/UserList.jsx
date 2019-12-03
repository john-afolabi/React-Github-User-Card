import React, { useState, useEffect, Component } from "react";
import data from "./data";
import axios from "axios";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/john-afolabi/followers")
      .then(response => {
        response.data.forEach(user => {
          axios.get(`${user.url}`).then(response => {
            this.setState({
              users: response.data
            });
          });
        });
      });
  }

  render() {
    return <div>{console.log(this.state.users)}</div>;
  }
}
