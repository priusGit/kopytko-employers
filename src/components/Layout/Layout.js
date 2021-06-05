import React, { Component } from "react";
import LayoutMobile from "./LayoutMobile/LayoutMobile";
class OrdersPage extends Component {
  render() {
    return <LayoutMobile />;
  }
}
// const mapStateToProps = (state) => {
//   return {
//     numberOfReservations: state.numberOfReservations,
//     loading: state.loading,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchOrders: () => dispatch(actions.fetchOrders()),
//   };
// };

export default // connect(mapStateToProps, mapDispatchToProps)
OrdersPage;
