import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container, Nav } from "reactstrap";

import Navbar from "components/Navbar";
import NavItemLink from "components/NavItemLink";

import Home from "./Home";
import About from "./About";
import Schools from "./Schools";
import Register from "./Register";

export const Pages: FC = () => {
  return (
    <BrowserRouter>
      <Navbar title="Pangasinan Tertiary Locator">
        <Nav navbar>
          <NavItemLink to="/">Home</NavItemLink>
          <NavItemLink to="/about">About</NavItemLink>
          <NavItemLink to="/schools">Schools</NavItemLink>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItemLink to="/login">Login</NavItemLink>
          <NavItemLink to="/register">Register</NavItemLink>
        </Nav>
      </Navbar>
      <Container tag="main" fluid>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/schools" component={Schools} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
