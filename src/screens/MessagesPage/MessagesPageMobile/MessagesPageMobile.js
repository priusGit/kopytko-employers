import classes from "./MessagesPageMobile.module.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import OrderComponent from "./components/MessageComponent/MobileMessagesComponent";
class MessagesPageMobile extends Component {
  componentDidMount() {
    this.props.fetchMessages();
    console.log(this.props.messages);
  }
  render() {
    const content = [];
    if (this.props.messages) {
      Object.keys(this.props.messages).forEach((messageID) => {
        content.push(
          <OrderComponent
            key={messageID}
            name={this.props.messages[messageID].email}
          />
        );
      });
    }
    return <section className={classes.messagesPageMobile}>{content}</section>;
  }
}
const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: () => dispatch(actions.fetchMessages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPageMobile);
