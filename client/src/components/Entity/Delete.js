import React, { Component } from 'react';
import FieldDelete from '../Field/Delete';

/**
 *
 */
class EntityDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            send : false
        };
    }

    render() {
        const { send } = this.state;

        if(send) {
            return <FieldDelete entity={ this.props.entity } id={this.props.id}/>
        }
        return (
            <div>
                <button onClick={( () => {
                    this.setState({
                        send : true 
                    }); 
                })}>Delete</button>
            </div>
        );
    }
}

export default EntityDelete;