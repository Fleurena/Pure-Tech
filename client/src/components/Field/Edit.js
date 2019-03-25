import React, { Component } from 'react';
import axios from 'axios';

/**
 * Ajoute de nouveaux champs
 */
class FieldEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            configAxios : {
                headers: {
                    'Content-Type': 'application/json'
                }
            },
            baseUrl : "http://127.0.0.1:8000/api/" + this.props.entity + "/" + this.props.id,
            error : [],
            success : false
        };
    }

    componentDidMount() {
        axios.put(this.state.baseUrl, this.props.data, configAxios)
            .then((res) => {
                this.setState({
                    success : true
                });
            }
        ).catch(error => {
            this.setState({
                error: [
                    //JSON.parse(error.response.request.response).violations
                ]
            });
        });
    }
    
    render() {
        const { error, success } = this.state;

        if(success) {
            
            return <p>Champs edité avec success</p>
        } if (error) {
            const listError = error.map((item) =>
                <li>{item[0].message}</li>
            );
            return <ul>{listError}</ul>
        } else {
            return <p>test</p>
        }
    }
}

export default FieldEdit;