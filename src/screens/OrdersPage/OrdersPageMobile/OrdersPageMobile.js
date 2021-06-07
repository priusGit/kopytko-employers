import classes from "./OrdersPageMobile.module.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import OrderComponent from "./components/OrderComponent/MobileOrderComponent";
import MobileOrderInfoComponent from "./components/OrderInfoComponent/MobileOrderInfoComponent";
class OrdersPageMobile extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    const content = [];
    if (this.props.orders) {
      Object.keys(this.props.orders).forEach((orderID) => {
        content.push(
          <OrderComponent
            key={orderID}
            name={this.props.orders[orderID].deliveryData.namesurname}
          />
        );
      });
    }
    return (
      <section className={classes.ordersPageMobile}>
        <MobileOrderInfoComponent />
        {content}
      </section>
    );
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
