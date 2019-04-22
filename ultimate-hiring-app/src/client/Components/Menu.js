import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state= {LoggedIn:false}
  }

  render() {
    return (
        <div>
          <Navbar style={{backgroundColor: '#519e2f'}}>
            <NavbarBrand style={{color: 'white'}}> Ultimate Hiring App</NavbarBrand>
            <Nav className="ml-auto" navbar>
              {this.LoggedIn ? (
                  <NavItem>
                    <NavLink href="/" onClick={this.setState({LoggedIn: false})}> Log Out </NavLink>
                  </NavItem>
              ) : (

                  <NavItem>
                    <NavLink href="/managerview" > Manager Log In </NavLink>
                    <NavLink href="/employeeview" > Employee Log In </NavLink>
                  </NavItem>

              )}
          </Nav>
        </Navbar>
      </div>
    )
  }
}
export default Menu;
