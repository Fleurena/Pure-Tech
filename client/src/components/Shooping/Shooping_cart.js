import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Shooping_cart_user from "../Shooping/Shooping_user_connected";
import Shooping_cart_user_not_co from "../Shooping/Shooping_user_not_connected";

class Shooping_cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {};

  render() {
    if (localStorage.getItem("connected") != "notco")
      return <Shooping_cart_user />;
    else {
      return <Shooping_cart_user_not_co />;
    }
  }
}

export default Shooping_cart;
