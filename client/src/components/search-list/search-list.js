import React, { Component } from "react";
import axios from "axios";
import "./search-list.css";
import product_shopping_cart from "../../assets/product_shopping_cart.png";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class Search_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
      value: { min: 50, max: 700 }
    };
  }

  componentDidMount() {
    const path = window.location.search;
    axios.get("/api/products"+path).then(
      result => {
        this.setState({
          isLoaded: true,
          products: result.data["hydra:member"]
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  render() {
    const { products } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="bg-mark">
              <h4 className="title-mark text-center text-uppercase">Marques</h4>
            </div>
            <div className="bg-light contain_text_mark">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="asus">Asus</label>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <input
                    className="input_mark"
                    type="checkbox"
                    name="asus"
                    id="asus"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label htmlFor="HP">HP</label>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <input
                    className="input_mark"
                    type="checkbox"
                    name="HP"
                    id="HP"
                  />
                </div>
              </div>
            </div>

            <div className="bg-mark">
              <h4 className="title-mark text-center text-uppercase">Prix</h4>
            </div>
            <div className="bg-light">
              <InputRange
                maxValue={2000}
                minValue={0}
                value={this.state.value}
                onChange={value => this.setState({ value })}
              />
            </div>
          </div>

          <div className="col-md-9 bg-white">
            {products.map(product => (
              <div key={product.id} className="row contain-search">
                <div className="col-md-3 col-sm-3">
                  <img
                    className="picture_search"
                    src={product.thumbnail}
                    alt={product.name}
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="block-description">
                    <a href={"products/" + product.id} className="title_search">
                      {product.name}
                    </a>
                    <p className="description_search">{product.description}</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 text-center">
                  <h3>{product.price}€</h3>
                  <div className="row">
                    <div className="col-12">
                      <p className="">stock</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button className="button_shopping">
                        <img
                          className="shoppingcart"
                          src={product_shopping_cart}
                          alt="shopping cart"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Search_List;
