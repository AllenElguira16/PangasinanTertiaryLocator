import React, { FC } from "react";
import { NavLink as Link } from "react-router-dom";
import { NavLink, NavItem } from "reactstrap";

interface Props {
  to: string;
}

const NavItemLink: FC<Props> = ({ to, children }) => {
  return (
    <NavItem>
      <NavLink tag={Link} to={to} activeClassName="active" exact>
        {children}
      </NavLink>
    </NavItem>
  );
};

export default NavItemLink;
