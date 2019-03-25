import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row justify-content-md-center">
          <div className="col-12 col-sm-3 col-md-3 col-lg-3">
            <ul className="link-group">
              <li className="title-link">Pure-Tech.com</li>
              <li>
                <a className="link" href="/">
                  Qui sommes nous ?
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Nos Services
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Contactez-Nous
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-3 col-md-3 col-lg-3">
            <ul className="link-group">
              <li className="title-link">Pure-Tech et vous</li>
              <li>
                <a className="link" href="/">
                  Nouveautés
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Nos Partenaires
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Signaler un bug
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-3 col-md-3 col-lg-3">
            <ul className="link-group">
              <li className="title-link">A Propos</li>
              <li>
                <a className="link" href="/">
                  Plan du site
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Conditions générales de vente
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Informations légales
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
