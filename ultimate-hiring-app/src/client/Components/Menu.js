import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar color="light">
          <NavbarBrand> Ultimate Hiring App</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/managerview"> Log in </NavLink>
            </NavItem>
          </Nav>
        </Navbar>

      </div>
    )
  }
}
export default Menu;
