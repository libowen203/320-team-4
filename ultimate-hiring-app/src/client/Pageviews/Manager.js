import React, {Component} from 'react';
import JobPosting from '../Components/JobPosting';
import ManagerDash from '../Components/ManagerDash'; //make sure to switch this back to JobPosting

class App extends Component {
    render() {
        return (
            <div className="Postings">
                <JobPosting />
                <ManagerDash />
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default App;
