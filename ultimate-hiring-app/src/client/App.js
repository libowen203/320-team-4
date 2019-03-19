import React, {Component} from 'react';
import JobPosting from './Components/JobPosting';
class App extends Component {
    render() {
        return (
            <div className="Postings">
                <JobPosting/>
            </div>
        );
    }
}

export default App;