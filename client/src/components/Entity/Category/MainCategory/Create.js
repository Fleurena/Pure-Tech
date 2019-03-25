import React, { Component } from 'react';
import FieldAdd from '../../../Field/Add';
import '../Category.css';


/**
 *
 */
class MainCategoryCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCategory: [
                {
                    name: '',
                    thumbnail: ''
                }
            ],
            number: 1,
            send: false,
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (!this.state.send) {
            this.setState({
                send: true
            });
        }
        else if (this.state.send) {
            this.setState({
                send: false
            });

            setTimeout(
                function () {
                    this.setState({ send: true });
                }
                    .bind(this),
                0
            );
        }
    }

    render() {
        const { send, allCategory } = this.state;
        let form = [];
        var field = [];

        for (var i = 0; i < this.state.number; i++) {
            if (send) {
                field[i] = <FieldAdd entity={"main_categories"} data={allCategory[i]} />
            }

            form[i] = <div className="champ">
                {field[i]}
                <label> Nom de la categorie
            <input id={i} type="text" onChange={((e) => {
                        var tab = { ...allCategory };
                        tab[e.target.id].name = e.target.value;

                        this.setState({
                            allCategory: tab,
                            send: false
                        });
                    })} />
                </label>
                <label> URL de l'image*
                <input id={i} type="text" onChange={((e) => {
                        var tab = { ...allCategory };
                        tab[e.target.id].thumbnail = e.target.value;

                        this.setState({
                            allCategory: tab,
                            send: false
                        });
                    })} />
                </label>
                <div id="testy"><img src={allCategory[i].thumbnail} /></div></div>
        }

        return (
            <div id="main-category-wrapper">
                <h3>Ajouter une categorie</h3>
                <button onClick={((e) => {
                    if (this.state.number < 3) {
                        var mytab = { ...allCategory };
                        mytab[this.state.number] = {
                            thumbnail: '',
                            name: '',
                            myimg: ''
                        }
                        this.setState({
                            number: this.state.number + 1,
                            allCategory: mytab
                        });
                    }
                })}>+</button>
                <button onClick={((e) => {
                    if (this.state.number > 1) {
                        var tab = { ...allCategory };
                        tab[this.state.number - 1] = null;

                        this.setState({
                            number: this.state.number - 1
                        })
                    }
                })}>-</button>
                <form id="form-category-create" onSubmit={this.handleSubmit}>
                    {form}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default MainCategoryCreate;