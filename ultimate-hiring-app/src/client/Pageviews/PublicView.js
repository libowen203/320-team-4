import React, {Component} from 'react';
import JobView from '../Components/JobView';

class PublicView extends Component {
    render() {
        return (
          <div class = "view">
            <div className = "container">
            <JobView />
            </div>
          </div>
        );
    }

}

export default PublicView;





