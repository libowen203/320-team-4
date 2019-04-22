import React, {Component} from 'react';
import JobView from '../Components/JobView';
import LogOutButton from '../Components/LogOutButton';
import ManagePostings from '../Components/ManagePostings';

//Renderds Manage Postings to show Job Posting cards with edit/delete feature
class ManagePostingsView extends Component {
    render() {
        return (
          <div className = "view">
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
