import React, { Component } from 'react';
import FieldAdd from '../../../Field/Add';
import {getEntity} from '../../../Field/Get'
import '../Category.css';


/**
 *
 */
class SubCategoryCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            send : false,
            subCategory : [
                {
                    name: '',
                    thumbnail : ''
                }
            ],
            mainCategories : [],
            number: 1
        };
    }

    componentDidMount() {
        getEntity("/api/main_categories").then(data => {
            this.setState({
                mainCategories : data['hydra:member'],
                subCategory : [
                    {
                        name : '',
                        thumbnail : '',
                        mainCategory: "/api/main_categories/" + data['hydra:member'][0].id
                    }
                ]   
            });
        });

    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(!this.state.send) {
            this.setState({
                send : true
            });
        }
        else if(this.state.send) {
            this.setState({
                send : false
            });

            setTimeout(
                function() {
                    this.setState({send: true});
                }
                .bind(this),
                0
            );
        }
    }

    render() {
        const { send, subCategory, mainCategories } = this.state;
        let form = [];
        var field = [];

        const listMainCategories = mainCategories.map((item, key) =>
            <option key={key} value = {item.id}>{item.name}</option>
        );

        for(var i = 0; i < this.state.number; i++) {
            if(send) {
                field[i] = <FieldAdd entity={"sub_categories"} data={this.state.subCategory[i]}/>
            }

            form[i] = <div className="champ">
            {field[i]}
            <label> Grande catégorie
                <select id={i} onChange={((e) => { var tab = {...subCategory};
                    tab[e.target.id].mainCategory = "/api/main_categories/" + e.target.value;

                    this.setState({
                        subCategory : tab,
                        send : false
                    });
                })}>{listMainCategories}</select>
            </label>
            <label> Nom de la categorie
            <input id={i} type="text" onChange={((e) => { var tab = {...subCategory};
                tab[e.target.id].name = e.target.value;

                this.setState({
                    subCategory : tab,
                    send : false
                });
            })} />
            </label>
            <label> URL de l'image*
                <input id={i} type="text" onChange={((e) => { var tab = {...subCategory};
                    tab[e.target.id].thumbnail = e.target.value;

                    this.setState({
                        subCategory : tab,
                        send : false
                    });
                })}/>
            </label>
            <div id="testy"><img src={subCategory[i].thumbnail}/></div>
            </div>
        }

        return (
            <div id="main-category-wrapper">
                <h3>Ajouter une sous categorie</h3>
                <button onClick={((e) => {
                    if(this.state.number < 3) { var mytab = {...subCategory};
                        mytab[this.state.number] = {
                            thumbnail : '',
                            name : '',
                            mainCategory : "/api/main_categories/1"
                        }

                        this.setState({
                            number: this.state.number + 1,
                            subCategory : mytab
                        });
                    }})}>+</button>
                <button onClick={((e) => {
                    if(this.state.number > 1) { var tab = {...subCategory};
                        tab[this.state.number - 1] = null;
                        
                        this.setState({
                            number: this.state.number - 1
                        })
                    }})}>-</button>
                <form id="form-category-create" onSubmit={this.handleSubmit}>
                {form}
                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SubCategoryCreate;