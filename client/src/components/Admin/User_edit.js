import React, { Component } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

class User_Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
    }

    componentDidMount = () => {
        let params = queryString.parse(this.props.location.search)
        console.log(this.props)
    };

    render() {
        return <div />;
    }
}

export default withRouter(User_Edit);
