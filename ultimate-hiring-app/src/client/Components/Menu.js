import React, {Component} from 'react';
import LogInbutton from '../Components/LogInbutton';

class Menu extends Component {
  render() {
    return (
      <div class = "nav">
        <div id = "branding"> <h3> Ultimate Hiring App </h3></div>
        <LogInbutton />
      </div>
    )
  }
}
export default Menu;
