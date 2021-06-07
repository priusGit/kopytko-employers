import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import MessagesPageMobile from "./MessagesPageMobile/MessagesPageMobile";
class MessagesPage extends Component {
  render() {
    return (
      <div>
        <MessagesPageMobile />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
