import React, { Component } from 'react';
import FieldAdd from '../../Field/Add';

/**
 *
 */
class BrandCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allBrand : [
                {
                    name: '',
                    thumbnail : '',
                    liens : ''
                }
            ],
            number: 1,
            send: false
        };
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
        const { send , allBrand} = this.state;
        let form = [];
        var field = [];

        for(var i = 0; i < this.state.number; i++) {
            if(send) {
                field[i] = <FieldAdd entity={"product_brands"} data={allBrand[i]}/>
            }

            form[i] = <div className="champ">
            {field[i]}
            <label> Nom de la marque
            <input id={i} type="text" onChange={((e) => { var tab = {...allBrand};
                tab[e.target.id].name = e.target.value;

                this.setState({
                    allBrand : tab,
                    send : false
                });
            })} />
            </label>
            <label> URL de l'image*
                <input id={i} type="text" onChange={((e) => { var tab = {...allBrand};
                    tab[e.target.id].thumbnail = e.target.value;

                    this.setState({
                        allBrand : tab,
                        send : false
                    });
                })}/>
            </label>
            <label> Lien du site
                <input id={i} type="text" onChange={((e) => { var tab = {...allBrand};
                    tab[e.target.id].thumbnail = e.target.value;

                    this.setState({
                        allBrand : tab,
                        send : false
                    });
                })}/>
            </label></div>
        }

        return (
            <div id="main-category-wrapper">
                <h3>Ajouter une marque</h3>
                <button onClick={((e) => {
                    if(this.state.number < 3) { var mytab = {...allBrand};
                        mytab[this.state.number] = {
                            thumbnail : '',
                            name : '',
                            liens: ''
                        }
                        this.setState({
                            number: this.state.number + 1,
                            allBrand : mytab
                        });
                    }})}>+</button>
                <button onClick={((e) => {
                    if(this.state.number > 1) { var tab = {...allBrand};
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

export default BrandCreate;