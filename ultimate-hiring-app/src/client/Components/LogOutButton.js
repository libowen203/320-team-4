import React, {Component} from 'react';
import PublicView from '../App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class LogOutbutton extends Component{
    render(){
        return (
        <Router>
            <ul>
                <li>
                 <Link to="/">LogOut</Link>
                </li>
            </ul>
              <div>
                <Route exact path="/" component={PublicView} />
              </div>
        </Router>
        );
    }
}

export default LogOutbutton;