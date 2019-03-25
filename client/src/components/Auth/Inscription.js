import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import './auth.css';

class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      firstName: "",
      lastname: "",
      adresse: [],
      password: "",
      startDate: new Date(),
      redirect: false
    };
  }
  notify = e => toast.error(e);

  ValueSend = e => {
    e.preventDefault();

    var data_sheets = JSON.stringify({
      firstName: this.state.firstName,
      lastName: this.state.lastname,
      date: this.state.startDate
    });

    var data_email = JSON.stringify({
      email: this.state.email
    });

    var config = {
      headers: { "Content-Type": "application/ld+json" }
    };
    axios
      .post("http://127.0.0.1:8000/api/user_sheets", data_sheets, config)
      .then(response => {
        axios
          .get("http://127.0.0.1:8000/api/users", data_email, config)
          .then(() => {
            var id_user = response.data.id;
            var data_users = {
              userSheet: "/api/user_sheets/" + id_user,
              email: this.state.email,
              password: this.state.password,
              roles: ["MEMBER"],
              rememberToken: "ok",
              verified: 0
            };

            console.log(data_users);
            axios
              .post("http://127.0.0.1:8000/api/users", data_users, config)
              .then(e => {
                var iduser = e.data.id;
                axios
                  .post("http://127.0.0.1:8000/api/shooping_carts", config)
                  .then(e => {
                    var idshooping = e.data.id;
                    axios
                      .put(
                        "http://127.0.0.1:8000/api/users/" + iduser,
                        {
                          shoopingCart: "/api/shooping_carts/" + idshooping
                        },
                        config
                      )
                      .then(e => {
                        console.log(e);
                        this.setState({ redirect: true });
                      });
                  });
              })
              .catch(e => {
                this.notify(e.response.data.violations[0].message);
              });
          })
          .catch(e => {
            this.notify(e);
          });
      })
      .catch(error => {
        this.notify(error.response.data.violations[0].message);
      });
  };
  render() {
    var redirect = (
      <Redirect
        to={{
          pathname: "/connexion"
        }}
      />
    );

    if (localStorage.getItem("connected") != "notco") {
      return redirect;
    }
    if (this.state.redirect) {
      return redirect;
    }

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
          <h2 className="text-center text-uppercase">Inscription</h2>
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
              className="form-control mb-3"
              type="password"
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
              value={this.state.password}
            />
            <h5 className="font-weight-normal">Prénom</h5>
            <input
              className="form-control mb-3"
              type="text"
              onChange={e => {
                this.setState({ firstName: e.target.value });
              }}
              value={this.state.firstName}
            />
            <h5 className="font-weight-normal">Nom</h5>
            <input
              className="form-control mb-3"
              type="text"
              onChange={e => {
                this.setState({ lastname: e.target.value });
              }}
              value={this.state.lastname}
            />
            <h5 className="font-weight-normal">Date de naissance</h5>
            <DatePicker
              selected={this.state.startDate}
              onChange={e => {
                console.log(this.state.startDate);
                this.setState({ startDate: e });
              }}
            />
            <h5 className="font-weight-normal mt-3">Adresse</h5>
            <input
              className="form-control mb-3"
              type="text"
              onChange={e => {
                this.setState({ adresse: e.target.value });
              }}
              value={this.state.adresse}
            />
            <a href="/connection">
              <input className="btn btn-co form-control mt-3" type="submit" />
            </a>
            </div>
          </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inscription;
