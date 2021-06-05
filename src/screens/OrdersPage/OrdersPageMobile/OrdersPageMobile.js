import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
class OrdersPageMobile extends Component {
  componentDidMount() {
    this.props.fetchOrders();
    console.log(this.props.orders);
  }
  render() {
    return <p>no elo</p>;
  }
}
const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPageMobile);
