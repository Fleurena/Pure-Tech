import React, { Component } from 'react';
import { getEntity } from '../../Field/Get'

/**
 *
 */
class StockEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }

        this.open = false;
    }

    updateStock() {
        getEntity("/api/products")
            .then((response) => {
                this.setState({
                    products: response['hydra:member']
                })
            })
    }

    clearStock() {
        this.setState({
            products: []
        })
    }

    handleSubmit() {

    }

    render() {
        const { products } = this.state;
        var form;

        if (this.open) {
            form = <div><form id="form-stock-edit" onSubmit={this.handleSubmit}>
                {products.map((product, key) => (
                    <div>
                        <input type="text" placeholder={product.name} disabled/>
                        <select>
                            <option>En stock</option>
                            <option>En rupture</option>
                        </select>
                        <input type="number" min="1" max="100" step="5" value={product.quantity}/>
                    </div>
                ))}
                <input type="submit" value="Submit" />
            </form>
            </div>
        }

        return (
            <div id="main-stock-edit">
                <button onClick={((e) => {
                    this.open = !this.open;

                    (this.open) ? this.updateStock() : this.clearStock();
                })}>Stock</button>
                {form}
            </div>
        );
    }
}

export default StockEdit;