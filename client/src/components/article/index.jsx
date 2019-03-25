import React, { Component } from "react";
import "./article.css";
import shopping_cart_product from "../../assets/shopping_cart_product.png";
import axios from "axios";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      isloaded: false
    };
  }
  componentDidMount() {
    const path = "http://localhost:8000/api" + window.location.pathname;
    axios.get(path).then(
      result => {
        this.setState({
          isloaded: true,
          article: result.data
        });
        console.log(this.state.article);
      },
      error => {
        console.log(error);
      }
    );
    }
    render() { 
        const article = this.state.article;
        return (                
            <div>
                <div className="container">
                    <div key={article.id}>
                        <div className="row">

                            <div className="col-md-12">
                                <div className="row row_product">

                                    <div className="col-md-4 col-sm-12 col-12 text-center">
                                        <img className="img-fluid" src={article.thumbnail} alt={article.name} />
                                            <div className="row">
                                                <div className="col-md-4">
                                                    image
                                                </div>
                                                <div className="col-md-4">
                                                    image
                                                </div>                                        
                                            </div>
                                    </div>

                                    <div className="col-md-8 col-sm-12 col-12">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h1 className="title_product">{article.name}</h1>
                                                <p className="text-justify">{article.description}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 justify-content-end">
                                                <h3 className="text-right">stock</h3>
                                            </div>
                                        </div>

                                        <div className="row row_color_product">
                                            <div className="col-md-6 col-12">
                                                <h3 className="text-left">Couleurs</h3>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <h3 className="text-right d-flex justify-content-end">{article.price}€</h3>
                                            </div>
                                        </div>

                                        <div className="row row_quantity_product">
                                            <div className="col-5">
                                                <div className="bg-quantity rounded text-white text-center">
                                                <div className="row quantity_pad">
                                                    <div className="col-md-6">
                                                        <label htmlFor="quantity">Quantités :</label>                                                    
                                                    </div>
                                                    <div className="col-md-6">
                                                        <select id="quantity" className="select_product">
                                                            <option value="1">1</option> 
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                        </select>                                                    
                                                    </div>                                          
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-7">
                                                <button className="bg-product rounded justify-content-center text-white d-flex">
                                                    <h5 className="font-weight-light product_h5">Ajouter au Panier</h5>
                                                    <img className="img_product" src={shopping_cart_product} />
                                                </button>
                                            </div>                                    
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                        </div>   

                        <div className="row row_product">
                            <div className="col-md-12">
                                <div className="row">

                                    <div className="col-md-12">
                                        <h2 className="font-weight-light text-uppercase">Descriptif du produit</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <p>{article.description}</p>
                                        </div>
                                        <div className="col-md-5 text-center">
                                            <img className="img-fluid" src={article.thumbnail} alt={article.name} />
                                        </div>                                
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row row_product">
                            <div className="col-md-12">
                                <div className="row">

                                    <div className="col-md-12">
                                        <h2 className="font-weight-light text-uppercase">Caractéristiques du produit</h2>
                                    </div>
                                </div>

                                <div className="row">
                                        <div className="col-md-12 block_caract">
                
                                        <h4 className="font-weight-light text-uppercase">Sous-catégorie</h4>
                                        <div className="row row_alternate bg-alternate">
                                            <div className="col-md-4 col-sm-4 col-4 font-weight-normal">Sous-titre</div>
                                            <div className="col-md-8 col-sm-8 col-8">text</div>
                                        </div> 
                                        <div className="row row_alternate bg-alternate">
                                            <div className="col-md-4 col-sm-4 col-4 font-weight-normal">Sous-titre</div>
                                            <div className="col-md-8 col-sm-8 col-8">text</div>
                                        </div>
                                        <div className="row row_alternate bg-alternate">
                                            <div className="col-md-4 col-sm-4 col-4 font-weight-normal">Sous-titre</div>
                                            <div className="col-md-8 col-sm-8 col-8">text</div>
                                        </div>
                                        </div>
                                                            
                                </div>
                                    
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    );
  }
}

export default Article;
