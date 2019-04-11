import React, {Component} from 'react';
import JobView from '../Components/JobView';
import LogInbutton from '../Components/LogInbutton';
import ManagePostings from '../Components/ManagePostings';

class ManagePostingsView extends Component {
    render() {
        return (
          <div class = "view">
            <header>
              <LogInbutton />
            </header>
            <div className = "container">
            <ManagePostings />
            </div>
          </div>
        );
    }

}

export default ManagePostingsView;
