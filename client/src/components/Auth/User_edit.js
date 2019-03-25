import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './auth.css';

class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      user_sheet: "",
      firstname: "",
      lastname: "",
      adress: []
    };
  }
  componentDidMount = () => {
    var config = {
      headers: { "Content-Type": "application/ld+json" }
    };
    var id_user = localStorage.getItem("id_user");
    console.log(id_user + " console de l'id user edit");
    axios
      .get("http://127.0.0.1:8000/api/users/" + id_user, null, config)
      .then(e => {
        console.log(e.data);
        this.setState({ email: e.data.email });
        this.setState({ user_sheet: e.data.userSheet });

        axios
          .get("http://127.0.0.1:8000" + this.state.user_sheet, null, config)
          .then(e => {
            console.log(e.data);
            this.setState({ firstname: e.data.firstName });
            this.setState({ lastname: e.data.lastName });
            this.setState({ adress: [...e.data.userSheetAdresses] });
          });
      });
  };

  User_change = e => {
    e.preventDefault();
    var config = {
      headers: { "Content-Type": "application/ld+json" }
    };
    var data = {
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      userSheetAdresses: this.state.adress
    };
    var data_user = {
      email: this.state.email
    };
    axios
      .put("http://127.0.0.1:8000" + this.state.user_sheet, data, config)
      .then(() => {
        return axios.put(
          "http://127.0.0.1:8000/api/users/" +
            localStorage.getItem("id_user"),
          data_user,
          config
        );
      });
  };

  notify = () => toast.error("Mauvaise information de connection");

  render() {
    if (localStorage.getItem("connected") != "notco") {
      return (
        <div>
          <div className="row">
            <div className="container">
              <div className="col-md-6 mx-auto">
              <h2 className="text-center text-uppercase">Changer les informations</h2>
          <form onSubmit={this.User_change}>
          <h5 className="font-weight-normal">Prénom</h5>
            <input
              className="form-control mb-3"
              type="text"
              onChange={e => {
                this.setState({ firstname: e.target.value });
              }}
              value={this.state.firstname}
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
            <h5 className="font-weight-normal">Email</h5>
            <input
              className="form-control mb-3"
              type="text"
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
              value={this.state.email}
            />
            <h5 className="font-weight-normal">Adresse</h5>
            <input
              className="form-control mb-3"
              type="text"
              onChange={e => {
                this.setState({ adress: e.target.value });
              }}
            />
            <input className="btn btn-co form-control mt-3 mb-3" type="submit" value="Go" />
          </form>
        </div>
        </div>
        </div>
        </div>
      );
    } else {
      return <div>ok</div>;
    }
  }
}

export default Connection;
