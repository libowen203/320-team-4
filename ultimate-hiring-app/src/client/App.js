import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './Components/Menu';

import PublicView from './Pageviews/PublicView';
import ManagerView from './Pageviews/ManagerView';
import ErrorPage from './Pageviews/ErrorPage';
import ManagePostingsView from './Pageviews/ManagePostingsView';

class App extends Component {
    render() {
        return (
          <div class = "view">
            <header>
              <Menu />
            </header>
            <main>
            <Switch>
              <Route exact path="/" component ={PublicView}/>
              <Route exact path="/ManagerView" component= {ManagerView}/>
              <Route exact path="/ManagePostingsView" component= {ManagePostingsView}/>
              <Route component= {ErrorPage}/>
            </Switch>
            </main>
          </div>
        );
    }
}

export default App;
