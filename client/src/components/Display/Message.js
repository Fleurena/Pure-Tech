import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DisplayMessage extends Component {    
    onSuccess(message) {
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
            });
        return <ToastContainer />;
    }

    onError(message) {
        toast.error(message, {
            position: "top-center",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
            });
        return <ToastContainer />;
    }

    render() {
        switch(this.props.bool) {
            case "success":
            return ( <div>{this.onSuccess(this.props.message)}</div>);

            default:
            return ( <div>{this.onError(this.props.message)}</div>);
        }
    }
}

export default DisplayMessage;