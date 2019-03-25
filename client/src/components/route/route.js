import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Search from "../search/search.js";
import Home from "../home/home.js";
import AdminPanel from "../Admin/Panel";
import Article from "../article";
import Connection from "../Auth/Connection.js";
import Inscription from "../Auth/Inscription.js";
import Footer from "../footer/footer";
import Nav from "../navbar/navbar";
import Shooping_cart from "../Shooping/Shooping_cart";

function Routing() {
  return (
    <Router>
      <div>
        <Route path="/" component={Nav_render} />
        <Route exact path="/" component={Home_render} />
        <Route exact path="/search" component={Search_render} />
        <Route exact path="/inscription" component={inscription} />
        <Route exact path="/connexion" component={connection} />
        <Route exact path="/admin/panel" component={AdminPanel_render} />
        <Route exact path="/shooping_cart" component={Shooping_cart_render} />
        <Route exact path="/products/:id" component={article_render} />
        <Route path="/" component={Footer_render} />
      </div>
    </Router>
  );
}

function Home_render() {
  return <Home />;
}

function Search_render() {
  return <Search />;
}

function inscription() {
  return <Inscription />;
}
function connection() {
  return <Connection />;
}
function AdminPanel_render() {
  return <AdminPanel />;
}
function article_render() {
  return <Article />;
}

function Footer_render() {
  return <Footer />;
}

function Nav_render() {
  return <Nav />;
}

function Shooping_cart_render() {
return <Shooping_cart />;
}
export default Routing;
