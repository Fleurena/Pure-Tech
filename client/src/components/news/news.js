import React, { Component } from "react";

import Slider from "react-slick";
import "./news.css";
import axios from "axios";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
      stock: []
    };
  }

  componentDidMount() {
    var date = new Date();
    date.setDate(date.getDate() - 40);

    axios.get("/api/products?date%5Bafter%5D=" + date.toISOString()).then(
      result => {
        var res = result.data["hydra:member"];

        this.setState({
          isLoaded: true,
          products: res
        });

        res.forEach(elem => {
          axios.get(elem.stockStatus).then(resulti => {
            this.state.stock.push(resulti.data);
            this.setState({
              stock: this.state.stock
            });
          });
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
    const { products, stock } = this.state;
    var listNews;

    if (products.length != 0 && products.length == stock.length) {
      listNews = products.map((product, key) => (
        <div className="news-block" key={product.id}>
          <a href={"/products/" + product.id} >
            <img src={product.thumbnail} alt={product.name} />
            <h6 className="text-center h6-news">{product.name}</h6>
          </a>
          <p className="text-center font-weight-bold text-stock">{this.state.stock[key].name}</p>
          <h4 className="text-center h4-news">{product.price}€</h4>
          <h5 className="text-center h5-news">{product.stock_status_id}</h5>
        </div>
      ));
    }

        var settings = {
            dots: true,
            dotsClass: "slick-dots dot-2",
            infinite: true,
            speed: 600,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]
        };
        return (
            <div className="news-contain col-12">
                <h2 className="text-uppercase">Nouveautés</h2>
                <Slider {...settings}>
                {listNews}
                </Slider>
            </div>
        );
    }
}

export default News;