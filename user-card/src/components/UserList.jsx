import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";

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
              users: [...this.state.users, response.data]
            });
          });
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => {
          return (
            <UserCard
              key={user.id}
              name={user.name}
              username={user.login}
              img={user.avatar_url}
              bio={user.bio}
              followersCount={user.followers}
              followingCount={user.following}
            />
          );
        })}
      </div>
    );
  }
}
