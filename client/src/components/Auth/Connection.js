import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";
import Deconnection from "../Auth/Deconnection.js";
import User_edit from "../Auth/User_edit.js";
import './auth.css';

class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      connected: false
    };
  }
  notify = () => toast.error("Mauvaise information de connection");

  ValueSend = e => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/connection_verify_identifiant", {
        email: this.state.email,
        password: this.state.password
      })
      .then(e => {
        console.log(this.state + " console log de state");
        if (e.data.id) {
          localStorage.setItem("connected", "connected");
          localStorage.setItem("id_user", e.data.id);

          this.setState({ connected: !this.state.connected });
        } else {
          this.notify();
        }
      })
      .catch(() => {
        this.setState({ connected: !this.state.connected });
        this.notify();
      });
  };
  render() {
    var connected_check = localStorage.getItem("connected");
    if (connected_check != "notco") {
      return (
        <div>
          <Deconnection />
          <User_edit />
        </div>
      );
    } else {
      return (
        <div>
          <div className="row">
            <div className="container">
              <div className="col-md-6 mx-auto">
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

          <h2 className="text-center text-uppercase">Connexion</h2>
          <form onSubmit={this.ValueSend.bind()}>
          <div className="form-group">
            <h5 className="font-weight-normal">Email</h5>
            <input
              className="form-control mb-3"
              type="email"
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
              value={this.state.email}
            />
            <h5 className="font-weight-normal">Mot de passe</h5>
            <input
              className="form-control"
              type="password"
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
              value={this.state.password}
            />
            <input className="btn btn-co form-control mt-3" type="submit" />
        </div>
          </form>
          <a href="/inscription">S'incrire</a>
        </div>
        </div>
        </div>
        </div>
      );
    }
  }
}

export default Connection;
