import React, { FC, useState } from "react";
import {
  Navbar as BaseNavbar,
  NavbarBrand,
  NavbarToggler,
  Collapse
} from "reactstrap";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const Navbar: FC<Props> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarToggle = () => setIsOpen(!isOpen);

  return (
    <BaseNavbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">
        {title}
      </NavbarBrand>
      <NavbarToggler onClick={navbarToggle}></NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        {children}
      </Collapse>
    </BaseNavbar>
  );
};

export default Navbar;
