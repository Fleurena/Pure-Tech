import React, { Component } from 'react';
import MainCategoryCreate from '../Entity/Category/MainCategory/Create'
import SubCategoryCreate from '../Entity/Category/SubCategory/Create'
import BrandCreate from '../Entity/Brand/Create'
import AdminEditMenu from './EditMenu'
import './Panel.css'

/**
 *
 */
class AdminOptionMenu extends Component {
    constructor() {
        super();
        this.state = {
            options : [
                <MainCategoryCreate/>,
                <SubCategoryCreate/>,
                <BrandCreate/> 
            ],
            indexOption : null
        }
    }

    render() {
        const {options} = this.state;
        var buttonClose;

        if(this.state.indexOption != null) {
            buttonClose = <button id="button-close" onClick={((e) => {
                this.setState({
                    indexOption : null
                })
            })}><img src="https://www.lillytrialguide.com/images/oncology/icons/oc_share_close.png"/></button>
        }

        return (
            <div id="options">
                <h3>Options</h3>
                <ul id="menu-options">
                    <li>Categorie<button onClick={((e) => {
                        this.setState({
                            indexOption : 0
                        })
                    })}>Ajouter</button><button>Editer</button></li>
                    <li>Sous Categorie<button onClick={((e) => {
                        this.setState({
                            indexOption : 1
                        })
                    })}>Ajouter</button><button>Editer</button></li>
                    <li>Marque<button onClick={((e) => {
                        this.setState({
                            indexOption : 2
                        })
                    })}>Ajouter</button><button>Editer</button></li>
                </ul>
                <div id="testtest">
                    {buttonClose}
                    {options[this.state.indexOption]}
                </div>
                <AdminEditMenu title="Categorie" entity="main_categories"/>
            </div>
        );
    }
}

export default AdminOptionMenu;