import React, { Component } from 'react';
import FieldAdd from '../Field/Add';

class RepeatField extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        let field = [];
        let fieldAdd = [];


        for(var i = 0; i < this.props.number; i++) {
            if(this.props.send) {
                fieldAdd[i] = <FieldAdd entity={this.props.entity} data={this.props.data[i]}/>
            }

            field[i] = <div><div>{fieldAdd[i]}</div> <div>{this.props.field}</div></div>;
        }

        return (
            <div>{field}</div>
        )
    }
}

export default RepeatField;