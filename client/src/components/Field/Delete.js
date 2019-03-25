import React, { Component } from "react";
import axios from "axios";
import DisplayMessage from "../Display/Message";

/**
 * Ajoute de nouveaux champs
 */
class FieldDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: "http://127.0.0.1:8000",
      error: null,
      success: false
    };
  }

  componentDidMount() {
    this.props.entity.forEach(element => {
      axios
        .delete(this.state.baseUrl + element.object["@id"])
        .then(res => {
          this.setState({
            success: true
          });
        })
        .catch(error => {
          this.setState({
            error: [
              //JSON.parse(error.response.request.response).violations
            ]
          });
        });
    });
  }

  render() {
    const { error, success } = this.state;

    if (success) {
      return <DisplayMessage bool="success" message="Delete" />;
    }
    if (error) {
      return (
        <DisplayMessage bool="error" message="Des erreurs ont ete trouvés" />
      );
    } else {
      return <p>test</p>;
    }
  }
}

export default FieldDelete;
