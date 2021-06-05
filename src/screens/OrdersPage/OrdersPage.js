import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import OrdersPageMobile from "./OrdersPageMobile/OrdersPageMobile";
class OrdersPage extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    return <OrdersPageMobile />;
  }
}
const mapStateToProps = (state) => {
  return {
    numberOfReservations: state.numberOfReservations,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
