import React, { Component } from 'react';
import FieldAdd from '../../Field/Add';


/**
 *
 */
class ProductCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subCategory: [],
            product: [
                {
                    name: '',
                    description: '',
                    price: 0.0,
                    picture: [
                        ''
                    ],
                    thumbnail: '',
                    quantity: 0,
                    weight: 0,
                    date: "aujourdhui",
                    subCategory: "api/sub_categories/1",
                    stockStatus: 'api/stock_statuses/1',
                    productBrand: 'api/product_brands/1'

                }
            ],
            default: null,
            number: 1,
            send: false,
        };

        this.setState({
            default: this.state.product
        });
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
        const { send, product } = this.state;
        let form = [];
        var field = [];

        for (var i = 0; i < this.state.number; i++) {
            if (send) {
                field[i] = <FieldAdd entity={"products"} data={product[i]} />
            }

            form[i] = <div className="champ">
                {field[i]}
                <input id={i} type="text" placeholder="Nom du produit" onChange={((e) => {
                    var tab = { ...product };
                    tab[e.target.id].name = e.target.value;

                    this.setState({
                        product: tab,
                        send: false
                    });
                })} />
                <textarea id={i} type="text" placeholder="Description" onChange={((e) => {
                    var tab = { ...product };
                    tab[e.target.id].thumbnail = e.target.value;

                    this.setState({
                        product: tab,
                        send: false
                    });
                })}></textarea>
                <input id={i} type="text" placeholder="Image" onChange={((e) => {
                    var tab = { ...product };
                    tab[e.target.id].thumbnail = e.target.value;

                    this.setState({
                        product: tab,
                        send: false
                    });
                })} />
                <div id="testy"><img src={product[i].thumbnail} /></div></div>
        }

        return (
            <div id="product-wrapper">
                <h3>Ajouter un nouveau produit</h3>
                <button onClick={((e) => {
                    if (this.state.number < 3) {
                        var mytab = { ...product };
                        mytab[this.state.number] = this.state.default;

                        this.setState({
                            number: this.state.number + 1,
                            product: mytab
                        });
                    }
                })}>+</button>
                <button onClick={((e) => {
                    if (this.state.number > 1) {
                        var tab = { ...product };
                        tab[this.state.number - 1] = null;

                        this.setState({
                            number: this.state.number - 1
                        })
                    }
                })}>-</button>
                <form id="form-product-create" onSubmit={this.handleSubmit}>
                    {form}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ProductCreate;