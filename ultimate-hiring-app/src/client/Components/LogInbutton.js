import React, {Component} from 'react';
import ManagerView from '../Pageviews/ManagerView';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class LogInbutton extends Component{
    render(){
        return (
          <Router>
              <ul>
                  <li>
                   <Link to="/managerview">LogIn</Link>
                  </li>
              </ul>
                <div>
                  <Route exact path="/managerview" component={ManagerView} />
                </div>
          </Router>
        );
    }
}

export default LogInbutton;
