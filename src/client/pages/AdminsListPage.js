import React, { Component } from "react";
import { connect } from "react-redux";
import requireAuth from "../components/hocs/requireAuth";

import { fetchAdmins } from "../actions";
class AdminListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }
  renderAdmins() {
    return this.props.admins.map(({ id, name }) => {
      return <li key={id}>{name}</li>;
    });
  }

  render() {
    return (
      <div>
        Protected list of admins
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}
function mapStateToprops({ admins }) {
  return { admins };
}

function loadData(store) {
  console.log("fetchAdmins")
  return store.dispatch(fetchAdmins());
}
export default {
  component: connect(mapStateToprops, { fetchAdmins })(
    requireAuth(AdminListPage)
  ),
  loadData,
};
