
import React, { Component } from 'react';
import FieldDelete from '../Field/Delete';
import './Panel';
import { getEntity } from '../Field/Get';

class AdminEditMenu extends Component {
    constructor() {
        super();

        this.state = {
            entity: [
                {
                    object: {
                        name: '',
                        thumbnail: ''
                    },
                    checked: false
                }
            ],
            entitySelect: [],
            clicked: false,
            status: ''
        }
    }

    componentDidMount() {
        getEntity("/api/" + this.props.entity)
            .then((result) => {
                var tab = [];
                result['hydra:member'].forEach((element, key) => {
                    tab[key] = {
                        object: element,
                        checked: false
                    }
                });

                this.setState({
                    entity: tab
                }
            );
        })
    }

    onClick(string) {
        this.setState({
            status: string
        })

        if (!this.state.clicked) {
            this.setState({
                clicked: true,
                entitySelect: this.state.entity.filter(elem => elem.checked)
            });
        }
        else if (this.state.clicked) {
            this.setState({
                clicked: false,
                entitySelect: []
            });

            setTimeout(
                function () {
                    this.setState({
                        clicked: true,
                        entitySelect: this.state.entity.filter(elem => elem.checked)
                    });
                }
                    .bind(this),
                0
            );
        }
    }

    render() {
        const { entity, entitySelect, clicked } = this.state;
        var elements = [];
        var interact;

        if (clicked && this.state.status != '') {
            if (this.state.status == "delete") {
                interact = <FieldDelete entity={entitySelect} />
            } else if (this.state.status == "update") {

            }

            setTimeout(
                function () {
                    this.setState({
                        status: ''
                    });
                }
                    .bind(this),
                2000
            );
        }

        this.state.entity.forEach((element, key) => {
            elements[key] = <li id="menu-list">
                <div id="infos-entity">
                    <p><img src={element.object.thumbnail} />
                        {element.object.name}
                        <input id={key} type="checkbox" onChange={((e) => {
                            var tab = [...entity]
                            tab[e.target.id].checked = e.target.checked;

                            this.setState({
                                entity: tab,
                                clicked: false
                            })
                        })} /></p>
                </div>
            </li>;
        });

        return (
            <div id="menu">
                {interact}
                <h3>Edit {this.props.title}</h3>
                <ul id="list-entity">{elements}</ul>
                <div><button onClick={((e) => {
                    this.onClick("delete");
                })}>Supprimer
                    </button>
                    <button onClick={((e) => {
                        this.onClick("update");
                    })}>Modifier</button>
                </div>
            </div>
        )
    }
}

export default AdminEditMenu;