import React, {Component} from 'react';
import LogInbutton from '../Components/LogInbutton';
import JobView from '../Components/JobView';
class App extends Component {
    render() {
        return (
          <div class = "view">
          <header>
          {/*} Menu component should go here, with login option */}
            <div className="LogIn">
                <LogInbutton/>
            </div>
          </header>
          <div className = "container">
            <JobView/>
          </div>
          </div>
        );
    }
}

export default App;
