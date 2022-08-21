import React from "react";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import User from "./User";
import SearchMenu from "../Search";
import Temp from "../Temp";

// import { Search } from "@mui/icons-material";

const ReactRDom = () => {
  return (
    <>
      <div className="navbar_demo">
        <NavLink activeClassName="active_link" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active_link" exact to="/About">
          About
        </NavLink>
        <NavLink activeClassName="active_link" exact to="/temp">
          Check Temprature
        </NavLink>
        <NavLink activeClassName="active_link" exact to="/search">
          Search
        </NavLink>
        <NavLink activeClassName="active_link" exact to="/Contact">
          Contact
        </NavLink>
        {/* useParams */}
        <NavLink activeClassName="active_link" exact to="/User/ashu">
          User
        </NavLink>
      </div>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={() => <About name="About" />} exact />
        <Route path="/search" component={SearchMenu} exact />
        <Route path="/Temp" component={Temp} exact />
        <Route path="/contact" render={() => <About name="Contact" />} exact />
        <Route path="/user/:fname" component={User} exact />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default ReactRDom;
