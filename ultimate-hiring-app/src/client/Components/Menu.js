import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {Redirect} from "react-router-dom";
import {Button } from 'reactstrap';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state= {LoggedIn:false}
  }
  
  toggleSignIn() {
    
    this.setState({
      LoggedIn: !this.state.LoggedIn
    });

  }
  render() {
    return (
        <div>
          <Navbar style={{backgroundColor: '#519e2f'}}>
            <NavbarBrand style={{color: 'white'}}> Ultimate Hiring App</NavbarBrand>
            <Nav className="ml-auto" navbar>
              {this.state.LoggedIn ? (
                  <NavItem>
                    <NavLink href="/"> Log Out </NavLink>
                    <Button class="btn" onClick={this.toggleSignIn.bind(this)}> Log Out </Button>
                  </NavItem>
              ) : (
                  <NavItem>
                    <NavLink href="/managerview" > Manager Log In </NavLink>
                    <Button class="btn" onClick={this.toggleSignIn.bind(this)}> Manager Log In </Button>
                    <NavLink href="/employeeview" > Employee Log In </NavLink>
                    <Button class="btn" onClick={this.toggleSignIn.bind(this)}> Employee Log In </Button>
                  </NavItem>
              )}
          </Nav>
        </Navbar>
      </div>
    )
  }
}
export default Menu;
