import React, {Component} from 'react';
import JobView from '../Components/JobView';
import Menu from '../Components/Menu';
class App extends Component {
    render() {
        return (
          <div class = "view">
          <header>
            <Menu />
          </header>
          <div className = "container">
            <JobView/>
          </div>
          </div>
        );
    }
}

export default App;
