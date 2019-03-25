import React, { Component } from 'react';
import OptionMenu from './OptionMenu'
import Stock from '../Entity/Stock/Edit'
import ProductCreate from '../Entity/Product/Create'
import axios from 'axios'
import './Panel.css'

/**
 *
 */
class AdminPanel extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        
        return (
            <div id="test">
                <OptionMenu/>
                <Stock/>
                <ProductCreate />
            </div>
        );
    }
}

export default AdminPanel;









































        // if(send) {
        //     return <FieldDelete entity="main_categories" id=.id}/>
        // }

        // if(mainCategories) {
        //     listMainCategories = mainCategories.map((item) =>
        //         <div>
        //             {item.name}
        //             <div>
        //                 <button onClick={( () => {
        //                     this.setState({
        //                     send : true 
        //                 }); 
        //                 })}>Delete</button>
        //             </div>
        //             {/* <EntityDelete entity="main_categories" id={item.id}/> */}
        //         </div>
        //     )
        // };