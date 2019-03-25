import React, { Component } from "react";
import axios from "axios";
import DisplayMessage from "../Display/Message";
import "./test.css";
/**
 * Ajoute de nouveaux champs
 */
class FieldAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      configAxios: {
        headers: {
          "Content-Type": "application/json"
        }
      },
      baseUrl: "http://127.0.0.1:8000/api/" + this.props.entity,
      error: [],
      success: false
    };
  }

  componentDidMount() {
    axios
      .post(
        this.state.baseUrl,
        JSON.stringify(this.props.data),
        this.state.configAxios
      )
      .then(result => {
        this.setState({
          success: true
        });
      })
      .catch(error => {
        this.setState({
          error: [JSON.parse(error.response.request.response).violations],
          success: false
        });
      });
  }

  render() {
    const { error, success } = this.state;

    if (success) {
      return <DisplayMessage bool="success" message="Ajouté" />;
    }
    if (error) {
      const listError = error.map((item, key) => (
        <li key={key}>{item[0].message}</li>
      ));
      return (
        <div id="alert">
          <ul>{listError}</ul>
        </div>
      );
    } else {
      return <div>{this.notify("Requete en cours")}</div>;
    }
  }
}

export default FieldAdd;
