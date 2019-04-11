import React, {Component} from 'react';
import JobView from '../Components/JobView';
import LogInbutton from '../Components/LogInbutton';

class ManagePostingsView extends Component {
    render() {
        return (
          <div class = "view">
            <header>
              <LogInbutton />
            </header>
            <div className = "container">
            <JobView />
            </div>
          </div>
        );
    }

}

export default ManagePostingsView;
