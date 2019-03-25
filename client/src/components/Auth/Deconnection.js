import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connection: ""
    };
  }

  notify = () => toast.info("Deconnection !");

  deconnect = () => {
    this.notify();
    localStorage.setItem("connected", "notco");
    window.location.reload();
  };

  render() {
    return (
      <div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange={false}
          draggableinscription
          pauseOnHover={false}
        />
        <div className="row">
            <div className="container">
              <div className="col-md-6 mx-auto d-flex justify-content-end">
        <button className="btn btn-dark" onClick={this.deconnect}>Déconnexion</button>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Connection;
