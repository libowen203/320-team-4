import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state= {notLoggedIn:true}
  }

  render() {
    return (
      <div>
        <Navbar color="light">
          <NavbarBrand> Ultimate Hiring App</NavbarBrand>
          <Nav className="ml-auto" navbar>
          { notLoggedIn &&
            <NavItem>
            <NavLink href="/managerview"> Log in </NavLink>
            </NavItem>
          }
          { !notLoggedIn &&
            <NavItem>
            <NavLink href="/"> Log out </NavLink>
            </NavItem>
          }
            
          </Nav>
        </Navbar>
      </div>
    )
  }
}
export default Menu;
