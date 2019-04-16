import React, {Component} from 'react';
import JobView from '../Components/JobView';
import LogOutButton from '../Components/LogOutButton';
import ManagePostings from '../Components/ManagePostings';

class ManagePostingsView extends Component {
    render() {
        return (
          <div class = "view">
            <header>
              <LogOutButton />
            </header>
            <div className = "container">
            <ManagePostings />
            </div>
          </div>
        );
    }

}

export default ManagePostingsView;
