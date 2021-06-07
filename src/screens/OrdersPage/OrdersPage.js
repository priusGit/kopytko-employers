import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import OrdersPageMobile from "./OrdersPageMobile/OrdersPageMobile";
class OrdersPage extends Component {
  render() {
    return (
      <div>
        <OrdersPageMobile />
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

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
