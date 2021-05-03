import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";
class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  renderUsers() {
    return this.props.users.map(({ id, name }) => {
      return <li key={id}>{name}</li>;
    });
  }
  head() {
    // og:title Open Graph

    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }
  render() {
    return (
      <div>
        {this.head()}
        Here's a big list of users
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}
function mapStateToprops({ users }) {
  return { users };
}

function loadData(store) {
  console.log("fetchUsers");
  return store.dispatch(fetchUsers());
}
export default {
  component: connect(mapStateToprops, { fetchUsers })(UsersListPage),
  loadData,
};
