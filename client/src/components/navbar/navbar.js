import React, { Component } from "react";
import search_icon from "../../assets/search_icon.png";
import profil_icon from "../../assets/profil_icon.png";
import shopping_cart from "../../assets/shopping_cart.png";
import "./navbar.css";
import axios from "axios";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      categories: [
        {
          nameOfMainCategory: "",
          subCategories: []
        }
      ]
    };
  }

  componentDidMount = () => {
    axios.get("/api/main_categories").then(response => {
      response.data["hydra:member"].forEach((mainCategory, keyMainCategory) => {
        this.state.categories[keyMainCategory] = {
          idMainCategory: mainCategory["@id"],
          nameOfMainCategory: mainCategory.name,
          subCategories: []
        };
        mainCategory.subCategories.forEach(lienSubCategory => {
          axios.get(lienSubCategory).then(obj => {
            this.state.categories[keyMainCategory].subCategories.push({
              idMainCategory: mainCategory["@id"],
              name: obj.data.name,
              path: obj.data["@id"],
              thumbnail: obj.data.thumbnail
            });
            this.setState({
              isLoaded: true,
              categories: this.state.categories
            });
          });
        });
      });
    });
  };

  test = nameMainCategory => {
    for (var key in this.state.categories) {
      if (this.state.categories[key].nameOfMainCategory === nameMainCategory) {
      }
    }
  };

  render() {
    const { categories } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                <a href="/" className="navbar-brand">
                  <strong>PURE-TECH</strong>
                </a>
              </div>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-toggle"
                aria-controls="navbar-toggle"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbar-toggle">
                <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                  <form className="form-inline form_navbar">
                    <input
                      className="form-control search_bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-back" type="submit">
                      <img src={search_icon} alt="icon" />
                    </button>
                  </form>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-12 col-12 mx-auto">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <a href="/connexion">
                      <img
                        src={profil_icon}
                        className="img_hover d-none d-sm-none d-md-block"
                        alt="profil"
                      />
                    </a>
                    <a
                      href="/connexion"
                      className="text-uppercase d-sm-block d-md-none text-right a-link-drop"
                    >
                      Mon compte
                    </a>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-12 col-12 mx-auto">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <a href="/shooping_cart">
                      <img
                        src={shopping_cart}
                        className="img_hover d-none d-sm-none d-md-block"
                        alt="shopping"
                      />
                    </a>
                    <a
                      href="#"
                      className="text-uppercase d-sm-block d-md-none text-right a-link-drop"
                    >
                      Mon panier
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="col-md-4 col-sm-12 col-12">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle btn-back-drop text-uppercase"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Nos produits
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >

                    <div className="test">
                      {categories.map(category => (
                        <div key={category.nameOfMainCategory}>

                          <p id={category.nameOfMainCategory} onClick={e => { this.test(e.target.id); }}
                            className="a_cat text-uppercase categories-margin font-weight-bold">
                            {category.nameOfMainCategory}
                          </p>

                          <div className="sub_block">
                            {category.subCategories.map(sub => (
                              <a href={"/search?sub_category="+ sub.path} className="a_sub" key={sub.name}>{sub.name}</a>
                            ))}
                          </div>

                        </div>
                      ))}
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

export default Navbar;
